import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[cbxStatus]'
})
export class StatusDirective {  

  /**
   * Controle do formulario
   */
  private control;

  /**
   * Volta a classe quando invalido
   */
  @HostBinding('class.invalid') get isInvalid() {
    return (this.control && this.control.errors && this.control.invalid && this.control.dirty && this.control.touched);
  };

  /**
   * Volta a classe quando valido
   */
  @HostBinding('class.valid') get isValid() {
    return (this.control && !this.control.errors && !this.control.invalid && this.control.dirty && this.control.touched);
  };

  /**
   * Volta uma classe de acordo com o status do controller
   */
  @Input() set cbxStatus(control) {
    this.control = control;
  }
}

// End of file
