import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { IEducationData } from "../../../interfaces/inputEducation.interface";
import { ISkillsData } from "../../../interfaces/inputSkills.interface";
import JobComponent from "./jobComponent";

export type EditDataHandler = (
  | ((event: EventTarget & HTMLInputElement, id: number) => void)
  | ((event: EventTarget & HTMLInputElement | EventTarget & HTMLTextAreaElement, id: number) => void)
  | ((event: (EventTarget & HTMLInputElement) | (EventTarget & HTMLSelectElement), id: number) => void)
);


interface AllJobsComponentProps {
  allJobsArray: (IExperienceData | IEducationData | ISkillsData)[];
  handleDeleteJob: (id: number) => void;
  handleExpResumeData: EditDataHandler;
}

const AllJobsComponent: React.FC<AllJobsComponentProps> = ({
  allJobsArray,
  handleDeleteJob,
  handleExpResumeData,
}) => {
  if (allJobsArray.length == 0) {
    return;
  }
  return (
    <div>
      <h3>Added Jobs</h3>
      <section className="flex flex-col gap-3">
        {allJobsArray.map((job) => (
          <JobComponent
            key={job.id}
            job={job}
            handleDeleteJob={handleDeleteJob}
            handleExpResumeData={handleExpResumeData}
          />
        ))}
      </section>
    </div>
  );
};

export default AllJobsComponent;
