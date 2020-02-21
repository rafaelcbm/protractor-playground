import { HomePage } from './pageObjects/home.po';

describe('na páagina de SignIn', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('Deve mostrar a label Login', () => {
    homePage.navegarParaSignIn();
    expect(homePage.pegarParagrafoDoLogin()).toEqual('Login');
  });

  it('Deve fazer login', () => {
    expect(homePage.passarParametroNoInput('userName', 'flavio'));
    expect(homePage.passarParametroNoInput('password', 123));
    expect(homePage.pegarBotaoLogin().click());
  });

  it('Deve verificar url redirecionamento para página do usuário', () => {
    expect(homePage.verificarUrl()).toEqual('http://localhost:4200/#/user/flavio');
  });

});
