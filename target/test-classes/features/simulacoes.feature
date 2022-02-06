#language: pt

  Funcionalidade: Simulações
    Como usuário da API de simulações
    Carlos deseja consultar, criar, alterar e deletar simulações
    Para que ele possa ter informações do credito

    Contexto:
      Dado que Carlos tem acesso as funcionalidades referente a simulações

    @criar @todos
    Cenário: Criar uma simulação
      Quando ele criar uma simulação informando corretamente todos os dados
      Então após validação dos dados a simulação será criada com sucesso

    @validaCPF @todos
    Cenário: Validar CPF existente
      Quando ele criar uma simulação informando um CPF já informando em outra simulação
      Então após validação dos dados será exibido uma mensagem informando que o CPF já foi utilizado em outra simulação

    @validaEmail @todos
    Cenário: Verificar E-mail inválido
      Quando ele criar uma simulação informando um e-mail inválido
      Então após validação dos dados será exibido uma mensagem informando que o e-mail não é válido

    @validaValorMinimo @todos
    Cenário: Validar o valor mínimo da simulação
      Quando ele criar uma simulação informando um valor menor que ao permitido
      Então após validação dos dados será exibido uma mensagem informado que o valor é inferior ao permitido

     @validaValorMaximo @todos
    Cenário: Validar o valor máximo da simulação
      Quando ele criar uma simulação informando um valor maior que o permitido
      Então após validação dos dados será exibido uma mensagem informando que o valor é superior ao permitido

     @validaParcelaMinima @todos
    Cenário: Validar o número mínimo de parcelas
      Quando ele criar uma simulação informando o número de parcelas inferior ao permitido
      Então após validação dos dados será exibido uma mensagem informando que a quantidade de parcelas é inferior a permitida

     @validaParcelaMaxima @todos
    Cenário: Validar o número máximo de parcelas
      Quando ele criar uma simulação informando o número de parcelas superior ao permitido
      Então após validação dos dados será exibido uma mensagem informando que a quantidade de parcelas é superior a permitida

     @validaSimulacaoSemSeguro @todos
    Cenário: Validar simulação sem seguro
      Quando ele criar uma simulação informando que não deseja ter o seguro
      Então após validação dos dados a simulação será criada sem o seguro

      @alterarSimulacao @todos
    Cenário: Alterar os dados de uma simulação
      Quando ele alterar os dados de uma simulação
      Então após a validação dos dados da simulação será alterados

     @alterarSimulacaoNaoCad @todos
    Cenário: Alterar os dados de uma simulação não cadastrada
      Quando  ele tentar alterar os dados de uma simulação não cadastrada
      Então após validação dos dados será exibido uma mensagem informando que a simulação não foi encontrada

     @alterarCpfexistente @todos
    Cenário: Validar a alteração de CPF já existente
      Quando ele alterar o CPF da simulação informando um CPF já existente
      Então após validação dos dados será exibido uma mensagem informando que o CPF já foi utilizado em outra simulação

    @consultaSimulacao @todos
    Cenário: Consultar todas as simulações
      Quando ele consultar todas as simulações cadastradas
      Então após validar se existem simulações cadastradas uma lista com as simulações será apresentada

      @consultaSimulacaoCPF @todos
    Cenário: Consultar uma simulações cadastrada utilizando o CPF
      Quando ele consultar uma simulação especifica informando o CPF
      Então após validação os dados da simulação serão apresentados

    @consultaSimulacaoCpfNaoCad  @todos
    Cenário: Consultar uma simulação não existente utilizando o CPF
      Quando ele consultar uma simulação não existente informando o CPF
      Então após validação dos dados será exibido uma mensagem informando que o CPF não possui simulação

    @deletarSimulacao @todos
    Cenário: Excluir uma simulação cadastrada
      Quando ele excluir a simulação consultada
      Então após a exclusão da simulação será exibido uma mensagem informando que a exclusão foi realizada

      @deletarSimulacaoNaoCad @todos
    Cenário: Excluir uma simulação não cadastrada
      Quando ele tentar excluir uma simulação não cadastrada
      Então será exibido uma mensagem informando que a simulação não foi encontrada