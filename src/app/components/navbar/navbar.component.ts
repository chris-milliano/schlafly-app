import { Component, OnInit } from '@angular/core';

import { NavLink } from '../../models/nav-link';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isMenuOpen: boolean = false;

    navLinks: Array <NavLink> = [
        { "id": 1, "title": "ABOUT US", "link": "/about" },
        { "id": 2, "title": "BEER", "link": "/beers" },
        { "id": 3, "title": "FOOD", "link": "/food" },
        { "id": 4, "title": "EVENTS", "link": "/events" },
        { "id": 5, "title": "CONTACT US", "link": "/contact" },
        { "id": 6, "title": "TOURS", "link": "/tours" },
        { "id": 7, "title": "SHOP", "link": "/shop" }
    ]

    constructor() { }

    ngOnInit() {
        console.log("Init navbar.component");
    }


    // Handle menu button click animations
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

}
