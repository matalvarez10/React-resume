import { ChangeEvent } from "react";

export interface IDescriptionData{
    nombre: string;
    apellido: string;
    cargo:string;
    about:string;
    numero: string;
    correo:string;
    sitioWeb:string;
    ubicacion:string;
}

export interface InputDescriptionProps {
    handleData: (event: (ChangeEvent<HTMLInputElement>) ) => void;
    formData: IDescriptionData;
  }