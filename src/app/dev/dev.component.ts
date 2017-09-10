import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.component.html',
    styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

    public languages: string[] = [];
    public libsAndFrameworks: string[] = [];
    public educationList: Education[] = [];

    // public imageName: string = 'barrel-cactus-closeup';          // this one is good!
    // public imageName: string = 'cholla';                         // not great this small
    // public imageName: string = 'conifer-forest-red-tones';       // not great this small
    // public imageName: string = 'desert-monoliths';               // not great this small
    // public imageName: string = 'desert-monoliths-closer';        // not great this small
    // public imageName: string = 'joshua-trees';                   // not great this small
    // public imageName: string = 'potted-cactus-web-dev-books';    // not great this small
    // public imageName: string = 'potted-cactus-white-on-white';   // not bad but maybe too much white?
    // public imageName: string = 'saguaros-for-days';              // not great this small
    // public imageName: string = 'saguaros-milky-way';             // not great this small
    // public imageName: string = 'seaweed-cactus';                 // not great this small
    // public imageName: string = 'stormy-desert';                  // not great this small
    // public imageName: string = 'succulent-weathered-wood';       // not great this small
    // public imageName: string = 'succulents-copper-pot';          // not bad but a bit too small
    
    // public bgImageUrl: string = `../../assets/landscapes/${this.imageName}.jpg`;
    // public bgImages: string[] = [];

    constructor() { }

    public ngOnInit(): void {
        this._populateLists();
        // this._generateBgImages(30);
    }

    // private _generateBgImages(num: number): void {
    //     for (let i = 0; i < num; i++) {
    //         this.bgImages.push(this.bgImageUrl);
    //     }
    // }    

    private _populateLists(): void {
        this.languages = [
            'HTML5', 
            'CSS3', 
            'JavaScript', 
            'TypeScript', 
            'PHP', 
            'C#', 
            'Python', 
            'Git'
        ];
        this.libsAndFrameworks = [
            'Angular (2+)', 
            'AngularJS (1.x)', 
            'jQuery', 
            'Bootstrap',
            'Sass', 
            'Phalcon', 
            '.NET MVC', 
            'Ionic', 
            'MongoDB'
        ];
        this.educationList = [
            new Education('BoiseCodeWorks', 'Full Stack Web Development', 'Sept 2016'),
            new Education('MongoDB University', 'MongoDB for Developers (M101P)', 'Feb 2017')
        ];
    }

}

export class Education {
    constructor( public school: string,
                 public program: string, 
                 public completedDate: string ) {
        
    }
}
