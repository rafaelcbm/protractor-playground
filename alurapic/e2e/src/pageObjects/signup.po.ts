import { browser, by, element } from 'protractor';

export class SignupPage {

  navegarParaSignUp() {
    browser.restart();
    return browser.get('/#/home/signup');
  }

  registraUsuario(formControlName, valor) {
    return element(by.formControlName(formControlName)).sendKeys(valor);
  }

  pegarBotaoRegister() {
    return element(by.buttonText('Register'));
  }

  obterUrl() {
    return browser.getCurrentUrl();
  }
}
