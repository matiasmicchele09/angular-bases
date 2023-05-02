import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  /* Con este constructor hacemos la INYECCION DE DEPENDENCIAS. Esto me va a habilitar en todo mi componente del Main Page toda
    la información que este siendo utilizada en este servicio */
  constructor(private dbzService: dbzService){}

    get characters(): Character[]{
      return [...this. dbzService.characters];  }

      onDeleteCharacter(id: string):void{
        this.dbzService.deleteCharacterById(id)

      }

      onNewCharacter(character: Character){
        this.dbzService.addCharacter(character)
      }
  }
