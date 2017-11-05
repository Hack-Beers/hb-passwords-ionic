import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Credential from '../../model/credential';
import Folder from '../../model/folder';
import { FolderService } from '../../requests/folder.service';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Credential[];
  itemsFolder: Folder[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public folderService: FolderService) {
    // If we navigated to this page, we will have an item available as a nav param
    folderService.getFolders().subscribe((data)=>{
      this.itemsFolder = data;
    })
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    //this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    //'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Credential ' + i,
        user: 'This is credential #' + i
      } as Credential);
    }

    this.itemsFolder = [];
    for (let j = 1; j < 4; j++) {
      this.itemsFolder.push({
        name: 'Folder ' + j
      } as Folder);
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
