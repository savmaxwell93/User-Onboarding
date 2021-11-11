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
        it('can type in email input', () => {
            emailInput()
                .should('have.value', '')
                .type('sav@email.com')
                .should('have.value', 'sav@email.com');
        })
        it('can type in password input', () => {
            passInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password');
        })
        it('can check and uncheck the TOS box', () => {
            termsInput()
                .click()
                .should('be.checked')
                .click()
                .should('not.be.checked');
        })
    })

    describe('Testing register button', () => {
        it('register button starts out disabled', () => {
            registerBtn().should('be.disabled');
        })
        it('the register button enabled when all inputs are filled out', () => {
            firstNameInput().type('Savannah');
            lastNameInput().type('Maxwell');
            emailInput().type('sav@email.com');
            passInput().type('password');
            termsInput().click();
            registerBtn().should('not.be.disabled');
        })
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
        it('error message displays if first name is left blank', () => {
            firstNameInput().type('S').clear();
            cy.contains(/enter your first/i).should('exist');
            firstNameInput().type('Savannah');
            cy.contains(/enter your first/i).should('not.exist');
        })
        it('error message displays if last name is left blank', () => {
            lastNameInput().type('M').clear();
            cy.contains(/enter your last/i).should('exist');
            lastNameInput().type('Maxwell');
            cy.contains(/enter your last/i).should('not.exist');
        })
        it('error message displays if not a valid email', () => {
            emailInput().type('s');
            cy.contains(/valid email/i).should('exist');
            emailInput().clear().type('sav@email.com');
            cy.contains(/valid email/i).should('not.exist');
        })
        it('error message displays if email is left blank', () => {
            emailInput().type('s').clear();
            cy.contains(/email is required/i).should('exist');
            emailInput().type('sav@email.com');
            cy.contains(/email is required/i).should('not.exist');
        })
        it('error message displays if password is left blank', () => {
            passInput().type('p').clear();
            cy.contains(/enter a password/i).should('exist');
            passInput().type('password');
            cy.contains(/enter a password/i).should('not.exist');
        })
        it('error message displays if invalid password', () => {
            passInput().type('p');
            cy.contains(/must contain/i).should('exist');
            passInput().clear().type('password');
            cy.contains(/must contain/i).should('not.exist');
        })
        it('error message displays if TOS unchecked', () => {
            termsInput().click().click();
            cy.contains(/agree to tos/i).should('exist');
            termsInput().click();
            cy.contains(/agree to tos/i).should('not.exist');
        })
    })



})