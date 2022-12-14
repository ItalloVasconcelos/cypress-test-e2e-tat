it('successfully logs in', () => {
  //Pega o sistema criado.
  cy.intercept('GET', '**/notes').as('getNotes')
  //Chamando a função criada (já refatorada) em commands
  cy.login(
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD'),
    { cacheSession: false }
  )


  //Executa para ir para a rota de login
  // cy.visit('/login')
  // //Obtém o dado de email e senha, enviando o email e senha cadastrado no .env
  // cy.get('#email').type(Cypress.env("USER_EMAIL"))
  // //Log: false deixa a senha "oculta"
  // cy.get('#password').type(Cypress.env("USER_PASSWORD"), { log: false })
  // //Cria a ação de click no botão de login
  // cy.contains('button', 'Login').click()
  // //Espera até que tudo seja completado
  cy.wait('@getNotes')
  //Finaliza o teste quando mostra na tela o h1 com "Your Notes"
  // cy.contains('h1', 'Your Notes').should('be.visible')

})