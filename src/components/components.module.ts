import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CredentialRowComponent } from './credential-row/credential-row';
import { FolderRowComponent } from './folder-row/folder-row';
@NgModule({
	declarations: [CredentialRowComponent,
    FolderRowComponent],
	imports: [IonicModule],
	exports: [CredentialRowComponent,
    FolderRowComponent]
})
export class ComponentsModule {}
