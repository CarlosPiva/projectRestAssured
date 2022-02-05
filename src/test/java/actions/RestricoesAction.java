package actions;


import io.restassured.response.Response;
import org.apache.http.HttpStatus;

import steps.BaseTest;
import utils.Utils;

import static io.restassured.RestAssured.*;
import static org.junit.Assert.*;


public class RestricoesAction extends BaseTest {

    Utils utils = new Utils();

    final String CONSULTA = utils.lerArquivoYaml("endpoints","restricao");
    Response mensagemConsulta;
    Integer statusCode;

    public void consultarCpfComRestricoes(String cpf){

         mensagemConsulta = utils.getComParametro(CONSULTA, cpf, 200);
    }

    public void consultarCpfSemRestricoes(String cpf){
          statusCode =
                    given()
                        .pathParam("cpf", cpf)
                    .when()
                        .get(CONSULTA + cpf)
                    .then()
                        .extract()
                            .statusCode();

    }

    public void validarRestricao(String cpf){
        assertEquals("O CPF " + cpf + " possui restrição", mensagemConsulta.path("mensagem"));
    }

    public void validaCpfSemRestricao(){
        assertEquals(HttpStatus.SC_NO_CONTENT, statusCode.intValue());
    }

}
