global.CSSStyleSheet = function () {}
global.CSSStyleSheet.prototype.replaceSync = (k) => false

global.HTMLElement.prototype.attachInternals = () => {
  return new global.ElementInternals()
}

global.ElementInternals = function () {}
global.ElementInternals.prototype.setValidity = () => {}
global.ElementInternals.prototype.setFormValue = () => {}
