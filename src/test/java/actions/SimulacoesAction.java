package actions;

import io.restassured.response.Response;
import models.SimulacaoModel;
import org.apache.http.HttpStatus;
import steps.BaseTest;
import utils.Utils;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.lerArquivoYaml;

public class SimulacoesAction extends BaseTest {

    Utils utils = new Utils();
    SimulacaoModel dadosSimulacao = new SimulacaoModel();

    private final String SIMULACAO = lerArquivoYaml("endpoints","criarSimulacao");
    private final String ALTERAR_SIMULACAO = lerArquivoYaml("endpoints","alterarSimulacao");
    private final String CONSULTAR_SIMULACAO = lerArquivoYaml("endpoints", "consultarSimulacaoComParametro");
    private final String DELETAR_SIMULACAO = lerArquivoYaml("endpoints", "deletarSimulacao");


    Response responseSimulacao = null;
    Integer statusCode = null;
    String cpf= null;

    public void criarSimulacao(){

        dadosSimulacao.setCpf("656956656");
        responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 201);
    }

    public void verificarSimulacaoCadastradaComSucesso(){

        assertEquals(responseSimulacao.path("nome"), lerArquivoYaml("simulacao", "nome"));
        assertEquals(responseSimulacao.path("cpf"), dadosSimulacao.getCpf());
        assertEquals(responseSimulacao.path("email"), lerArquivoYaml("simulacao", "email"));
        assertEquals(responseSimulacao.path("valor").toString(), lerArquivoYaml("simulacao", "valor"));
        assertEquals(responseSimulacao.path("parcelas").toString(), lerArquivoYaml("simulacao", "parcelas"));
        assertEquals(responseSimulacao.path("seguro").toString(), lerArquivoYaml("simulacao", "seguro"));
        utils.delete(responseSimulacao.path("id"), DELETAR_SIMULACAO, 200);
    }

    public void criarSimulacaoComMesmoCPF(){

        dadosSimulacao.setCpf(lerArquivoYaml("simulacao", "cpfExistente"));
        responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);
    }

    public void validarMensagemCpfExistente(){

        assertEquals(lerArquivoYaml("simulacao","msgCpfExistente"), responseSimulacao.path("mensagem"));
    }

    public void criarSimulacaoComEmailInvalido(){

        dadosSimulacao.setEmail(lerArquivoYaml("simulacao", "emailInvalido"));
        responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);
    }

    public void validarEmail(){
        assertEquals(lerArquivoYaml("simulacao", "msgEmailInvalido"), responseSimulacao.path("erros.email"));
    }

    public void criarSimulacaoComValorNaoPermitido(String valor) throws Exception {
        System.out.println(valor);

        if(valor.equals("minimo")){
            dadosSimulacao.setValor(01);
            responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);
        }
        if(valor.equals("maximo")){
                dadosSimulacao.setValor(100000);
                responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);
        }
        if(valor != "minimo" && valor!= "maximo"){
            throw new Exception("Erro - O valor informado é inválido, informar 'mínimo' ou 'máximo'");
        }
    }

    public void validarValorMinimo(){
        assertEquals(lerArquivoYaml("simulacao","msgValorMinimo"), responseSimulacao.path("erros.valor"));
    }

    public void validarValorMaximo(){
        assertEquals(lerArquivoYaml("simulacao","msgValorMaximo"), responseSimulacao.path("erros.valor"));
    }

    public void criarSimulacaoNumerosDeParcelasNaoPermitidas(String parcelas) throws Exception {

        if(parcelas.equals("mínimo")){
            dadosSimulacao.setParcelas(1);
            responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);
        }
        if(parcelas.equals("máximo")){
            dadosSimulacao.setParcelas(60);
            responseSimulacao = utils.post(dadosSimulacao, SIMULACAO, 400);
        }
        if(parcelas != "mínimo" && parcelas!= "máximo"){
            throw new Exception("Erro - O valor informado é inválido, informar 'mínimo' ou 'máximo'");
        }
    }

    public void validarQuantidadeMinimaDeParcelas(){
        assertEquals(lerArquivoYaml("simulacao","msgParcelaMinima"), responseSimulacao.path("erros.parcelas"));
    }

    public void validarQuantidadeMaximaDeParcelas(){
        assertEquals(lerArquivoYaml("simulacao","msgParcelaMaxima"), responseSimulacao.path("erros.parcelas"));
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
        dadosSimulacao.setNome("Pedro - Nome Alterado " + System.nanoTime());
        dadosSimulacao.setCpf(cpf);

        responseSimulacao = utils.put(dadosSimulacao, cpf, ALTERAR_SIMULACAO, statusCode);
    }

    public void validarAlteracao(){
        assertEquals(lerArquivoYaml("simulacao", "cpfExistente"), responseSimulacao.path("cpf"));
        assertEquals(dadosSimulacao.getNome(), responseSimulacao.path("nome"));
    }

    public void validarMensagemErro(String mensagem) throws Exception {

        if(mensagem.equals("CPF não encontrado")){
            assertEquals(lerArquivoYaml("simulacao", "msgCpfNaoEncontrado"), responseSimulacao.path("mensagem"));
        }
        if(mensagem.equals("CPF existente")){
            validarMensagemCpfExistente();
        }
        if(mensagem!= "CPF não encontrado" && mensagem!= "CPF existente"){
            throw new Exception("Erro - O valor informado é inválido, informar 'CPF não encontrado' ou 'CPF existente'");
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
        responseSimulacao = utils.delete(id_criado, DELETAR_SIMULACAO, 200);
    }

    public void validarExclusao(String mensagem) throws Exception {

        if(mensagem.equals("Exclusão com Sucesso")){
            assertEquals("OK", responseSimulacao.body().asString());
        }
        if(mensagem.equals("Simulação não encontrada")){
            assertEquals("Simulação não encontrada", responseSimulacao.body().asString());
        }
        if(mensagem!= "Exclusão com Sucesso" && mensagem!= "Simulação não encontrada"){
            throw new Exception("Erro - Mensagem inválida, informar 'Exclusão com Sucesso' ou 'Simulação não encontrada'");
        }
    }

    public void excluirSimulacaoNaoEncontrada(){
        responseSimulacao = utils.delete(1000000, DELETAR_SIMULACAO, 404);
    }
}