import { Component, OnInit } from '@angular/core';

import { NavLink } from '../../models/nav-link';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    NUM_DESKTOP_LINKS: number = 5;
    
    isMenuOpen: boolean = false;

    navLinks: Array <NavLink> = [
        { "id": 1, "title": "ABOUT US", "link": "/about" },
        { "id": 2, "title": "BEERS", "link": "/about" },
        { "id": 3, "title": "FOOD", "link": "/about" },
        { "id": 4, "title": "EVENTS", "link": "/about" },
        { "id": 5, "title": "CONTACT US", "link": "/about" },
        { "id": 6, "title": "TOURS", "link": "/about" },
        { "id": 7, "title": "SHOP", "link": "/about" }
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
