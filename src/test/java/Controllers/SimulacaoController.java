package Controllers;

import io.cucumber.java.sl.In;
import utils.Utils;

import java.util.HashMap;
import java.util.Map;

public class SimulacaoController {

    Utils utils = new Utils();

    public String nome = utils.lerArquivoYaml("simulacao", "nome");
    public String cpf = utils.lerArquivoYaml("simulacao", "cpf");
    public String email = utils.lerArquivoYaml("simulacao", "email");
    public Integer valor =  Integer.parseInt(utils.lerArquivoYaml("simulacao", "valor"));
    public Integer parcelas = Integer.parseInt(utils.lerArquivoYaml("simulacao", "parcelas"));
    public Boolean seguro =  Boolean.valueOf(utils.lerArquivoYaml("simulacao", "seguro"));

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getValor() {
        return valor;
    }

    public void setValor(Integer valor) {
        this.valor = valor;
    }

    public Integer getParcelas() {
        return parcelas;
    }

    public void setParcelas(Integer parcelas) {
        this.parcelas = parcelas;
    }

    public Boolean getSeguro() {
        return seguro;
    }

    public void setSeguro(Boolean seguro) {
        this.seguro = seguro;
    }

    public Map dadosSimulacao(){

        Map<String, String> dadosSimulacao = new HashMap<>();
        dadosSimulacao.put("nome", nome);
        dadosSimulacao.put("cpf", cpf);
        dadosSimulacao.put("email", email);
        dadosSimulacao.put("valor", valor.toString());
        dadosSimulacao.put("parcelas", parcelas.toString());
        dadosSimulacao.put("seguro", seguro.toString());

        return dadosSimulacao;
    }

}
