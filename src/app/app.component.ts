import { Component } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public showNav: boolean = false;
    
    // public image: string = 'cholla';
    // public bgImageUrl: string = `../assets/landscapes/${this.image}.jpg`;
    public image: string = 'teal-wood-paneling';
    public bgImageUrl: string = `../assets/patterns/${this.image}.jpg`;
    public bgImageAltTag: string = 'vertical wood paneling or wainscoting, painted with a teal-colored paint';
    // public bgImages: string[] = [];

    // @TODO: set animation duration based on device width? if possible?

    constructor( private _activeRoute: ActivatedRoute,
                 private _router: Router ) {

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
