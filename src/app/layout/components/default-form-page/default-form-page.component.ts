import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-form-page',
  templateUrl: './table.component.html'
})
export class DefaultFormPage implements OnInit {
  @Input('data') set data(value: any) {
    if(!value) return;
    this.formData = value;
  }

  public formData;
  constructor() {}

  // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    console.log(this.formData);
  }
}
