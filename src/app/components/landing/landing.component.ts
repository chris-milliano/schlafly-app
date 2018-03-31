import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    hasNotSeenAnimation: boolean = true;
    wordAnimationIndex: number = 0;
    isAnimationRunning: boolean = true;

    constructor() { }

    ngOnInit() {

        // Determine if the
        if (sessionStorage.hasSeenAnimation == null) { this.runIntroAnimation(); }
        else { this.hasNotSeenAnimation = false; }
    }

    // Iterate over the intro animation
    runIntroAnimation() {
        setTimeout ( () => {
            this.wordAnimationIndex++;

            // Recursively call each word until the logo appears
            if (this.wordAnimationIndex < 4) { this.runIntroAnimation(); }

            // Once the logo has been displayed end the animation and record
            // that the user has seen the animation so it does not display
            // again during this session
            else {
                setTimeout( () => {
                    this.isAnimationRunning = false;
                    sessionStorage.hasSeenAnimation = true;
                }, 1000);
            }
        }, 1000);
    }
}
