import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-translation',
    templateUrl: './translation.component.html',
    styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {

    public publications: Publication[] = [];

    constructor() { }

    public ngOnInit(): void {
        this._populateData();
    }

    private _populateData(): void {
        let unamuno: Publication = new Publication(
            'Words Without Borders', 
            'https://www.wordswithoutborders.org/article/the-man-who-buried-himself', 
            'Read More'
        );
        unamuno.pieces = [
            new PublicationPiece('"The Man Who Buried Himself"', 'Miguel de Unamuno')
        ];
        let forests: Publication = new Publication(
            'Open Letter Books',
            'https://www.openletterbooks.org/collections/books/products/a-thousand-forests-in-one-acorn',
            'Read More',
            'A Thousand Forests in One Acorn: An Anthology of Spanish-Language Fiction'
        );
        forests.pieces = [
            new PublicationPiece('The Blind Ants', 'Ramiro Pinilla', true),
            new PublicationPiece('"The Journey"', 'Cristina Fernández Cubas'),
            new PublicationPiece('"The Angle of Horror"', 'Cristina Fernández Cubas'),
            new PublicationPiece('The Year of Grace', 'Cristina Fernández Cubas', true),
            new PublicationPiece('Crematorium', 'Rafael Chirbes', true)            
        ];
        let bogota: Publication = new Publication(
            'Oneworld Publications',
            '#',
            '',
            'Bogotá 39: New Voices from Latin America'
        );
        bogota.pieces = [
            new PublicationPiece('Short Story TBD (Forthcoming in 2018)', 'Jesús Miguel Soto')
        ];
        this.publications = [
            unamuno, 
            forests,
            bogota
        ];
    }

}

export class Publication {

    public pieces: PublicationPiece[] = [];

    constructor( public publisher: string,
                 public linkHref: string,
                 public linkText: string,
                 public collection: string = '' ) {

    }
}

export class PublicationPiece {
    constructor( public title: string, 
                 public author: string,
                 public excerpt: boolean = false ) {

    }
}
