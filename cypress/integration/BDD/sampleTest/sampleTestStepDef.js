/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"; // have to import these, so that cypress can recognise cucumber keywords

Given("the user visits Inshur Test Website", function(){ // we can make an anonymus function as well here, use "()=>" instead of function() 
    cy.visit("http://localhost:3000").contains("Cypress Test")
})

When("the click the last user",()=>{
    cy.get("[data-test='3']").click() // to click on search option
})

Then("assert",()=>{
    cy.contains("Buys Lots of Products in general") // to assert that we succesfully move to the redirected url
})


When("the click on details of {string}",(name)=>{
    //
    cy.click('xpath=//h3[text()=\''+name+'\']//ancestor::*//div//button') // to assert that we succesfully move to the redirected url
})

Then("the details should have {string},{string},{string},{string},{string},{string},{string},{string},{string}",(name,Email,Phone,City,State,Country,Organization,Job_Profile,Additional_Info)=>{
    cy.get('header').should.have(name) // to assert that we succesfully move to the redirected url
    cy.get('header').should.have(Email) // to assert that we succesfully move to the redirected url
})