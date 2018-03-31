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

        if (sessionStorage.hasSeenAnimation == null) {
            console.log("start animation");
            this.runIntroAnimation();
        } else {
            this.hasNotSeenAnimation = false;
        }
    }

    //
    runIntroAnimation() {
        setTimeout ( () => {
            this.wordAnimationIndex++;
            if (this.wordAnimationIndex < 4) {
                this.runIntroAnimation();
            }
            else {
                setTimeout( () => {
                    this.isAnimationRunning = false;
                    sessionStorage.hasSeenAnimation = true;
                    console.log("end animation");
                }, 1000);
            }
        }, 1000);
    }



    // //
    // runIntroAnimation() {
    //     setTimeout( () => {
    //         this.showNextWord();
    //     } , 1000);
    // }
    //
    // //
    // showNextWord() {
    //     this.wordAnimationIndex++;
    //     if (this.wordAnimationIndex < 4) {
    //         this.runIntroAnimation();
    //     }
    //     else {
    //         setTimeout( () => {
    //             this.isAnimationRunning = false;
    //
    //         } , 1000);
    //     }
    // }

}
