import { useState } from "react";
import { IEducationData } from "../../../interfaces/inputEducation.interface";
import EditEdducationInputs from "./editEducationInputs";
interface EducationComponentProps {
  education: IEducationData;
  handleDeleteEducation: (id: number) => void;
  handleEducationEditData: (
    event: EventTarget & HTMLInputElement,
    id: number
  ) => void;
}

const EducationComponent: React.FC<EducationComponentProps> = ({
  education,
  handleDeleteEducation,
  handleEducationEditData,
}) => {
  const [toggleEdit, setToggleEdit] = useState<boolean>(false);
  return (
    <>
      <p>{education.institucion}</p>
      <button onClick={() => handleDeleteEducation(education.id)}>
        DELETE
      </button>
      <button
        onClick={() => {
          setToggleEdit(!toggleEdit);
        }}
      >
        EDIT
      </button>
      {toggleEdit && (
        <EditEdducationInputs
          education={education}
          handleEducationEditData={handleEducationEditData}
        ></EditEdducationInputs>
      )}
    </>
  );
};

export default EducationComponent;
