// spec/todo.spec.ts
import 'jasmine';

import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled, engage, Task } from '@serenity-js/core';
import { isVisible, Navigate, Text, Wait, CSSClasses, Clear, Enter, Click } from '@serenity-js/protractor';
import { protractor } from 'protractor';


import { Actors } from  '../src/Actors'
import { sauceDemo } from '../pages/saucedemoPage';



const NavigateToSauceDemoPage = () =>
    Task.where(`#actor launches the app`,
        Navigate.to('https://www.saucedemo.com/'),
        Wait.until(sauceDemo.header, isVisible()),
        Ensure.that(CSSClasses.of(sauceDemo.header), equals(['login_logo'])),
    )

const LoginToSauceDemoPage = () =>
    Task.where(`User log in to saucedemo`,
        Wait.until(sauceDemo.header, isVisible()),
        Ensure.that(CSSClasses.of(sauceDemo.header), equals(['login_logo'])),
        Clear.theValueOf(sauceDemo.usernameTextBox),
        Enter.theValue(sauceDemo.vars.standard_user).into(sauceDemo.usernameTextBox),
        Clear.theValueOf(sauceDemo.passwordTextBox),
        Enter.theValue(sauceDemo.vars.password).into(sauceDemo.passwordTextBox),
        Click.on(sauceDemo.loginButton),
        Wait.until(sauceDemo.mainPageTitle, isVisible()),
        Ensure.that(Text.of(sauceDemo.mainPageTitle), equals('PRODUCTS'))
    )

fdescribe('Sauce Demo page', () => {

    beforeEach(() => {
        protractor.browser.waitForAngularEnabled(false);
        engage(new Actors())
    });

    it('Navigate to saucedemo page', () =>
        actorCalled('Customer').attemptsTo(
            NavigateToSauceDemoPage()
        ));

        it('Login to saucedemo page', () =>
        actorCalled('Customer').attemptsTo(
            NavigateToSauceDemoPage(),
            LoginToSauceDemoPage()
        ));
});