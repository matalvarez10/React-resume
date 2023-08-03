import { IEducationData } from "../../interfaces/inputEducation.interface";

const EducationResumeComponent = ({allEducationArray}:{allEducationArray: IEducationData[]}) => {
    return ( 
        <>
            {allEducationArray.map(education=>(
                <div key={education.id}>
                    <p>{education.institucion}</p>
                </div>
            ))}
        </> 
    );
}
 
export default EducationResumeComponent;