import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { People } from '../models/people';

@Injectable()
export class PeopleService {

    constructor(
        private httpClient: HttpClient
    ) {}

    // GET Our People data
    getPeople() {
        let url = '/assets/mock-api/employees/all/content.json';
        return this.httpClient.get<People>(url);
    }
}
