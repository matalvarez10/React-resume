import InputDescriptionComponent from "./inputsDescriptionComponent";
import { InputDescriptionProps } from "../interfaces/inputDesc.interface";


const InputsFieldComponent:React.FC<InputDescriptionProps> = ({handleData,formData}) => {
    return ( 
    <div className="contenedor">    
        <InputDescriptionComponent handleData={handleData} formData={formData}></InputDescriptionComponent>
    </div> 
    );
}

export default InputsFieldComponent;
