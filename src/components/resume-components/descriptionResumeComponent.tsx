import { IDescriptionData } from "../../interfaces/inputDesc.interface";

const DescriptionComponent = ({formData}:{ formData:IDescriptionData}) => {
    return ( 
        <div>
            <p>{formData.nombre}</p>
            <p>{formData.numero}</p>
            <p>{formData.apellido}</p>
        </div>
     );
}
 
export default DescriptionComponent;