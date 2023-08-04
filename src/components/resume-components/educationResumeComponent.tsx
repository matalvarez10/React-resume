import { IEducationData } from "../../interfaces/inputEducation.interface";

const EducationResumeComponent = ({allEducationArray}:{allEducationArray: IEducationData[]}) => {
    return ( 
        <>
            {allEducationArray.map(education=>(
                <div key={education.id} className="flex ">
                    <p className="text-red-500 bg-slate-600 hover:bg-zinc-950 uppercase ">{education.institucion}</p>
                </div>
            ))}
        </> 
    );
}
 
export default EducationResumeComponent;