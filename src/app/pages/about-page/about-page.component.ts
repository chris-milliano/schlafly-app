import { Component, OnInit } from '@angular/core';

import { AboutCopyService } from '../../services/about-copy.service';
import { AboutCopy } from '../../models/about-copy';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
    providers: [AboutCopyService]
})
export class AboutPageComponent implements OnInit {

    aboutCopy: AboutCopy;

    constructor (
        private aboutCopyService: AboutCopyService
    ) {}

    ngOnInit() {
        console.log("Init about-page.component");
        this.getPageCopy();
    }

    getPageCopy() {
        this.aboutCopyService.getAboutCopy().subscribe (
            res => { this.aboutCopy = res as AboutCopy; }
        );
    }

}
