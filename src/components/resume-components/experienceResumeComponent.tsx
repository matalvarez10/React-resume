import { IExperienceData } from "../../interfaces/inputExperience.interface";

const ExperienceComponent = ({allJobsArray}:{allJobsArray: IExperienceData[]}) => {
    return ( 
        <>
            {allJobsArray.map(job=>(
                <div key={job.id}>
                    <p>{job.companyName}</p>
                </div>
            ))}
        </> 
    );
}
 
export default ExperienceComponent;