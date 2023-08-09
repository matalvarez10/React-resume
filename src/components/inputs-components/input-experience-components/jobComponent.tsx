import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { IEducationData } from "../../../interfaces/inputEducation.interface";
import { useState } from "react";
import { EditDataHandler } from "./allJobsComponent";
import { FaTrashCan, FaFilePen } from "react-icons/fa6";
import EditAllInputs from "../../allEditInputs";

interface JobComponentProps {
  job: IExperienceData | IEducationData;
  handleDeleteJob: (id: number) => void;
  handleExpResumeData:EditDataHandler;
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
        <p>TITULO VA ACA</p>
        <div className="flex flex-row gap-5">
          <button onClick={() => handleDeleteJob(job.id)}>
            <FaTrashCan />
          </button>
          <button
            onClick={() => {
              setToggleEdit(!toggleEdit);
            }}
          >
            <FaFilePen />
          </button>
        </div>
      </div>
      {toggleEdit && (
        <EditAllInputs job={job} handleExpResumeData={handleExpResumeData} />
      )}
    </>
  );
};

export default JobComponent;
