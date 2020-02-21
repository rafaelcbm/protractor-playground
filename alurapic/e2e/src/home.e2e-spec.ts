import { SigninPage } from './pageObjects/signin.po';
import { SignUpPage } from './pageObjects/signup.po';

describe('Testando tela home', () => {
  let signinPage: SigninPage;
  let signupPage: SignUpPage;

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
    signinPage = new SigninPage();
    signupPage = new SignUpPage();
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


  it('Deve verificar url', () => {
    expect(signinPage.verificarUrl()).toEqual('http://localhost:4200/#/home');
  });

  it('Deve fazer login', () => {
    expect(signinPage.pegarInput('userName', userName));
    expect(signinPage.pegarInput('password', password));
    expect(signinPage.pegarBotaoLogin().click());
  });

});
