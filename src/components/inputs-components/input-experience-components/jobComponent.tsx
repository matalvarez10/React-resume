import EditInputs from "./editInputsComponent";
import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { useState } from "react";
import { FaTrashCan,FaFilePen } from "react-icons/fa6";
interface JobComponentProps {
  job: IExperienceData;
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
      <div className="m-auto flex flex-row justify-between gap-5 w-full border rounded border-blue-600 text-blue-600 p-2 hover:bg-blue-700 hover:text-white">
        <p>{job.companyName}</p>
        <div className="flex flex-row gap-5">
          <button onClick={() => handleDeleteJob(job.id)}><FaTrashCan/></button>
          <button
            onClick={() => {
              setToggleEdit(!toggleEdit);
            }}
          >
            <FaFilePen/>
          </button>
        </div>
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
