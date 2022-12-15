/// <reference path="../support/commands.d.ts" />
describe('Scenarios where authentication is a pre-requirement', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.login()
  })

  it('CRUDs a note', () => {
    const faker = require('faker')
    const noteDescription = faker.lorem.words(4)

    cy.createNote(noteDescription)
    cy.wait('@getNotes')

    const updatedNoteDescription = faker.lorem.words(4)
    const attachFile = true

    cy.editNote(noteDescription, updatedNoteDescription, attachFile)
    cy.wait('@getNotes')

    cy.deleteNote(updatedNoteDescription)
    cy.wait('@getNotes')
  })


  // Teste do iframe do cartão de crédito
  // it.only('successfully submits the form', () => {
  //     cy.intercept('POST', '**/prod/billing').as('paymentRequest')

  //     cy.fillSettingsFormAndSubmit()

  //     cy.wait('@getNotes')
  //     cy.wait('@paymentRequest').then(response => {
  //         expect(response.state).to.equal('Complete')
  //     })
  // })

  //Teste de logout, e feito no cypress studio
  it.only('logs out', { tags: '@desktop-and-tablet' }, () => {
    cy.visit('/')
    cy.wait('@getNotes')
    if (Cypress.config('viewportWidth') < Cypress.env('viewportWidthBreakpoint')) {
      cy.get('.navbar-toggle.collapsed')
        .should('be.visible')
        .click()
    }

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.nav > :nth-child(2) > a').click()
    cy.get('#email').click()
    cy.get('#email').should('be.visible')
    /* ==== End Cypress Studio ==== */
  })
})




//Crud test

// it('CRUDs a note', () => {
//     const faker = require('faker')
//     const noteDescription = faker.lorem.words(4)
//     // let attachFile = false

//     cy.intercept('GET', '**/notes').as('getNotes')
//     // cy.intercept('GET', '**/notes/**').as('getNote')
//     cy.login()

//     // cy.visit('/notes/new')
//     // cy.get('#content').type(noteDescription)

//     // if (attachFile) {
//     //     cy.get('#file').attachFile('example.json')
//     // }
//     // cy.contains('button', 'Create').click()
//     cy.createNote(noteDescription)
//     cy.wait('@getNotes')
//     // cy.contains('.list-group-item', noteDescription)
//     //     .should('be.visible')
//     //     .click()

//     // cy.wait('@getNote')

//     const updatedNoteDescription = faker.lorem.words(4)
//     const attachFile = true

//     // cy.get('#content')
//     //     .clear()
//     //     .type(updatedNoteDescription)

//     // if (attachFile) {
//     //     cy.get('#file').attachFile('example.json')
//     // }
//     // cy.contains('button', 'Save').click()
//     cy.editNote(noteDescription, updatedNoteDescription, attachFile)
//     cy.wait('@getNotes')

//     // cy.contains('.list-group-item', noteDescription).should('not.exist')
//     // cy.contains('.list-group-item', updatedNoteDescription)
//     //     .should('be.visible')
//     //     .click()
//     // cy.wait('@getNote')
//     // cy.contains('button', 'Delete').click()
//     cy.deleteNote(updatedNoteDescription)
//     cy.wait('@getNotes')

//     // cy.contains('.list-group-item', updatedNoteDescription).should('not.exist')

//})