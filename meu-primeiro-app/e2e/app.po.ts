import { browser, by, element } from 'protractor';

export class AppPage {

  constructor(){
    //browser.waitForAngularEnabled(false);
  }

  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('http://venus.maringa.pr.gov.br:9900/receitasnaotributarias');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  clicaElementoId(id){
    browser.sleep(1000);
    var x = element(by.id(id)).click();
    return x;
    // return element(by.linkText(val)).click();
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
    // expect(hiddenElement.isDisplayed()).toBeTruthy();
    // expect(hiddenElement.isPresent()).toBeTruthy();
    // expect(hiddenElement.isEnabled()).toBeTruthy();
    // hiddenElement.click();
    // console.log('xxxxxxxxxxxx', browser.executeScript('arguments[0].click()',hiddenElement.isDisplayed()));  
    // element.all(by.className("ui-selectonemenu-items ui-selectonemenu-list")).last().click();
    // expect(whatever).toMatch(whatever);
    //       browser.executeScript("arguments[0].click()", hiddenElement).then(function(val) {
    // });
    // let elem = element(by.xpath("//*[@class='goog-menu goog-menu-vertical uploadmenu density-tiny']/input"));
    // let js = "arguments[0].style.height='auto'; arguments[0].style.visibility='visible';";
    
    // ((JavascriptExecutor) yourWebDriverInstance).executeScript(js, elem);
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
