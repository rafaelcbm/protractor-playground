import { browser, by, element } from 'protractor';

export class HomePage {

  navegarParaSignIn() {
    return browser.get('/#/home');
  }

  pegarParagrafoDoLogin() {
    return element(by.css('.text-center')).getText();
  }

  passarParametroNoInput(formControlName, valor) {
    return element(by.formControlName(formControlName)).sendKeys(valor);
  }

  verificarUrl() {
    return browser.getCurrentUrl();
  }

  pegarBotaoLogin() {
    return element(by.buttonText('login'));
  }
}
