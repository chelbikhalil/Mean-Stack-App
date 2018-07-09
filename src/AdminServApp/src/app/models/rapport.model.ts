export class rapport{
    nomC? : string;
    technologie?:string;
    nomResponsableSit: string;
    Chassis:string;
    alimentation: {
        mainsecalimentation: string,
        cable:string,
        commentairealimentation:string
    }
    chassis : {
        equippropre: string,
        faf: string,
        commentairechassis: string,
        bracelet:string,
        temperature:string,
        slot:string,
        emplacement : string,
        tofchassis: string
    }
    cleanupfibre : {
        commentaireavant: string,
        commentaireapres : string
    }
    coffret:{
        mainseccoffret: string,
        commentairecoffret: string
    }
    equipement:{
        porteavant:string,
        portearriere:string,
        commentaireequip:string
}
fibre:{
    petiquetage:string,
    comfibre:string
}
    fixation:{
        sitefixe:string,
        commentairefixe:string
    }
odf:
{etiquetageodf:string,
    protectionodf:string,
    commentaireodf:string
}
protectionfibre:{
    protectionfibre:string,
    commentaireprotectionfibre:string
}
general:{
    conclusion:string

}
}