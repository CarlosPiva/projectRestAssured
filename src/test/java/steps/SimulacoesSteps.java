package steps;

import actions.SimulacoesAction;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import utils.Utils;

public class SimulacoesSteps {

    SimulacoesAction simulacoesAction = new SimulacoesAction();
    @Quando("ele criar uma simulação informando corretamente todos os dados")
    public void eleCriarUmaSimulaçãoInformandoCorretamenteTodosOsDados() {
        simulacoesAction.criarSimulacao();
    }

    @Então("após validação dos dados a simulação será criada com sucesso")
    public void apósValidaçãoDosDadosASimulaçãoSeráCriadaComSucesso() {
        simulacoesAction.verificarSimulacaoCadastradaComSucesso();
    }

    @Quando("ele criar uma simulação informando um CPF já informando em outra simulação")
    public void eleCriarUmaSimulaçãoInformandoUmCPFJáInformandoEmOutraSimulação() {
        simulacoesAction.criarSimulacaoComMesmoCPF();
    }

    @Então("após validação dos dados será exibido uma mensagem informando que o CPF já foi utilizado em outra simulação")
    public void apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOCPFJáFoiUtilizadoEmOutraSimulação() {
        simulacoesAction.validarMensagemCpfExistente();
    }

    @Quando("ele criar uma simulação informando um e-mail inválido")
    public void eleCriarUmaSimulaçãoInformandoUmEMailInválido() {
        simulacoesAction.criarSimulacaoComEmailInvalido();
    }

    @Então("após validação dos dados será exibido uma mensagem informando que o e-mail não é válido")
    public void apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOEMailNãoÉVálido() {
        simulacoesAction.validarEmail();
    }

    @Quando("ele criar uma simulação informando um valor menor que ao permitido")
    public void eleCriarUmaSimulaçãoInformandoUmValorMenorQueAoPermitido() {
        simulacoesAction.criarSimulacaoComValorNaoPermitido("mínimo");
    }

    @Então("após validação dos dados será exibido uma mensagem informado que o valor é inferior ao permitido")
    public void apósValidaçãoDosDadosSeráExibidoUmaMensagemInformadoQueOValorÉInferiorAoPermitido() {
        simulacoesAction.validarValorMinimo();
    }

    @Quando("ele criar uma simulação informando um valor maior que o permitido")
    public void eleCriarUmaSimulaçãoInformandoUmValorMaiorQueOPermitido() {
        simulacoesAction.criarSimulacaoComValorNaoPermitido("máximo");
    }

    @Então("após validação dos dados será exibido uma mensagem informando que o valor é superior ao permitido")
    public void apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOValorÉSuperiorAoPermitido() {
        simulacoesAction.validarValorMaximo();
    }

    @Quando("ele criar uma simulação informando o número de parcelas inferior ao permitido")
    public void eleCriarUmaSimulaçãoInformandoONúmeroDeParcelasInferiorAoPermitido() {
        simulacoesAction.criarSimulacaoNumerosDeParcelasNaoPermitidas("mínimo");
    }

    @Então("após validação dos dados será exibido uma mensagem informando que a quantidade de parcelas é inferior a permitida")
    public void apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueAQuantidadeDeParcelasÉInferiorAPermitida() {
        simulacoesAction.validarQuantidadeMinimaDeParcelas();
    }

    @Quando("ele criar uma simulação informando o número de parcelas superior ao permitido")
    public void eleCriarUmaSimulaçãoInformandoONúmeroDeParcelasSuperiorAoPermitido() {
        simulacoesAction.criarSimulacaoNumerosDeParcelasNaoPermitidas("máximo");
    }

    @Então("após validação dos dados será exibido uma mensagem informando que a quantidade de parcelas é superior a permitida")
    public void apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueAQuantidadeDeParcelasÉSuperiorAPermitida() {
        simulacoesAction.validarQuantidadeMaximaDeParcelas();
    }

