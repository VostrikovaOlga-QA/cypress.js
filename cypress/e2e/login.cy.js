describe('Автотесты на форму логина', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#pass').type ( 'iLoveqastudio1');
        cy.get('#loginButton').click ();
        cy.get('#messageHeader').should('be.visible'); 
        cy.get('#messageHeader').contains ('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible') 
   })

   it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#forgotEmailButton').should('be.visible');
        cy.get('#forgotEmailButton').click ();
        cy.get('#mailForgot').should ('be.visible');
        cy.get('#mailForgot').type('helga179@mail.ru');
        cy.get('#restoreEmailButton').should('be.visible');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
   })
   it('Верный логин, не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#pass').type ( 'iLoveqastudio5');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible')

   })  

   it('Не верный логин,  верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('helga179@mail.ru');
        cy.get('#pass').type ( 'iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible')    
   })
   
   it(' Логин без @,  верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('germandolnikov.ru');
        cy.get('#pass').type ( 'iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible') 
   })  

   it(' Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('GerMan@Dolnikov.ru');
        cy.get('#pass').type ( 'iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should ('be.visible') 
   })        
})

