import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseFormField } from '../../base-form';

@Component({
  selector: 'textbox',
  standalone: false,
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent extends BaseFormField implements OnChanges{
  @Input() label : string = "";
  @Input() type : string = "text";

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.value = this.value ?? '';
    }
  }

  override writeValue(value: any): void {
    this.value = value
  }

  onTextChange($event: any) {
    const value = $event?.target?.value;
    this.onChange(value);
    if (this.required) {
      const notEmpty = new RegExp(/\S+/);
      const username = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
      if (notEmpty.test(value)) {
        this.removeErrors(['empty'], this.control!);
        this.control?.updateValueAndValidity();
      }
      else {
        this.addErrors({ empty: true }, this.control!);
      }
    }
 
    this.value = value;
  }
}
