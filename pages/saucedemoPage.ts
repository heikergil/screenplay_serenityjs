import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class sauceDemo {
    static vars = {
            standard_user:"standard_user",
            locked_out_user:"locked_out_user",
            problem_user: "problem_user",
            performance_glitch_user:"performance_glitch_user",
            password: "secret_sauce"
            }

    static header = Target.the('header').located(by.css('#root > div > div.login_logo'));
    static usernameTextBox = Target.the('username text box').located(by.id('user-name'));
    static passwordTextBox = Target.the('password text box').located(by.id('password'));
    static loginButton = Target.the('Login button').located(by.id('login-button'))
    static mainPageTitle = Target.the('main page title').located(by.css('#header_container > div.header_secondary_container > span'));
    

}