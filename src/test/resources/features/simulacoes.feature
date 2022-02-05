#language: pt

  Funcionalidade: Simulações
    Como usuário da API de simulações
    Carlos deseja consultar, criar, alterar e deletar simulações
    Para que ele possa ter informações do credito

    Contexto: Dado que Carlos tem acesso a API de simulações

    @oi1
    Cenário: Criar uma simulação
      Quando ele criar uma simulação informando corretamente todos os dados
      Então após validação dos dados a simulação será criada com sucesso

    @oi1
    Cenário: Validar CPF existente
      Quando ele criar uma simulação informando um CPF já informando em outra simulação
      Então após validação dos dados será exibido uma mensagem informando que o CPF já foi utilizado em outra simulação

    @oi1
    Cenário: Verificar E-mail inválido
      Quando ele criar uma simulação informando um e-mail inválido
      Então após validação dos dados será exibido uma mensagem informando que o e-mail não é válido

    @oi1
    Cenário: Validar o valor mínimo da simulação
      Quando ele criar uma simulação informando um valor menor que ao permitido
      Então após validação dos dados será exibido uma mensagem informado que o valor é inferior ao permitido

    @oi1
    Cenário: Validar o valor máximo da simulação
      Quando ele criar uma simulação informando um valor maior que o permitido
      Então após validação dos dados será exibido uma mensagem informando que o valor é superior ao permitido

    @oi1
    Cenário: Validar o número mínimo de parcelas
      Quando ele criar uma simulação informando o número de parcelas inferior ao permitido
      Então após validação dos dados será exibido uma mensagem informando que a quantidade de parcelas é inferior a permitida

    @oi1
    Cenário: Validar o número máximo de parcelas
      Quando ele criar uma simulação informando o número de parcelas superior ao permitido
      Então após validação dos dados será exibido uma mensagem informando que a quantidade de parcelas é superior a permitida

      @oi1
    Cenário: Validar simulação sem seguro
      Quando ele criar uma simulação informando que não deseja ter o seguro
      Então após validação dos dados a simulação será criada sem o seguro

      @oi1
    Cenário: Alterar os dados de uma simulação
      Quando ele alterar os dados de uma simulação
      Então após a validação dos dados da simulação será alterados

     @oi1
    Cenário: Alterar os dados de uma simulação não cadastrada
      Quando  ele tentar alterar os dados de uma simulação não cadastrada
      Então após validação dos dados será exibido uma mensagem informando que a simulação não foi encontrada

       @oi1
    Cenário: Validar a alteração de CPF já existente
      Quando ele alterar o CPF da simulação informando um CPF já existente
      Então após validação dos dados será exibido uma mensagem informando que o CPF já foi utilizado em outra simulação

    @oi1
    Cenário: Consultar todas as simulações
      Quando ele consultar todas as simulações cadastradas
      Então após validar se existem simulações cadastradas uma lista com as simulações será apresentada

      @oi1
    Cenário: Consultar uma simulações cadastrada utilizando o CPF
      Quando ele consultar uma simulação especifica informando o CPF
      Então após validação os dados da simulação serão apresentados

    @oi1
    Cenário: Consultar uma simulação não existente utilizando o CPF
      Quando ele consultar uma simulação não existente informando o CPF
      Então após validação dos dados será exibido uma mensagem informando que o CPF não possui simulação

    @oi1
    Cenário: Excluir uma simulação cadastrada
      Quando ele excluir a simulação consultada
      Então após a exclusão da simulação será exibido uma mensagem informando que a exclusão foi realizada

      @oi1
    Cenário: Excluir uma simulação não cadastrada
      Quando ele tentar excluir uma simulação não cadastrada
      Então será exibido uma mensagem informando que a simulação não foi encontrada