    @Quando("ele criar uma simulação informando que não deseja ter o seguro")
    public void eleCriarUmaSimulaçãoInformandoQueNãoDesejaTerOSeguro() {
        simulacoesAction.criarSimulaçãoSemSeguro();
    }

    @Então("após validação dos dados a simulação será criada sem o seguro")
    public void apósValidaçãoDosDadosASimulaçãoSeráCriadaSemOSeguro() {
        simulacoesAction.validarSimulacaoSemSeguro();
    }

    @Quando("ele alterar os dados de uma simulação")
    public void eleAlterarOsDadosDeUmaSimulacao() {
        simulacoesAction.alterarDadosSimulação("97093236014", 200);
    }

    @Então("após a validação dos dados da simulação será alterados")
    public void apósAValidaçãoOsDadosDaSimulaçãoSeráAlterados() {
        simulacoesAction.validarAlteracao();
    }

    @Quando("ele tentar alterar os dados de uma simulação não cadastrada")
    public void eleTentarAlterarOsDadosDeUmaSimulaçãoNãoCadastrada() {
        simulacoesAction.alterarDadosSimulação("0000000000", 404);
    }

    @Então("após validação dos dados será exibido uma mensagem informando que a simulação não foi encontrada")
    public void apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueASimulaçãoNãoFoiEncontrada() {
        simulacoesAction.validarMensagemErro("CPF não encontrado");
    }

    @Quando("ele alterar o CPF da simulação informando um CPF já existente")
    public void eleAlterarOCPFDaSimulaçãoInformandoUmCPFJáExistente() {
        simulacoesAction.alterarDadosSimulação("97093236014", 409);
    }

    @Quando("ele consultar todas as simulações cadastradas")
    public void eleConsultarTodasAsSimulaçõesCadastradas() {
        simulacoesAction.consultarTodasSimulacoes();
    }

    @Então("após validar se existem simulações cadastradas uma lista com as simulações será apresentada")
    public void apósValidarSeExistemSimulaçõesCadastradasUmaListaComAsSimulaçõesSeráApresentada() {
        simulacoesAction.validarListaConsultaSimulacao();
    }


    @Quando("ele consultar uma simulação especifica informando o CPF")
    public void eleConsultarUmaSimulaçãoEspecificaInformandoOCPF() {
        simulacoesAction.consultarSimulacaoEspecifica("97093236014", 200);
    }

    @Então("após validação os dados da simulação serão apresentados")
    public void apósValidaçãoOsDadosDaSimulaçãoSerãoApresentados() {
        simulacoesAction.validarSimulacaoConsultada();
    }

    @Quando("ele consultar uma simulação não existente informando o CPF")
    public void eleConsultarUmaSimulaçãoNãoExistenteInformandoOCPF() {
        simulacoesAction.consultarSimulacaoEspecifica("12536952211", 404);
    }

    @Então("após validação dos dados será exibido uma mensagem informando que o CPF não possui simulação")
    public void apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOCPFNãoPossuiSimulação() {
        simulacoesAction.validarMensagemErro("CPF não encontrado");
    }

    @Quando("ele excluir a simulação consultada")
    public void eleExcluirASimulaçãoConsultada() {
        simulacoesAction.excluirSimulacao();
    }

    @Então("após a exclusão da simulação será exibido uma mensagem informando que a exclusão foi realizada")
    public void apósAExclusãoDaSimulaçãoSeráExibidoUmaMensagemInformandoQueAExclusãoFoiRealizada() {
        simulacoesAction.validarExclusao("Exclusão com Sucesso");
    }

    @Quando("ele tentar excluir uma simulação não cadastrada")
    public void eleTentarExcluirUmaSimulaçãoNãoCadastrada() {
        simulacoesAction.excluirSimulacaoNaoEncontrada();
    }

    @Então("será exibido uma mensagem informando que a simulação não foi encontrada")
    public void seráExibidoUmaMensagemInformandoQueASimulaçãoNãoFoiEncontrada() {
        simulacoesAction.validarExclusao("Simulação não encontrada");
    }
}
