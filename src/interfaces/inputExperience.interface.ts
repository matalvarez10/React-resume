import { ChangeEvent } from "react";

export interface IExperienceData{
    posicion:string;
    companyName:string;
    lugar:string;
    fechaInicio:string;
    fechaTermino:string;
    description:string;
}

export interface InputExperienceData {
    handleExpData: (event: ChangeEvent<HTMLInputElement>) => void;
    handleExpDataTextarea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    expData: IExperienceData;
  }