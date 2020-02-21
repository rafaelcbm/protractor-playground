import { HomePage } from './pageObjects/home.po';
import { SignupPage } from './pageObjects/signup.po';


describe('na página de SignUp', () => {

  let homePage: HomePage;
  let signupPage: SignupPage;

  const seqUser = Math.floor(Math.random() * (1000 - 1)) + 1;
  const userName = `joao${seqUser}`;
  const password = 12345678;
  const informacoesDoUsuario = [
    { nome: 'email', valor: 'gustavo@alura.com' },
    { nome: 'fullName', valor: `Joao da Silva${seqUser}` },
    { nome: 'userName', valor: userName },
    { nome: 'password', valor: password }
  ];

  beforeEach(() => {
    homePage = new HomePage();
    signupPage = new SignupPage();
  });

  it('Dever navegar para Signup', () => {
    signupPage.navegarParaSignUp();
  });

  it('Dever cadastrar Usuario', () => {
    informacoesDoUsuario.forEach(usuario => {
      signupPage.registraUsuario(usuario.nome, usuario.valor);
    });
    expect(signupPage.pegarBotaoRegister().click());
  });


  it('Deve verificar url da home', () => {
    expect(homePage.verificarUrl()).toEqual('http://localhost:4200/#/home');
  });

  it('Deve fazer login', () => {
    expect(homePage.passarParametroNoInput('userName', userName));
    expect(homePage.passarParametroNoInput('password', password));
    expect(homePage.pegarBotaoLogin().click());
  });

});
