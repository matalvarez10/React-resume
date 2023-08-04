import EditInputs from "./editInputsComponent";
import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { useState } from "react";;
interface JobComponentProps {
  job: IExperienceData ;
  handleDeleteJob: (id: number) => void;
  handleExpResumeData: (
    event:
      | (EventTarget & HTMLInputElement)
      | (EventTarget & HTMLTextAreaElement),
    id: number
  ) => void;
}

const JobComponent: React.FC<JobComponentProps> = ({
  job,
  handleDeleteJob,
  handleExpResumeData,
}) => {
  const [toggleEdit, setToggleEdit] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-row border border-cyan-900 gap-4">
        <p>{job.companyName}</p>
        <button onClick={() => handleDeleteJob(job.id)}>DELETE</button>
        <button
          onClick={() => {
            setToggleEdit(!toggleEdit);
          }}
        >
          EDIT
        </button>
      </div>
        {toggleEdit && (
          <EditInputs
            job={job}
            handleExpResumeData={handleExpResumeData}
          ></EditInputs>
        )}
    </>

  );
};

export default JobComponent;
