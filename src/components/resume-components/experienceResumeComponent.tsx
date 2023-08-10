import { IExperienceData } from "../../interfaces/inputExperience.interface";
import IndividualExperienceComponent from "./individualExperienceComponent";
import CustomSectionHeader from "../resume-style-components/sectionHeader";
const ExperienceResumeComponent = ({
  allJobsArray,
}: {
  allJobsArray: IExperienceData[];
}) => {

  return (
    <>
        <CustomSectionHeader titulo="Work Experience"/>
          <div className="flex flex-col gap-4">
          {allJobsArray.map((job) => (
            <IndividualExperienceComponent key={job.id} job={job} />
          ))}
        </div>
    </>
  );
};

export default ExperienceResumeComponent;
