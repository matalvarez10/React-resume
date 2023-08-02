export interface IExperienceData{
    id:number;
    posicion:string;
    companyName:string;
    lugar:string;
    fechaInicio:string;
    fechaTermino:string;
    description:string;
}

export interface InputExperienceData {
    handleClickExp: (expData: IExperienceData) => void;
  }