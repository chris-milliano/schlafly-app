import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AboutCopyService {

    constructor(
        private httpClient: HttpClient
    ) { }

    //
    getAboutCopy () {
        let url = '/assets/mock-api/about/content.json';
        return this.httpClient.get(url);
    }

}
