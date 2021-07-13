describe('Test AddEditClaim and Delete Task', () => {
    
    it('Test add Task', () => {
        
        cy.visit('/')
        cy.get('.ant-row').eq(1).find('button').click()
        cy.url().should('include', '/switch-test-user')
        cy.get('form').find('button').first().should('have.text', 'Sign in')
        cy.get('form').find('span').eq(1).click()
        cy.get('.ant-select-item-option').contains('Matthew Haddad').click()
        cy.get('.ant-select-item-option').eq(1).should('not.have.text', 'Select').and('not.be.empty')
        const button = cy.get('form').find('button').first()
        button.contains('Sign in').click()
        cy.get('.ant-message-notice-content').should('have.text', 'User was successfully log in')
        cy.get('.ant-tabs-tab-btn').eq(1).click()
        cy.get('.ant-card-body').contains('AuthMachine').click()
        cy.get('li').contains('Tasks').click()
        cy.url().should('eq', 'http://localhost:8080/matt.haddad/authmachine/tasks')
        cy.get('.add-task-btn').contains('Add Task').click()
        cy.get('.ant-modal-content').find('.ant-input').first().type('Test Task Added').should('have.value','Test Task Added')
        cy.get('.ant-modal-content').find('.ant-input').eq(1).type('Test Task Added').should('have.value', 'Test Task Added')
        cy.get('.ant-modal-content').find('.rdw-editor-main').type('here is test data').find('.DraftEditor-editorContainer').should('not.be.empty')
        cy.get('.ant-modal-content').find('.ant-row').eq(5).click()
        cy.get('.ant-select-dropdown').contains('Implement basic post sharing').click().should('have.text', 'Implement basic post sharing')
        cy.get('.ant-modal-content').find('.ant-row').eq(6).click()
        cy.get('.ant-select-dropdown').find('.ant-select-item').contains('Available').click().should('have.text', 'Available')
        cy.get('.ant-modal-content').find('.ant-row').eq(7).click()
        cy.get('.ant-select-dropdown').find('.ant-select-item').contains('High').click().should('have.text', 'High')
        cy.get('.ant-modal-content').find('.ant-row').eq(9).click()
        cy.get('.ant-select-dropdown').find('.ant-select-item').contains('Development').click().should('have.text', 'Development')
        cy.get('.ant-modal-content').find('.ant-row').eq(10).type('www.url.com').find('.ant-input').should('have.value', 'www.url.com')
        cy.get('.ant-modal-content').find('.ant-row').eq(13).click()
        cy.get('.ant-select-dropdown').find('.ant-select-item').contains('Matthew Haddad').click().should('have.text', 'Matthew Haddad')
        cy.get('.ant-modal-footer').find('button').contains('OK').click()
        cy.get('.ant-message-notice-content').should('have.text', 'Task has been created successfully')
        cy.get('.ant-dropdown-trigger').first().click()
        cy.get('.signIn-btn').contains('Sign out').click()
        })

    it('Test edit Task', () => {
        cy.reload()
        cy.visit('/')
        cy.get('.ant-row').eq(1).find('button').click()
        cy.url().should('include', '/switch-test-user')
        cy.get('form').find('button').first().should('have.text', 'Sign in')
        cy.get('form').find('span').eq(1).click()
        cy.get('.ant-select-item-option').contains('Matthew Haddad').click()
        cy.get('.ant-select-item-option').eq(1).should('not.have.text', 'Select').and('not.have.text','')
        const button = cy.get('form').find('button').first()
        button.contains('Sign in').click()
        cy.get('.ant-message-notice-content').should('have.text', 'User was successfully log in')
        cy.get('.ant-tabs-tab-btn').contains('Tasks').click()
        cy.get('.ant-tabs-content-holder').find('.task-box-title').contains('Test Task Added').click()
        cy.get('.ant-avatar').find('span').first().click()
        cy.get('.ant-modal-content').find('.ant-input').first().clear().type('Test Task for cypress').should('have.value','Test Task for cypress')
        cy.get('.ant-modal-content').find('.ant-input').eq(1).clear().type('Test Task Added').should('have.value', 'Test Task Added')
        cy.get('.ant-modal-content').find('.rdw-editor-main').find('.DraftEditor-root').clear().type('here is test data').find('.DraftEditor-editorContainer').should('not.have.text', '')
        cy.get('.ant-modal-content').find('.ant-row').eq(5).click()
        cy.get('.ant-select-dropdown').contains('Implement basic post sharing').click().should('have.text', 'Implement basic post sharing')
        cy.get('.ant-modal-content').find('.ant-row').eq(6).click()
        cy.get('.ant-select-dropdown').find('.ant-select-item').contains('Available').click().should('have.text', 'Available')
        cy.get('.ant-modal-content').find('.ant-row').eq(7).click()
        cy.get('.ant-select-dropdown').find('.ant-select-item').contains('High').click().should('have.text', 'High')
        cy.get('.ant-modal-content').find('.ant-row').eq(9).click()
        cy.get('.ant-select-dropdown').find('.ant-select-item').contains('Java').click().should('not.have.text','Specify skills required')
        cy.get('.ant-modal-content').find('.ant-row').eq(10).clear().type('www.url.com').find('.ant-input').should('have.value', 'www.url.com')
        cy.get('.ant-modal-content').find('.ant-row').eq(13).click()
        cy.get('.ant-select-dropdown').find('.ant-select-item').contains('Matthew Haddad').click().should('have.text', 'Matthew Haddad')
        cy.get('.ant-modal-footer').find('button').contains('OK').click()
        cy.get('.ant-message-notice-content').should('have.text', 'Task has been updated successfully')
        cy.get('.ant-dropdown-trigger').first().click()
        cy.get('.signIn-btn').contains('Sign out').click()
        
        })

    it('Test Claim of Task by user', () => {
            cy.reload()
            cy.visit('/')
            cy.get('.ant-row').eq(1).find('button').click()
            cy.url().should('include', '/switch-test-user')
            cy.get('form').find('button').first().should('have.text', 'Sign in')
            cy.get('form').find('span').eq(1).click()
            cy.get('.ant-select-item-option').contains('John Snow').click()
            cy.get('.ant-select-item-option').eq(1).should('not.have.text', 'Select').and('not.be.empty')
            const button = cy.get('form').find('button').first()
            button.contains('Sign in').click()
            cy.get('.ant-message-notice-content').should('have.text', 'User was successfully log in')
            cy.get('.ant-tabs-tab-btn').contains('Tasks').click()
            cy.get('.ant-tabs-content-holder').find('.task-box-title').contains('Test Task for cypress').click()
            cy.get('.ant-spin-container').find('.ant-btn-primary').contains('Claim the task').click()
            cy.get('.ant-message-notice-content').should('have.text', 'The task was successfully claimed')
            cy.wait(5000)
            cy.get('.ant-spin-container').find('.ant-btn-primary').first().should('have.text','Submit for review').click()
            cy.get('.ant-btn-primary').first().should('have.text', 'Submit for review')
            cy.get('.ant-modal-footer').find('button').eq(1).click()
            cy.get('.ant-message-custom-content').should('have.text', 'The task status was changed to "In review"')
            cy.get('.ant-dropdown-trigger').first().click()
            cy.get('.signIn-btn').contains('Sign out').click()
            
    })
    it('Test Claim of Task approve by admin', () => {

            cy.reload()
            cy.visit('/')
            cy.get('.ant-row').eq(1).find('button').click()
            cy.url().should('include', '/switch-test-user')
            cy.get('form').find('button').first().should('have.text', 'Sign in')
            cy.get('form').find('span').eq(1).click()
            cy.get('.ant-select-item-option').contains('Matthew Haddad').click()
            cy.get('.ant-select-item-option').eq(1).should('not.have.text', 'Select').and('not.be.empty')
            const button = cy.get('form').find('button').first()
            button.contains('Sign in').click()
            cy.get('.ant-message-notice-content').should('have.text', 'User was successfully log in')
            cy.get('.ant-tabs-tab-btn').contains('Tasks').click()
            cy.get(".task-box-title").contains('Test Task for cypress').click()
            cy.wait(5000)
            cy.get('.ant-btn').find('button').first().should('have.text', 'Approve the work')
            cy.get('.flex-column').find('button').first().click()
            cy.get('.ant-btn').eq(7).should('have.text', 'Yes, approve')
            cy.get('.ant-btn').eq(7).click()
            cy.get('.ant-message-success').should('have.text', 'The work has been approved')
            cy.get('.ant-dropdown-trigger').first().click()
            cy.get('.signIn-btn').contains('Sign out').click()
          })

    it('Test Delete Task', () => {

            cy.reload()
            cy.visit('/')
            cy.get('.ant-row').eq(1).find('button').click()
            cy.url().should('include', '/switch-test-user')
            cy.get('form').find('button').first().should('have.text', 'Sign in')
            cy.get('form').find('span').eq(1).click()
            cy.get('.ant-select-item-option').contains('Matthew Haddad').click()
            cy.get('.ant-select-item-option').eq(1).should('not.have.text', 'Select').and('not.be.empty')
            const button = cy.get('form').find('button').first()
            button.contains('Sign in').click()
            cy.get('.ant-message-notice-content').should('have.text', 'User was successfully log in')
            cy.get('.ant-tabs-tab-btn').contains('Tasks').click()
            cy.get('.ant-tabs-content-holder').find('.task-box').find('.task-box-title').contains('Test Task for cypress').click()
            cy.get('.ant-spin-container').find('.ant-btn').first().contains('Delete').click()
            cy.get('.ant-modal-footer').find('.ant-btn-danger').click()
            cy.get('.ant-message-notice-content').should('have.text', 'Item is successfully deleted!')
        })
})