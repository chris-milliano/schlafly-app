import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isMenuOpen: boolean = false;

    constructor() { }

    ngOnInit() {
        console.log("Init navbar.component");
    }


    // Handle menu button click animations
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

}
