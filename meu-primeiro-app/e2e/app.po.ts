import { browser, by, element } from 'protractor';

export class AppPage {

  constructor(){
  }

  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  clicaElementoId(id){
    browser.sleep(1000);
    var x = element(by.id(id)).click();
    return x;
  }

  elementoClasse(classe){
    browser.sleep(2000);
    return element(by.className(classe));
  }

  elementoXpath(path){
    return element(by.xpath(path));
  }

  elementOption(texto){
    return element(by.cssContainingText('option', texto)).click();
  }

  getElemento(id){
    return element(by.id(id));
  }

  getx(id){

    var hiddenElement = element(by.id(id));
    return hiddenElement;
  }

  getLista(classes){
    return element.all(by.className(classes));
  }

  aguardaT(tempo){
    browser.sleep(tempo);
  }

  selecionaPeloTexto(txt){
    return element(by.options(txt)).click();
  }

  aguarda(){
    browser.sleep(10000);
  }
}
