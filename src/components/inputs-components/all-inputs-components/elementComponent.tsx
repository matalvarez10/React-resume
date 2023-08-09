import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { IEducationData } from "../../../interfaces/inputEducation.interface";
import { useState } from "react";
import { EditDataHandler } from "./listInputsComponent";
import { FaTrashCan, FaFilePen } from "react-icons/fa6";
import EditAllInputs from "./handleAllEditInputs";
import { ISkillsData } from "../../../interfaces/inputSkills.interface";

interface JobComponentProps {
  element: IExperienceData | IEducationData |ISkillsData;
  handleDeleteElement: (id: number) => void;
  handleEditElement:EditDataHandler;
  title:string;
}

const ElementComponent: React.FC<JobComponentProps> = ({
  element: element,
  handleDeleteElement: handleDeleteJob,
  handleEditElement: handleExpResumeData,
  title,
}) => {
  const [toggleEdit, setToggleEdit] = useState<boolean>(false);
  return (
    <>
      <div className="m-auto flex flex-row justify-between gap-5 w-full border rounded border-blue-600 text-blue-600 p-2 hover:bg-blue-700 hover:text-white">
        <p>{title}</p>
        <div className="flex flex-row gap-5">
          <button onClick={() => handleDeleteJob(element.id)}>
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
        <EditAllInputs element={element} handleEditData={handleExpResumeData} />
      )}
    </>
  );
};

export default ElementComponent;
