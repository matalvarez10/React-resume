import DescriptionComponent from "./descriptionComponent";
import { IDescriptionData } from "../interfaces/inputDesc.interface";
const  ResumeComponent = ({formData} : {formData:IDescriptionData}) => {
    return ( 
    <div className="contenedor"> 
            <DescriptionComponent formData={formData}></DescriptionComponent>
        {/* TODO : ADD ALL THE OTHER RESUME COMPONENTS */}
    </div> 
    );
}

export default ResumeComponent;