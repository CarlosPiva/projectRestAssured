#language: pt

  Funcionalidade: Consultar uma restrição utilizando um CPF
    Como usuário da API de consulta de restrições
    Carlos deseja consultar um CPF
    Para saber se há uma restrição no CPF

    Contexto: Dado que Carlos tem acesso a API de consulta de restrições

    @oi1
    Cenário: Consultar uma restrição utilizando CPF
      Quando Carlos consultar uma restrição utilizando o CPF
      Então será retornado uma mensagem informando que o CPF possui restrição

    @oi1
    Cenário: Consultar um CPF sem restrição
      Quando Carlos consultar um CPF sem restrição
      Então será retornado um código significando que não há restrição para o CPF pesquisado