import { Component, OnInit } from '@angular/core';

import { NavLink } from '../../models/nav-link';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    navLinks: Array <NavLink> = [
        { "id": 1, "title": "ABOUT US", "link": "/about" },
        { "id": 2, "title": "BEER", "link": "/beers" },
        { "id": 3, "title": "FOOD", "link": "/food" },
        { "id": 4, "title": "EVENTS", "link": "/events" },
        { "id": 6, "title": "TOURS", "link": "/tours" },
        { "id": 7, "title": "SHOP", "link": "/shop" },
        { "id": 8, "title": "BLOG", "link": "/blog" },
        { "id": 9, "title": "JOBS", "link": "/jobs" },
        { "id": 10, "title": "FAQ", "link": "/faq" }
    ]

    constructor() { }

    ngOnInit() {
        console.log("Init navbar.component");
    }

}
