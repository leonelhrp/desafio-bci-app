import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private charactersService: CharactersService,
  ) { }

  characters: Array<string> = [];
  charactersLoaded = false;

  ngOnInit() {
    this.charactersService.getAll()
    .subscribe(characters => {
      this.characters = characters;
      this.charactersLoaded = true;
    });
  }

}
