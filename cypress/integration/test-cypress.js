const dateUtil = require('../../src/lib_todolist')

it('visits base url', () => {

    cy.visit('http://localhost:3000/accueil.html')

    // aller dans la todo list et en sortir
    cy.get('#btCheck').click()
    cy.get('#RACheck').click()

    // aller dans la liste MAJ
    cy.get('#btUpdate').click()
    //      créer new task pour dans 10 jours
    cy.get('#task').type('Task 1 Cypress')
    cy.get('#desc').type('Description 1 Cypress')
    cy.get('#Ndate').type(dateUtil.initDate(10))
    cy.get('#subNewTask').click()
    cy.get('#RACheck').click()
    // en sortir

    // retourner dans la todo list
    cy.get('#btCheck').click()


})