describe('Edit Initiative', () => {
    
    it('Test Edit Initiative', () => {
        cy.visit('/')
        cy.get('.ant-row').eq(1).find('button').click()
        cy.url().should('include', '/switch-test-user')
        cy.get('form').find('button').first().should('have.text', 'Sign in')
        cy.get('form').find('span').eq(1).click()
        cy.get('.ant-select-item-option').eq(1).click()
        cy.get('.ant-select-item-option').eq(1).should('not.have.text', 'Select')
        const button = cy.get('form').find('button').first()
        button.contains('Sign in')
        button.click()
        cy.get('.ant-message-notice-content').should('have.text', 'User was successfully log in')
        cy.get('.ant-tabs-tab-btn').eq(1).click()
        cy.get('.ant-card-body').contains('AuthMachine').click()
        cy.get('li').eq(1).click()
        cy.wait(5000)
        cy.get('a').find('.ant-row').contains('Test Initiative').click()
        cy.wait(5000)
        cy.get('.anticon').eq(2).click()
        cy.get('.ant-modal-content').find('.ant-input').eq(0).type('Test Initiative')
        cy.get('.ant-modal-content').find('.ant-input').eq(0).should('not.have.text', ' ')
        cy.get('.DraftEditor-editorContainer').clear().type('Here we are creating demo Inititaive for cypress')
        cy.get('.DraftEditor-editorContainer').should('not.have.text', ' ')
        cy.get('.ant-select-selection-item').contains('Active').type('{enter}')
        cy.get('.ant-input').eq(1).clear().type('testing cypress')
        cy.get('.ant-input').eq(1).should('not.have.text', ' ')
        cy.get('.ant-modal-footer').find('button').contains('Edit').click()
        cy.get('.ant-message-notice-content').should('have.text', 'Initiative is updated successfully!')
    })
})