package models;

import static utils.Utils.lerArquivoYaml;

public class SimulacaoModel {

    public String nome = lerArquivoYaml("simulacao", "nome");
    public String cpf = lerArquivoYaml("simulacao", "cpf");
    public String email = lerArquivoYaml("simulacao", "email");
    public Integer valor =  Integer.parseInt(lerArquivoYaml("simulacao", "valor"));
    public Integer parcelas = Integer.parseInt(lerArquivoYaml("simulacao", "parcelas"));
    public Boolean seguro =  Boolean.valueOf(lerArquivoYaml("simulacao", "seguro"));

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
}