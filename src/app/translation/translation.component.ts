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
        let wordsWithoutBorders: Publication = new Publication(
            'Words Without Borders', 
            'https://www.wordswithoutborders.org/article/the-man-who-buried-himself', 
            'Read it Online'
        );
        let unamuno: PublicationAuthor = new PublicationAuthor( 'Miguel de Unamuno' );
        unamuno.pieces = [
            new PublicationPiece('"The Man Who Buried Himself"')
        ];
        wordsWithoutBorders.authors = [ unamuno ];

        let aThousandForests: Publication = new Publication(
            'Open Letter Books',
            'https://www.openletterbooks.org/collections/books/products/a-thousand-forests-in-one-acorn',
            'Get the Book',
            'A Thousand Forests in One Acorn: An Anthology of Spanish-Language Fiction'
        );
        let chirbes = new PublicationAuthor('Rafael Chirbes');
        chirbes.pieces = [
            new PublicationPiece('Crematorium', true)
        ];
        let fernandezCubas = new PublicationAuthor('Cristina Fernández Cubas');
        fernandezCubas.pieces = [
            new PublicationPiece('"The Journey"'),
            new PublicationPiece('"The Angle of Horror"'),
            new PublicationPiece('The Year of Grace', true)
        ];
        let pinilla = new PublicationAuthor('Ramiro Pinilla');
        pinilla.pieces = [
            new PublicationPiece('The Blind Ants', true)            
        ];
        aThousandForests.authors = [ chirbes, fernandezCubas, pinilla ];

        let bogota39: Publication = new Publication(
            'Oneworld Publications',
            '#',
            '',
            'Bogotá 39: New Voices from Latin America'
        );
        let soto: PublicationAuthor = new PublicationAuthor('Jesús Miguel Soto');
        soto.pieces = [
            new PublicationPiece('Short Story TBD (Forthcoming in 2018)')
        ];
        bogota39.authors = [ soto ];
        this.publications = [
            wordsWithoutBorders, 
            aThousandForests,
            // bogota39
        ];

    }

}

export class Publication {

    public authors: PublicationAuthor[] = [];
    
    constructor( public publisher: string,
                 public linkHref: string,
                 public linkText: string,
                 public collection: string = '' ) {
            
    }
}

export class PublicationAuthor {

    public pieces: PublicationPiece[] = [];

    constructor( public name: string ) {

    }
}
    
export class PublicationPiece {
    constructor( public title: string,
                 public excerpt: boolean = false ) {
            
    }
}
