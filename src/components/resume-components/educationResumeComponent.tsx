import { IEducationData } from "../../interfaces/inputEducation.interface";
import CustomSectionHeader from "../resume-style-components/sectionHeader";
import IndividualEducationComponent from "./IndividualEducationComponent";
const EducationResumeComponent = ({allEducationArray}:{allEducationArray: IEducationData[]}) => {
    return ( 
        <>
        <CustomSectionHeader titulo="Education"/>
            {allEducationArray.map(education=>(
                <IndividualEducationComponent key={education.id} education={education}/>
            ))}
        </> 
    );
}
 
export default EducationResumeComponent;