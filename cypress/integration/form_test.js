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
    const formSubmitBtn = () => cy.get('input[name=form-submit');


    // Mock test 
    it('Here goes nothing', () => {
        expect(3 + 3).to.equal(6);
    })
})