import { Component, Input } from '@angular/core';
import Folder from '../../model/folder';

/**
 * Generated class for the FolderRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'folder-row',
  templateUrl: 'folder-row.html'
})
export class FolderRowComponent {

  @Input()
  folder: Folder

  constructor() {
  }

}
