describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // Helpers
    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('input[name=terms]');
    const registerBtn = () => cy.get('button[id="regBtn"]');

    const foobarInput = () => cy.get('input[name=foobar]');

    //Sanity Test
    it('making sure tests work', () => {
        expect(1 + 1).to.equal(2);
        expect(4 + 4).not.to.equal(6);
        expect({}).not.to.equal({});
    })

    // Tests
    it('proper elements are showing', () => {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passInput().should('exist');
        termsInput().should('exist');
        registerBtn().should('exist');
        
        foobarInput().should('not.exist');

        cy.contains(/become a user/i).should('exist');
        cy.contains(/terms of service/i).should('exist');

    })

    it('can navigate to the site', () => {
        cy.url().should('include', 'localhost');
    })

    describe('Filling out the inputs', () => {
        //get name and type
        //get email and type
        //get password and type
        //check TOS box
    })

    describe('Testing register button', () => {
        //button starts disabled
        //button enables when all inputs are filled out
        //can submit a new user
    })

    



})