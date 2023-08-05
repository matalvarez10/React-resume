import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import JobComponent from "./jobComponent";
interface AllJobsComponentProps {
  allJobsArray: IExperienceData[] ;
  handleDeleteJob: (id: number) => void;
  handleExpResumeData: (
    event:
      | (EventTarget & HTMLInputElement)
      | (EventTarget & HTMLTextAreaElement),
    id: number
  ) => void;
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
          ></JobComponent>
        ))}
      </section>
    </div>
  );
};

export default AllJobsComponent;
