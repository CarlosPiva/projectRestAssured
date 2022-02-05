package actions;

import Controllers.SimulacaoController;
import io.restassured.response.Response;
import org.apache.http.HttpStatus;
import steps.BaseTest;
import utils.Utils;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.junit.Assert.*;

public class SimulacoesAction extends BaseTest {

    Utils utils = new Utils();
    SimulacaoController dadosSimulacao = new SimulacaoController();

    private final String SIMULACAO = utils.lerArquivoYaml("endpoints","criarSimulacao");
    private final String ALTERAR_SIMULACAO = utils.lerArquivoYaml("endpoints","alterarSimulacao");
    private final String CONSULTAR_SIMULACAO = utils.lerArquivoYaml("endpoints", "consultarSimulacaoComParametro");
    private final String DELETAR_SIMULACAO = utils.lerArquivoYaml("endpoints", "deletarSimulacao");
    private final String CONTRATO_API = "jsonValidations.json";

    Response responseSimulacao = null;
    Integer statusCode = null;
    String cpf= null;


    public void validarContrato(){
        given()
                .when()
                    .get(SIMULACAO)
                .then()
                .body(matchesJsonSchemaInClasspath(CONTRATO_API));
    }

    public void criarSimulacao(){

        dadosSimulacao.setCpf("656956656");
        System.out.println(dadosSimulacao.getCpf());

        responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 201);
    }

    public void verificarSimulacaoCadastradaComSucesso(){

        assertEquals(responseSimulacao.path("nome"), utils.lerArquivoYaml("simulacao", "nome"));
        assertEquals(responseSimulacao.path("cpf"), dadosSimulacao.getCpf());
        assertEquals(responseSimulacao.path("email"), utils.lerArquivoYaml("simulacao", "email"));
        assertEquals(responseSimulacao.path("valor").toString(), utils.lerArquivoYaml("simulacao", "valor"));
        assertEquals(responseSimulacao.path("parcelas").toString(), utils.lerArquivoYaml("simulacao", "parcelas"));
        assertEquals(responseSimulacao.path("seguro").toString(), utils.lerArquivoYaml("simulacao", "seguro"));
        utils.delete(responseSimulacao.path("id"), DELETAR_SIMULACAO, 200);
    }

    public void criarSimulacaoComMesmoCPF(){

        dadosSimulacao.setCpf(utils.lerArquivoYaml("simulacao", "cpfExistente"));
        responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);
    }

    public void validarMensagemCpfExistente(){

        assertEquals(utils.lerArquivoYaml("simulacao","msgCpfExistente"), responseSimulacao.path("mensagem"));
    }

    public void criarSimulacaoComEmailInvalido(){

        dadosSimulacao.setEmail(utils.lerArquivoYaml("simulacao", "emailInvalido"));
        responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);
    }

    public void validarEmail(){
        assertEquals(utils.lerArquivoYaml("simulacao", "msgEmailInvalido"), responseSimulacao.path("erros.email"));
    }

    public void criarSimulacaoComValorNaoPermitido(String valor){

        switch (valor){
            case "mínimo":

                dadosSimulacao.setValor(01);
                responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);

                break;

            case "máximo":

                dadosSimulacao.setValor(100000);
                responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);

                break;
        }
    }

    public void validarValorMinimo(){
        assertEquals(utils.lerArquivoYaml("simulacao","msgValorMinimo"), responseSimulacao.path("erros.valor"));
    }

    public void validarValorMaximo(){
        assertEquals(utils.lerArquivoYaml("simulacao","msgValorMaximo"), responseSimulacao.path("erros.valor"));
    }

    public void criarSimulacaoNumerosDeParcelasNaoPermitidas(String parcelas){

        switch (parcelas){
            case "mínimo":

                dadosSimulacao.setParcelas(1);
                responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);

                break;

            case "máximo":

                dadosSimulacao.setParcelas(60);
                responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);

                break;
        }
    }

    public void validarQuantidadeMinimaDeParcelas(){
        assertEquals(utils.lerArquivoYaml("simulacao","msgParcelaMinima"), responseSimulacao.path("erros.parcelas"));
    }

    public void validarQuantidadeMaximaDeParcelas(){
        assertEquals(utils.lerArquivoYaml("simulacao","msgParcelaMaxima"), responseSimulacao.path("erros.parcelas"));
    }

    public void criarSimulaçãoSemSeguro(){
        dadosSimulacao.setSeguro(false);
        dadosSimulacao.setCpf("36598221198");
        responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 201);
    }

    public void validarSimulacaoSemSeguro(){
        assertEquals(false, responseSimulacao.path("seguro"));
        utils.delete(responseSimulacao.path("id"), DELETAR_SIMULACAO, 200);
    }

    public void alterarDadosSimulação(String cpf, Integer statusCode){

        responseSimulacao = utils.get(SIMULACAO);
        this.cpf = responseSimulacao.path("cpf[1]").toString();
        System.out.println(cpf);
        dadosSimulacao.setNome("Pedro - Nome Alterado " + System.nanoTime());
        dadosSimulacao.setCpf(cpf);

        responseSimulacao = utils.put(dadosSimulacao, cpf, ALTERAR_SIMULACAO, statusCode);
    }

    public void validarAlteracao(){
        assertEquals(utils.lerArquivoYaml("simulacao", "cpfExistente"), responseSimulacao.path("cpf"));
        assertEquals(dadosSimulacao.getNome(), responseSimulacao.path("nome"));
    }

    public void validarMensagemErro(String mensagem) {

        switch (mensagem) {
            case "CPF não encontrado":
                assertEquals(utils.lerArquivoYaml("simulacao", "msgCpfNaoEncontrado"), responseSimulacao.path("mensagem"));
                break;

            case "CPF existente":
                validarMensagemCpfExistente();
                break;
        }
    }

    public void consultarTodasSimulacoes(){
        statusCode=
                given()
                .when()
                    .get(SIMULACAO)
                .then()
                    .extract()
                        .statusCode();
    }
    public void validarListaConsultaSimulacao() {

        if (statusCode.equals(HttpStatus.SC_OK)){
            assertTrue(true);
        }
        if( statusCode.equals(HttpStatus.SC_NOT_FOUND)){
            assertTrue(true);
        }
    }

    public void consultarSimulacaoEspecifica(String cpf_consulta, Integer statusCode){

        cpf = cpf_consulta;
        responseSimulacao = utils.getComParametro(CONSULTAR_SIMULACAO, cpf, statusCode);
    }

    public void validarSimulacaoConsultada(){
        assertEquals(cpf, responseSimulacao.path("cpf"));
    }

    public void excluirSimulacao(){
        criarSimulacao();
        Integer id_criado = responseSimulacao.path("id");
        System.out.println(id_criado);
        responseSimulacao = utils.delete(id_criado, DELETAR_SIMULACAO, 200);
    }

    public void validarExclusao(String mensagem){

        switch (mensagem) {
            case "Exclusão com Sucesso":
                assertEquals("OK", responseSimulacao.body().asString());
                break;

            case "Simulação não encontrada":
                assertEquals("Simulação não encontrada", responseSimulacao.body().asString());
                break;
        }
    }

    public void excluirSimulacaoNaoEncontrada(){
        responseSimulacao = utils.delete(1000000, DELETAR_SIMULACAO, 404);
    }
}
