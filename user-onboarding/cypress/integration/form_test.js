describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // Helpers
    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('[type="checkbox"]');
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
        it('can type in name inputs', () => {
            firstNameInput()
                .should('have.value', '')
                .type('Savannah')
                .should('have.value', 'Savannah');
            lastNameInput()
                .should('have.value', '')
                .type('Maxwell')
                .should('have.value', 'Maxwell');
        })
        //get email and type
        it('can type in email input', () => {
            emailInput()
                .should('have.value', '')
                .type('sav@email.com')
                .should('have.value', 'sav@email.com');
        })
        //get password and type
        it('can type in password input', () => {
            passInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password');
        })
        //check TOS box
        it('can check and uncheck the TOS box', () => {
            termsInput()
                .click()
                .should('be.checked')
                .click()
                .should('not.be.checked');
        })
    })

    describe('Testing register button', () => {
        //button starts disabled
        it('register button starts out disabled', () => {
            registerBtn().should('be.disabled');
        })
        //button enables when all inputs are filled out
        it('the register button enabled when all inputs are filled out', () => {
            firstNameInput().type('Savannah');
            lastNameInput().type('Maxwell');
            emailInput().type('sav@email.com');
            passInput().type('password');
            termsInput().click();
            registerBtn().should('not.be.disabled');
        })
        //can submit a new user
        it('can register a new user', () => {
            firstNameInput().type('Savannah');
            lastNameInput().type('Maxwell');
            emailInput().type('sav@email.com');
            passInput().type('password');
            termsInput().click();
            registerBtn().click();
            cy.contains('Savannah Maxwell').should('exist');
        })
    })

    describe('Testing form validation', () => {
        //if first name is blank display error message
        //if last name is blank display error message
        //if email is invalid display error message
        //if email is blank display error message
        //if password is blank display error message
        //if password is less that 8 chars display error message
        //if TOS is unchecked display error message
    })



})