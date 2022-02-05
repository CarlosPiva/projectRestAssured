$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/restricoes.feature");
formatter.feature({
  "name": "Consultar uma restrição utilizando um CPF",
  "description": "    Como usuário da API de consulta de restrições\n    Carlos deseja consultar um CPF\n    Para saber se há uma restrição no CPF",
  "keyword": "Funcionalidade"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de consulta de restrições",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Consultar uma restrição utilizando CPF",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "Carlos consultar uma restrição utilizando o CPF",
  "keyword": "Quando "
});
formatter.match({
  "location": "RestricoesSteps.carlosConsultarUmaRestriçãoUtilizandoOCPF()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "será retornado uma mensagem informando que o CPF possui restrição",
  "keyword": "Então "
});
formatter.match({
  "location": "RestricoesSteps.seráRetornadoUmaMensagemInformandoQueOCPFPossuiRestrição()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cO CPF 97093236014 [possui restrição]\u003e but was:\u003cO CPF 97093236014 [tem problema]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat actions.RestricoesAction.validarRestricao(RestricoesAction.java:40)\n\tat steps.RestricoesSteps.seráRetornadoUmaMensagemInformandoQueOCPFPossuiRestrição(RestricoesSteps.java:18)\n\tat ✽.será retornado uma mensagem informando que o CPF possui restrição(file:src/test/resources/features/restricoes.feature:13)\n",
  "status": "failed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de consulta de restrições",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Consultar um CPF sem restrição",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "Carlos consultar um CPF sem restrição",
  "keyword": "Quando "
});
formatter.match({
  "location": "RestricoesSteps.carlosConsultarUmCPFSemRestrição()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "será retornado um código significando que não há restrição para o CPF pesquisado",
  "keyword": "Então "
});
formatter.match({
  "location": "RestricoesSteps.seráRetornadoUmCódigoSignificandoQueNãoHáRestriçãoParaOCPFPesquisado()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/simulacoes.feature");
formatter.feature({
  "name": "Simulações",
  "description": "    Como usuário da API de simulações\n    Carlos deseja consultar, criar, alterar e deletar simulações\n    Para que ele possa ter informações do credito",
  "keyword": "Funcionalidade"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Criar uma simulação",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele criar uma simulação informando corretamente todos os dados",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleCriarUmaSimulaçãoInformandoCorretamenteTodosOsDados()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados a simulação será criada com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosASimulaçãoSeráCriadaComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar CPF existente",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele criar uma simulação informando um CPF já informando em outra simulação",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleCriarUmaSimulaçãoInformandoUmCPFJáInformandoEmOutraSimulação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados será exibido uma mensagem informando que o CPF já foi utilizado em outra simulação",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOCPFJáFoiUtilizadoEmOutraSimulação()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificar E-mail inválido",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele criar uma simulação informando um e-mail inválido",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleCriarUmaSimulaçãoInformandoUmEMailInválido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados será exibido uma mensagem informando que o e-mail não é válido",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOEMailNãoÉVálido()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar o valor mínimo da simulação",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele criar uma simulação informando um valor menor que ao permitido",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleCriarUmaSimulaçãoInformandoUmValorMenorQueAoPermitido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados será exibido uma mensagem informado que o valor é inferior ao permitido",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformadoQueOValorÉInferiorAoPermitido()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cValor deve ser maior ou igual a R$ 1.000\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat actions.SimulacoesAction.validarValorMinimo(SimulacoesAction.java:97)\n\tat steps.SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformadoQueOValorÉInferiorAoPermitido(SimulacoesSteps.java:49)\n\tat ✽.após validação dos dados será exibido uma mensagem informado que o valor é inferior ao permitido(file:src/test/resources/features/simulacoes.feature:28)\n",
  "status": "failed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar o valor máximo da simulação",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele criar uma simulação informando um valor maior que o permitido",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleCriarUmaSimulaçãoInformandoUmValorMaiorQueOPermitido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados será exibido uma mensagem informando que o valor é superior ao permitido",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOValorÉSuperiorAoPermitido()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar o número mínimo de parcelas",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele criar uma simulação informando o número de parcelas inferior ao permitido",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleCriarUmaSimulaçãoInformandoONúmeroDeParcelasInferiorAoPermitido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados será exibido uma mensagem informando que a quantidade de parcelas é inferior a permitida",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueAQuantidadeDeParcelasÉInferiorAPermitida()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar o número máximo de parcelas",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele criar uma simulação informando o número de parcelas superior ao permitido",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleCriarUmaSimulaçãoInformandoONúmeroDeParcelasSuperiorAoPermitido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados será exibido uma mensagem informando que a quantidade de parcelas é superior a permitida",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueAQuantidadeDeParcelasÉSuperiorAPermitida()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cParcelas deve ser igual ou menor que 48\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat actions.SimulacoesAction.validarQuantidadeMaximaDeParcelas(SimulacoesAction.java:128)\n\tat steps.SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueAQuantidadeDeParcelasÉSuperiorAPermitida(SimulacoesSteps.java:79)\n\tat ✽.após validação dos dados será exibido uma mensagem informando que a quantidade de parcelas é superior a permitida(file:src/test/resources/features/simulacoes.feature:43)\n",
  "status": "failed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar simulação sem seguro",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele criar uma simulação informando que não deseja ter o seguro",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleCriarUmaSimulaçãoInformandoQueNãoDesejaTerOSeguro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados a simulação será criada sem o seguro",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosASimulaçãoSeráCriadaSemOSeguro()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Alterar os dados de uma simulação",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele alterar os dados de uma simulação",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleAlterarOsDadosDeUmaSimulacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após a validação dos dados da simulação será alterados",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósAValidaçãoOsDadosDaSimulaçãoSeráAlterados()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Alterar os dados de uma simulação não cadastrada",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele tentar alterar os dados de uma simulação não cadastrada",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleTentarAlterarOsDadosDeUmaSimulaçãoNãoCadastrada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados será exibido uma mensagem informando que a simulação não foi encontrada",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueASimulaçãoNãoFoiEncontrada()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCPF []não encontrado\u003e but was:\u003cCPF [0000000000 ]não encontrado\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat actions.SimulacoesAction.validarMensagemErro(SimulacoesAction.java:162)\n\tat steps.SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueASimulaçãoNãoFoiEncontrada(SimulacoesSteps.java:109)\n\tat ✽.após validação dos dados será exibido uma mensagem informando que a simulação não foi encontrada(file:src/test/resources/features/simulacoes.feature:58)\n",
  "status": "failed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar a alteração de CPF já existente",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele alterar o CPF da simulação informando um CPF já existente",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleAlterarOCPFDaSimulaçãoInformandoUmCPFJáExistente()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c409\u003e but was \u003c200\u003e.\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\n\tat jdk.internal.reflect.GeneratedMethodAccessor104.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\n\tat io.restassured.specification.ResponseSpecification$statusCode$4.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\n\tat utils.Utils.put(Utils.java:91)\n\tat actions.SimulacoesAction.alterarDadosSimulação(SimulacoesAction.java:150)\n\tat steps.SimulacoesSteps.eleAlterarOCPFDaSimulaçãoInformandoUmCPFJáExistente(SimulacoesSteps.java:114)\n\tat ✽.ele alterar o CPF da simulação informando um CPF já existente(file:src/test/resources/features/simulacoes.feature:62)\n",
  "status": "failed"
});
formatter.step({
  "name": "após validação dos dados será exibido uma mensagem informando que o CPF já foi utilizado em outra simulação",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOCPFJáFoiUtilizadoEmOutraSimulação()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Consultar todas as simulações",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele consultar todas as simulações cadastradas",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleConsultarTodasAsSimulaçõesCadastradas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validar se existem simulações cadastradas uma lista com as simulações será apresentada",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidarSeExistemSimulaçõesCadastradasUmaListaComAsSimulaçõesSeráApresentada()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Consultar uma simulações cadastrada utilizando o CPF",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele consultar uma simulação especifica informando o CPF",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleConsultarUmaSimulaçãoEspecificaInformandoOCPF()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação os dados da simulação serão apresentados",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoOsDadosDaSimulaçãoSerãoApresentados()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Consultar uma simulação não existente utilizando o CPF",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele consultar uma simulação não existente informando o CPF",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleConsultarUmaSimulaçãoNãoExistenteInformandoOCPF()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após validação dos dados será exibido uma mensagem informando que o CPF não possui simulação",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOCPFNãoPossuiSimulação()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCPF []não encontrado\u003e but was:\u003cCPF [12536952211 ]não encontrado\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat actions.SimulacoesAction.validarMensagemErro(SimulacoesAction.java:162)\n\tat steps.SimulacoesSteps.apósValidaçãoDosDadosSeráExibidoUmaMensagemInformandoQueOCPFNãoPossuiSimulação(SimulacoesSteps.java:145)\n\tat ✽.após validação dos dados será exibido uma mensagem informando que o CPF não possui simulação(file:src/test/resources/features/simulacoes.feature:78)\n",
  "status": "failed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Excluir uma simulação cadastrada",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele excluir a simulação consultada",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleExcluirASimulaçãoConsultada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "após a exclusão da simulação será exibido uma mensagem informando que a exclusão foi realizada",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.apósAExclusãoDaSimulaçãoSeráExibidoUmaMensagemInformandoQueAExclusãoFoiRealizada()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Dado que Carlos tem acesso a API de simulações",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Excluir uma simulação não cadastrada",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@oi1"
    }
  ]
});
formatter.step({
  "name": "ele tentar excluir uma simulação não cadastrada",
  "keyword": "Quando "
});
formatter.match({
  "location": "SimulacoesSteps.eleTentarExcluirUmaSimulaçãoNãoCadastrada()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c404\u003e but was \u003c200\u003e.\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\n\tat jdk.internal.reflect.GeneratedMethodAccessor104.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\n\tat io.restassured.specification.ResponseSpecification$statusCode$4.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\n\tat jdk.internal.reflect.GeneratedMethodAccessor187.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\n\tat utils.Utils.delete(Utils.java:104)\n\tat actions.SimulacoesAction.excluirSimulacaoNaoEncontrada(SimulacoesAction.java:221)\n\tat steps.SimulacoesSteps.eleTentarExcluirUmaSimulaçãoNãoCadastrada(SimulacoesSteps.java:160)\n\tat ✽.ele tentar excluir uma simulação não cadastrada(file:src/test/resources/features/simulacoes.feature:87)\n",
  "status": "failed"
});
formatter.step({
  "name": "será exibido uma mensagem informando que a simulação não foi encontrada",
  "keyword": "Então "
});
formatter.match({
  "location": "SimulacoesSteps.seráExibidoUmaMensagemInformandoQueASimulaçãoNãoFoiEncontrada()"
});
formatter.result({
  "status": "skipped"
});
});