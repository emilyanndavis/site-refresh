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

    constructor() { }

    public ngOnInit(): void {
        this._populateLists();
    }

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
