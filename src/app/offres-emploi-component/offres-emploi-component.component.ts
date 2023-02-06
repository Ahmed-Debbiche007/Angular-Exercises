import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  listEmploi!:Emploi[]
  resultat!:string;
  nomEntreprise!: string;
  constructor() { }

  ngOnInit(): void {
    this.listEmploi=[
      {reference: "1", titre: "Offre1", entreprise: "ESPRIT", etat: true},
      {reference: "2", titre: "Offre2", entreprise: "SOPRAT", etat: true},
      {reference: "3", titre: "Offre3", entreprise: "DATAIKU", etat: false}
    ]
  }
  public bilan (){
     var i:number= 0;
    this.listEmploi.forEach(element => {
      if (element.etat== false) {
        i++
      }
    });
    this.resultat=i.toString();
 }
}