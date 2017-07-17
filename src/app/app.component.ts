import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public showNav: boolean = false;

    // @TODO: set image selection based on device width? and/or activated route?
    
    // public image: string = 'cholla';
    // public bgImageUrl: string = `../assets/landscapes/${this.image}.jpg`;
    public image: string = 'teal-wood-paneling';
    public bgImageUrl: string = `../assets/patterns/${this.image}.jpg`;
    // public bgImages: string[] = [];

    // @TODO: set alt tag based on selected image and allow html template to reference it

    // @TODO: set animation duration based on device width? if possible?

    constructor() {

    }

    // public ngOnInit(): void {
    //     this._generateBgImages(1);
    // }

    // private _generateBgImages(num: number): void {
    //     for (let i = 0; i < num; i++) {
    //         this.bgImages.push(this.bgImageUrl);
    //     }
    // }

    public toggleNav(): void {
        let nav:HTMLElement = document.getElementById('navigation');
        if (this.showNav) {
            nav.style['animation-name'] = 'slide-up';
        } else {        
            nav.style['animation-name'] = 'slide-down';            
        }
        this.showNav = !this.showNav;
    }
    
}
