import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';
import { debug } from 'util';
import { Key } from 'selenium-webdriver';
import { chown } from 'fs';

describe('meu-primeiro-app App', () => {
  let page: AppPage;
  const data1 = '23/01/2018';

  beforeEach(() => {
    page = new AppPage();
  });

  it('reserva quadra horario 1', () =>{
    const cpf = '';
    const nomeSolicitante = '';
    const tel = '';
    const cel = '';
    const emailSol  = '';
    const nomeEspaco = '';
    const horario = 1;
    reservaQuadra(page, nomeEspaco, data1, cpf, tel, cel, emailSol, nomeSolicitante, horario);
  });


  it('reserva quadra horario 2', () => {
    const cpf = '';
    const nomeSolicitante = '';
    const tel = '';
    const cel = '';
    const emailSol  = '';
    const nomeEspaco = '';
    const horario = 2;
    reservaQuadra(page, nomeEspaco, data1, cpf, tel, cel, emailSol, nomeSolicitante, horario);
  });
});

function reservaQuadra(page: AppPage, nomeEspaco: string, dataReq: string, cpf: string, tel: string, cel: string, emailSol: string, nomeSolicitante: string, horario:number) {
  page.navigateTo();
  browser.sleep(1000);
  element.all(by.cssContainingText('.ui-commandlink','Solicitação de Espaços')).first().click();
  page.clicaElementoId('formEspacos:tipoEspaco');
  selectOption('formEspacos:tipoEspaco_panel', page, 'ESPORTIVO', tipoEspaco);

  page.getx('formEspacos:espacos').click();
  selectOption('formEspacos:espacos_panel', page, nomeEspaco, espaco);
  element(by.id('formEspacos:dataSolicitar')).click();

  element(by.id('formEspacos:dataSolicitar_input')).sendKeys(dataReq);
  element(by.id('formEspacos:dataSolicitar_input')).sendKeys(Key.TAB);
  element(by.id('formEspacos:wizard_next')).click();
  browser.sleep(1000);
  selecionaHorario(horario);
  element(by.id('formEspacos:wizard_next')).click();
  browser.sleep(1000);
  const documento = element(by.id('formEspacos:documento'));
  documento.click();
  documento.sendKeys(cpf); //cpf so numeros
  browser.sleep(1000);
  const nome = element(by.id('formEspacos:nome'));
  nome.click();

  browser.sleep(1000);
  const telefone = element(by.id('formEspacos:telefone'));
  telefone.click();
  telefone.sendKeys(tel);
  browser.sleep(1000);
  const celular = element(by.id('formEspacos:celular'));
  celular.click();
  celular.sendKeys(cel);
  browser.sleep(1000);
  const email = element(by.id('formEspacos:email'));
  email.click();
  email.sendKeys(emailSol);
  browser.sleep(1000);
  nome.click();
  nome.sendKeys(nomeSolicitante);
  browser.sleep(1000);
  element.all(by.cssContainingText('.ui-button-text','Concluir')).first().click();
  browser.sleep(2000);
}

function selecionaHorario(horario: number) {
  let elemento = element(by.id('formEspacos:horarios_data')).all(by.tagName('tr')).get(horario).all(by.tagName('span')).first();
  browser.executeScript('arguments[0].click()', elemento);
}

function selectOption(id: string, page: AppPage, tipo: string, fn: any) {
  let el = page.getx(id);
  el.all(by.css(".ui-selectonemenu-list")).last().click().then(function () {
    browser.sleep(1000);
    fn(tipo, page);
  });
}

function tipoEspaco(tipo: string, page: AppPage) {
  let ultimoEl = element.all(by.cssContainingText('.ui-selectonemenu-item', tipo)).last();
  browser.executeScript('arguments[0].click()', ultimoEl);
  browser.sleep(1000);
}

function espaco(nome: string, page: AppPage){
  let espaco = element.all(by.cssContainingText('.ui-selectonemenu-item', nome)).first();
  browser.executeScript('arguments[0].click()',espaco);
  espaco.getText().then(function(text){
  });
  browser.sleep(1000);
}

