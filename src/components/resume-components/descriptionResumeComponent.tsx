import { IDescriptionData } from "../../interfaces/inputDesc.interface";
import CustomSectionHeader from "../resume-style-components/sectionHeader";
import {FaPhone,FaEnvelope,FaGlobe,FaLocationDot} from "react-icons/fa6";
import CustomContactInfo from "../resume-style-components/contactInfo";

const DescriptionComponent = ({formData}:{ formData:IDescriptionData}) => {
    console.log(formData)
    return ( 
        <section>
            <p className="first-letter:uppercase font-raleway font-normal text-2xl text-center text-gray-700">{formData.nombre} <span className="font-bold">{formData.apellido}</span></p>
            <p className="text-base text-blue-400 text-center">{formData.cargo}</p>
            <div className="flex flex-row gap-10">
                <div className="w-[60%]">
                    <CustomSectionHeader titulo="About Me"/>
                    <p className=" break-all font-lato text-justify text-xs">{formData.about}</p>
                </div>
                <div className=" w-[35%] flex flex-col gap-1">
                    <CustomSectionHeader titulo="Contacts"/>
                    <CustomContactInfo Icon={FaPhone} datos={formData.numero}/>
                    <CustomContactInfo Icon={FaEnvelope} datos={formData.correo}/>
                    <CustomContactInfo Icon={FaGlobe} datos={formData.sitioWeb}/>
                    <CustomContactInfo Icon={FaLocationDot} datos={formData.ubicacion}/>

                </div>
            </div>
        </section>
     );
}
 
export default DescriptionComponent;