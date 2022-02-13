import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() article!: Article;
  @Input() articleDesc!: string;
  private symbols: number = 250;
  descToShow: string;
  articleDescLength: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageBtnTitle: string = 'Show Image';

  constructor() {
    this.articleDescLength = 0;
    this.descToShow = '';
  }

  readMore(): void {
    this.articleDescLength += this.symbols;
    console.log(this.articleDescLength);
    console.log(this.articleDesc.length);
    
    
    if (this.articleDescLength >= this.articleDesc.length) {

      this.descToShow = this.articleDesc.substring(0, this.articleDesc.length);
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {

        this.descToShow = this.articleDesc.substring(0, this.articleDescLength);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageBtnTitle = this.imageBtnTitle == 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLength = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

}
