# Desafio técnico Sicredi

Projeto de testes automatizados de uma API REST utilizando Java e Rest Assured.

## ⚙️ Executando os testes

Execute o seguinte comando no terminal:
```sh
mvn clean test
```
Para executar um cenário específico, execute o comando abaixo informando qual a tag que deseja utilizar:
```sh
 mvn test -Dcucumber.options="--tags @NomeDaTag"
```
Toda execução irá criar um diretorio na raiz do projeto chamado "reporter", onde será gerado relatórios dos testes executados

### ⌨️ Estrutura do projeto
O projeto foi estruturado utilizando design pattern Page Objetcs.
As massas de dados estão em arquivos .yaml dentro do diretorio massaDeDados, utilizei a massa de dados dessa forma para facilitar na manutenção do código.

Dentro do diretorio java estão os pacotes:
    - actions
    - models
    - runners
    - steps
    - utils
    
Dentro de resources estão os diretorios
    - features
    - massaDeDados

## 🛠️ Construído com

* [Maven](https://maven.apache.org/)
* [Gherkin](https://cucumber.io/docs/gherkin/)
* [Cucumber](https://cucumber.io/)
* [Rest Assured](https://rest-assured.io/)
* [jUnit4](https://junit.org/junit4/) 
* [Java 8](https://www.java.com/pt-BR/download/help/java8_pt-br.html)


## ✒️ Autor

   Carlos Roberto Piva Junior  [ LinkedIn](www.linkedin.com/in/carlos-piva)

* **Analista de Qualidade - Testes automatizados**