import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import Folder from '../model/folder';

@Injectable()
export class FolderService {
    constructor(
        private http: Http
    ) { }

    getFolders() {
        return this.http.get('/api/folder/')
            .map((res: Response) => res.json().results as Folder[]);
    }
}