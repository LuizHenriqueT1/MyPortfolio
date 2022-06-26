import { Project } from './../../models/project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private projectors: Project[] = [
    {
      image: 'assets/img/Capturar.PNG',
      title: 'Ecommerce-cars',
      description: 'Projeto desenvolvido em squad utilizando angular',
      imageLinguage: 'assets/img/icon-angular.png',
      imageGit: 'assets/img/icon-github.png'

    }
  ]
}
