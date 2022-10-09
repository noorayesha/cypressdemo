describe('Cura Make appointment', function(){

it('visit the url',function(){
    cy.visit("https://katalon-demo-cura.herokuapp.com/")
    //cy.visit(Cypress.env('BaseUrl'))
});




it('Click on make appointment',function(){
  //id="btn-make-appointment" click on this button
  cy.get('#btn-make-appointment').click()


});



it('Login to cura app',function(){
            // id="txt-username" enter username 
            cy.get('#txt-username').type('John Doe')

            // id="txt-password" enter password
            cy.get('#txt-password').type('ThisIsNotAPassword')
    
            //id="btn-login" click login button
            cy.get('#btn-login').click()


});



it('Make appointment',function(){
// value="Hongkong CURA Healthcare Center" select
cy.get('select').select('Hongkong CURA Healthcare Center').should('have.value', 'Hongkong CURA Healthcare Center')

//id="chk_hospotal_readmission" check box click
cy.get('#chk_hospotal_readmission').click()

// id="radio_program_medicaid" checkbox click
cy.get('#radio_program_medicaid').click()

// id="txt_visit_date" input datepicker select
cy.get('#txt_visit_date').type('02/10/2022')

//id="txt_comment" input enter comment 
cy.get('#txt_comment').click({force : true})
cy.get('#txt_comment').type('text')

// id="btn-book-appointment" click button
cy.get('#btn-book-appointment').click()

});

it('verify appointment',function(){

    //Appointment Confirmation h2
    cy.get('h2').contains('Appointment Confirmation')

    //id="comment" : text
    cy.get('#comment').contains('text')



})









});