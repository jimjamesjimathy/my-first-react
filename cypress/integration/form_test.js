describe('JimmyBook App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    // Helpers 
    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const checkBox = () => cy.get('input[name=tos]');
    const formSubmitBtn = () => cy.get('input[name=form-submit]');


    describe('filling out the inputs and submitting the form', () => {
        it('Can enter text into the proper field', () => {
            firstNameInput()
                .should('have.value', '')
                .type('James')
                .should('have.value', 'James')

            lastNameInput()
                .should('have.value', '')
                .type('Kirkwood')
                .should('have.value', 'Kirkwood')

            emailInput()
                .should('have.value', '')
                .type('hotmale@hotmail.com')
                .should('have.value', 'hotmale@hotmail.com')

            passwordInput()
                .should('have.value', '')
                .type('SquanGuzzz')
                .should('have.value', 'SquanGuzzz')

            checkBox()
                .should('not.be.checked')
                .click()
                .should('be.checked')

            formSubmitBtn().click();
                cy.contains('James').should('exist')
                cy.contains('Kirkwood').should('exist')
        })
    })
    // describe('Can a user submit a form', () => {
    //     it('can submit the form', () => {
    //         formSubmitBtn().click();
    //         cy.contains('James').should('exist')
    //         cy.contains('Kirkwood').should('exist')
    //     })
    // })

    // Last test for validation will cause earlier tests to fail due to the refresh 
    describe('validate forms', () => {
        it('shouldn\'t be empty', () => {
            firstNameInput()
                .should('have.value', '')
                .type('')
                .should('have.value', '')
        })
    })
})