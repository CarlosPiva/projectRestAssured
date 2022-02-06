package utils;

import models.SimulacaoModel;
import io.restassured.response.Response;
import org.yaml.snakeyaml.Yaml;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import static io.restassured.RestAssured.given;

public class Utils {

    public static String lerArquivoYaml(String nomeArquivo, String caminhoDoArquivo) {

        Yaml yaml = new Yaml();
        Map<String, Object> configYaml = null;
        String arquivo = nomeArquivo;

        try {
            configYaml = yaml.load(new FileInputStream(new File(
                    "src/test/resources/massaDeDados/" + arquivo + ".yaml")));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        List<String> configPath = Arrays.asList(caminhoDoArquivo.split("\\."));
        Object config = configYaml.get(configPath.get(0));

        for (int i = 1; i < configPath.size(); i++) {
            config = ((Map<String, Object>) config).get(configPath.get(i));
        }
        if (Objects.isNull(config)) config = "";
        return String.valueOf(config);
    }

    public Response get(String enpoint){

        return given()
                .when()
                    .get(enpoint)
                .then()
                    .extract()
                        .response();
    }

    public Response getComParametro(String endpoint, String parametro, Integer statusCode){

        return given()
                    .pathParam("cpf", parametro)
                .when()
                    .get(endpoint)
                .then()
                    .statusCode(statusCode)
                    .extract()
                        .response();
    }

    public Response post(SimulacaoModel body, String endpoint, Integer statusCode){

        return given()
                    .body(body)
                .when()
                    .post(endpoint)
                .then()
                    .statusCode(statusCode)
                    .extract()
                        .response();
    }

    public Response put(SimulacaoModel body, String pathParametro, String endpoint, Integer statusCode){

        return given()
                    .body(body)
                    .pathParam("cpf", pathParametro)
                .when()
                    .put(endpoint)
                .then()
                    .statusCode(statusCode)
                    .extract()
                        .response();
    }
    public Response delete(Integer pathParametro, String endpoint, Integer statusCode){

        return given()
                    .pathParam("cpf", pathParametro)
                .when()
                    .delete(endpoint)
                .then()
                    .statusCode(statusCode)
                    .extract()
                        .response();
    }
}