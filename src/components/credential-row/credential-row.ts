import { Component, Input } from '@angular/core';
import Credential from '../../model/credential';

/**
 * Generated class for the CredentialRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'credential-row',
  templateUrl: 'credential-row.html'
})
export class CredentialRowComponent {

  @Input()
  credential: Credential

  constructor() {
  }

}
