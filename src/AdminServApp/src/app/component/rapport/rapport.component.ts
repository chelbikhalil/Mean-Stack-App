import { Component, OnInit } from '@angular/core';
import * as jsPDF from  'jspdf';
import { clients } from '../../models/clients.model';
import { ClientsComponent } from '../clients/clients.component';
import { RapportService } from '../../services/rapport.service';
import { rapport } from '../../models/rapport.model';
import { planning } from '../../models/planning.model';
import { PlanningService } from '../../services/planning.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  
     nomC: string;
    technologie:string;
    nomResponsableSit: string;
    chassis:string;
    date : string;
    mainsecalimentation : string;
    commentairealimentation: string;
    cable : string;
    equippropre: string;
        faf: string;
        commentairechassis: string;
        bracelet:string;
        temperature:string;
        slot:string;
        emplacement : string;
        tofchassis: string
        commentaireavant: string;
        commentaireapres : string;
        mainseccoffret: string;
        commentairecoffret: string
        porteavant:string;
        portearriere:string;
        commentaireequip:string;
        petiquetage:string;
    comfibre:string;
    sitefixe:string;
    commentairefixe:string;
    etiquetageodf:string;
    protectionodf:string;
    commentaireodf:string;
    protectionfibre:string;
    commentaireprotectionfibre:string;
    conclusion:string;
  rapport = [];
  planning = [];

  constructor(private  RapportService: RapportService, private PlanningService: PlanningService) {

    this.RapportService.getrapport()
      .subscribe(rapport =>{
      this.rapport = rapport
      for(let j = 0; j< rapport.length; j++){   
        this.PlanningService.getplanning()
        .subscribe(planning =>{
       this.planning = planning
       this.nomC = rapport[j].nomC;
       this.technologie = rapport[j].technologie;
       this.chassis= rapport[j].Chassis;
       this.nomResponsableSit = rapport[j].nomResponsableSit;
       //alimentation
       this.mainsecalimentation = rapport[j].alimentation.mainsecalimentation;
       this.equippropre =  rapport[j].alimentation.cable;
       this.faf =  rapport[j].alimentation.cable;
       this.commentairealimentation =    rapport[j].alimentation.commentairealimentation; 
       //chassis
       this.commentairechassis =  rapport[j].chassis.commentairechassis;
       this.bracelet =  rapport[j].chassis.bracelet;
       this.temperature =  rapport[j].chassis.temperature;
       this.slot =  rapport[j].chassis.slot;
       this.emplacement =  rapport[j].chassis.emplacement;
       this.tofchassis =  rapport[j].chassis.tofchassis;
       //cleanupfibre
       this.commentaireavant=  rapport[j].cleanupfibre.commentaireavant;
       this.commentaireapres=  rapport[j].cleanupfibre.commentaireapres;
       //coffret
this.mainseccoffret = rapport[j].coffret.mainseccoffret;
this.commentairecoffret =rapport[j].coffret.commentairecoffret;
//equipement

this.porteavant = rapport[j].equipement.porteavant;
this.portearriere = rapport[j].equipement.portearriere;
this.commentaireequip = rapport[j].equipement.commentaireequip;

//fibre
this.petiquetage = rapport[j].fibre.petiquetage;
this.comfibre = rapport[j].fibre.comfibre;
//fixation
this.sitefixe = rapport[j].fixation.sitefixe;
this.commentairefixe= rapport[j].fixation.commentairefixe;
//odf
this.etiquetageodf = rapport[j].odf.etiquetageodf;
this.protectionodf = rapport[j].odf.protectionodf;
this.commentaireodf = rapport[j].odf.commentaireodf;

//protection fibre 
this.protectionfibre= rapport[j].protectionfibre.protectionfibre;
this.commentaireprotectionfibre = rapport[j].protectionfibre.commentaireprotectionfibre;
// generale
this.conclusion = rapport[j].general.conclusion;

        for(let i = 0; i< planning.length; i++){   
        if (planning[i].chassis == rapport[j].Chassis){
          this.date = planning[i].date;
          
        }
      }
      })
      }
  })
  }
  ngOnInit() {
  }
  downloadpdf(){
const doc = new jsPDF();
var lMargin=15; //left margin in mm
var rMargin=15; //right margin in mm
var pdfInMM=210;  // width of A4 in mm
var pageCenter=pdfInMM/2;

var number = prompt('numero du rapport ?');
var rap = this.rapport;
doc.setFontSize(12);
doc.text(20,30,"rapport numero :" +number );
var myJSON = JSON.stringify(rap);
doc.setFontSize(22);	
doc.text( 'Rapport Visite',pageCenter,20,'center');
doc.setFontSize(12);
doc.text(20, 40, 'Date :' + this.date);
doc.setFontSize(12);
doc.text(20, 50, 'Nom du Client :' + this.nomC);
doc.setFontSize(12);
doc.text(20, 60, 'Technologie :' + this.technologie);
doc.setFontSize(12);
doc.text(20, 70, 'Nom Responsable du Sit :' + this.nomResponsableSit);
doc.setFontSize(12);
doc.text(20, 80, 'Num chassis :' + this.chassis);
doc.setFontSize(15);
doc.text(50, 90, 'partie 1 => Equipement :');
doc.setFontSize(13);
doc.text(20, 100, ' Rack :');
doc.setFontSize(12);
doc.text(20, 110, '• Porte Avant :'+this.porteavant);
doc.setFontSize(12);
doc.text(20, 120, '• Porte Arrière :'+this.portearriere);
doc.setFontSize(12);
doc.text(20, 130, '• Commentaire :'+this.commentaireequip);
doc.setFontSize(13);
doc.text(20, 140, 'Chassis  :');
doc.setFontSize(12);
doc.text(20, 150, '• Propreté de l’équipement :'+this.equippropre);
doc.setFontSize(12);
doc.text(20, 160, '• Etat de FANs:  :'+this.faf);
doc.setFontSize(12);
doc.text(20, 170, '• Bracelet :'+this.bracelet);
doc.setFontSize(12);
doc.text(20, 180, '• Température :'+this.temperature);
doc.setFontSize(12);
doc.text(20, 190, '• Slots vides avec caches :'+this.slot);
doc.setFontSize(12);
doc.text(20, 200, '• Emplacement de l’équipement :'+this.emplacement);
doc.setFontSize(12);
doc.setFontSize(13);
doc.text(20, 210, 'Fixation  :');
doc.setFontSize(12);
doc.text(20, 220, '• Fixation :'+this.sitefixe);
doc.setFontSize(12);
doc.text(20, 230, '• Commentaire:  :'+this.commentairefixe);

//
doc.setFontSize(15);
doc.text(50, 240, 'partie 2 => Fibre :');
doc.setFontSize(12);
doc.text(20, 250, '• Étiquetage fibre  :'+this.petiquetage);
doc.setFontSize(12);
doc.text(20, 260, '• Commentaire :'+this.comfibre);
doc.setFontSize(13);
doc.text(20, 270, 'Protection Fibre  :');
doc.text(20, 280, '• Protection fibre  :'+this.protectionfibre);
doc.setFontSize(12);
doc.text(20, 290, '• Commentaire :'+this.commentaireprotectionfibre);
//new Page
doc.addPage();
doc.setFontSize(12);
doc.text(20, 20, 'ODF  :');
doc.text(20, 30, '• Etiquetage  :'+this.etiquetageodf);
doc.setFontSize(12);
doc.text(20, 40, '• Protection :'+this.protectionodf);
doc.setFontSize(12);
doc.text(20, 50, '• Commentaire :'+this.commentaireodf);
//
doc.setFontSize(15);
doc.text(50, 60, 'partie 3 => Alimentation Energie :');
doc.setFontSize(13);
doc.text(20, 70, 'Alimentation Energ  :');
doc.text(20, 80, '• Étiquetage Main/sec  :'+this.mainsecalimentation);
doc.setFontSize(12);
doc.text(20, 90, '• Cable de terre :'+this.cable);
doc.setFontSize(12);
doc.text(20, 100, '• Commentaire  :'+this.commentairealimentation);
doc.setFontSize(13);
doc.text(20,110, 'Coffret  :');
doc.text(20, 120, '• Étiquetage Main/sec  :'+this.mainseccoffret);
doc.setFontSize(12);
doc.text(20, 130, '• Commentaire :'+this.commentairecoffret);
//

doc.setFontSize(15);
doc.text(50, 140, 'partie 4 => Cleanup :');
doc.setFontSize(13);
doc.text(20, 150, 'Cleanup du Filtre  :');
doc.text(20, 160, '• Commentaire Avant Nettoyage :'+this.commentaireavant);
doc.setFontSize(12);
doc.text(20, 170, '• Commentaire Après Nettoyage :'+this.commentaireapres);
//
doc.setFontSize(15);
doc.text(50, 180, 'partie 5 => Conclusion Générale :');
doc.setFontSize(13);
doc.text(20, 190, 'Conclusion  :');
doc.setFontSize(12);
doc.text(20, 200, '• Etat générale du site :'+this.conclusion);
var lines =doc.splitTextToSize(myJSON, (pdfInMM-lMargin-rMargin));
doc.setFontSize(16);
doc.output('datauri');
doc.save(this.nomC);
}
}

  

