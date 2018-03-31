import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    wordAnimationIndex: number = 0;
    isAnimationRunning = true;

    constructor() { }

    ngOnInit() {
        this.runIntroAnimation();
    }

    //
    runIntroAnimation() {
        setTimeout( () => { this.showNextWord(); } , 1000);
    }

    //
    showNextWord() {
        this.wordAnimationIndex++;
        if (this.wordAnimationIndex < 4) {
            this.runIntroAnimation();
        }
        else {
            setTimeout( () => { this.isAnimationRunning = false; } , 1000);
        }

    }

}
