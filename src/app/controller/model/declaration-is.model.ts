export class DeclarationIs {
  public reference: string;
  public tauxDeISRef: string;
  public declarationTvaRef: string;
  public declarationTvaRefCalcul: string;
  public societeRef: string;
  public benefice: number;
  public totalgain: number;
  public totalcharge: number;
  public referencecalcul:string;
  public datefacture:Date;
  public datepaiment:Date;
  public montantsanspenal:number;
  public montantpenalite:number;
  public montantavecpenalite:number;


  constructor() {
    this.benefice = 0;
    this.totalgain=0;
    this.totalcharge=0;
    this.montantavecpenalite=0;
    this.montantpenalite=0;
    this.montantsanspenal=0;
  }
}
