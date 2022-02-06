#language: pt

  Funcionalidade: Consultar uma restrição utilizando um CPF
    Como usuário da API de consulta de restrições
    Carlos deseja consultar um CPF
    Para saber se há uma restrição no CPF

    Contexto:
      Dado que Carlos tem acesso as funcionalidades referente a restrição

    @consultaRestricao @todos
    Cenário: Consultar uma restrição utilizando CPF
      Quando Carlos consultar uma restrição utilizando o CPF
      Então será retornado uma mensagem informando que o CPF possui restrição

    @consultaRestricaoCPF @todos
    Cenário: Consultar um CPF sem restrição
      Quando Carlos consultar um CPF sem restrição
      Então será retornado um código significando que não há restrição para o CPF pesquisado