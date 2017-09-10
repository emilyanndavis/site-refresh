import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    // private _messageOptions: string[] = [];
    // private _messageNum: number = 0;
    // private _messageSwitcher: Subscription;

    // public message: string[] = [];
    public secondsPerChar: number = 0.2;   // animation duration for each character
    public typingDuration: number = 0;
    // public messageDelay: number = 2;       // delay before deleting typed message, in seconds

    public name: string = 'Emily Davis';
    public translationLink: string[] = [];
    public devLink: string[] = [];
    
    public image: string = 'teal-wood-paneling';
    public bgImageUrl: string = `../../assets/patterns/${this.image}.jpg`;

    // public image: string = 'cholla';
    // public bgImageUrl: string = `../assets/landscapes/${this.image}.jpg`;
    // public bgImages: string[] = [];

    public icons: any[] = [];
    public descriptors: any[] = [];
    public location: string = 'Boise, Idaho';

    constructor() {
        // this._messageOptions = [
        //     'Emily Davis',
        //     'Hello',
        //     'Cactuses are cool',
        //     'CSS animations are fun',
        //     'All your base are belong to us',
        // ];
        this.icons = [
            {
                name: 'twitter',
                href: 'https://twitter.com/emilyadavis'
            },
            {
                name: 'linkedin',
                href: 'https://linkedin.com/in/emilydavis-boise'
            },
            {
                name: 'github',
                href: 'https://github.com/emilyanndavis'
            }
        ];
   }

    // public ngOnInit(): void {
    //     this._generateBgImages(12);
    // }

    public ngAfterViewInit(): void {
        // setTimeout(() => {
        //     this._updateMessage();
        // }, 1000);

        setTimeout(() => {
            this._startTyping('devLink', 'Web Developer');
            let delay = this.secondsPerChar * this.devLink.length * 1000;
            setTimeout(() => {
                this._startTyping('translationLink', 'Translator');
            }, delay);
        }, 1000);

        // Sets a timer for cycling through the list of messages. Disabled for now (using just the first message instead).
        // let timer:Observable<number> = Observable.interval(6000);
        // this._messageSwitcher = timer.subscribe( num => {
        //     console.log(`switching to a new message...`, num);
        //     num % 2 === 1 ? this._updateMessage() : this.message = [];
        // });
    }

    private _startTyping(link: string, text: string): void {
        this[link] = text.split('');
    }

    public keepVisible(event: Event): void {
        let elem: HTMLElement = <HTMLElement>event.target;
        elem.style.visibility = 'visible';
    }

    // public ngOnDestroy(): void {
    //     if (this._messageSwitcher) {
    //         this._messageSwitcher.unsubscribe();
    //     }
    // }

    // private _generateBgImages(num: number): void {
    //     for (let i = 0; i < num; i++) {
    //         this.bgImages.push(this.bgImageUrl);
    //     }
    // }

    // private _updateMessage(): void {
    //     let messageStr = this._messageOptions[this._messageNum];
    //     this.message = messageStr.split('');
    //     this.typingDuration = this.secondsPerChar * this.message.length + this.messageDelay;
    //     // The line below is for cycling through the list of messages. Disabled for now.
    //     // this._messageNum < this._messageOptions.length - 1 ? this._messageNum++ : this._messageNum = 0;
    // }

}
