package steps;

import actions.RestricoesAction;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;

public class RestricoesSteps {

    RestricoesAction restricoesAction = new RestricoesAction();

    @Quando("Carlos consultar uma restrição utilizando o CPF")
    public void carlosConsultarUmaRestriçãoUtilizandoOCPF() {
        restricoesAction.consultarCpfComRestricoes("97093236014");
    }

    @Então("será retornado uma mensagem informando que o CPF possui restrição")
    public void seráRetornadoUmaMensagemInformandoQueOCPFPossuiRestrição() {
        restricoesAction.validarRestricao("97093236014");
    }

    @Quando("Carlos consultar um CPF sem restrição")
    public void carlosConsultarUmCPFSemRestrição() {
        restricoesAction.consultarCpfSemRestricoes("33742186876");
    }

    @Então("será retornado um código significando que não há restrição para o CPF pesquisado")
    public void seráRetornadoUmCódigoSignificandoQueNãoHáRestriçãoParaOCPFPesquisado() {
        restricoesAction.validaCpfSemRestricao();
    }
}
