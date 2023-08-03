import { IEducationData } from "../../../interfaces/inputEducation.interface";

interface EditInputsProps {
  education: IEducationData;
  handleEducationEditData: (
    event: EventTarget & HTMLInputElement,
    id: number
  ) => void;
}

const EditEdducationInputs: React.FC<EditInputsProps> = ({
  education,
  handleEducationEditData,
}) => {
  return (
    <>
      <input
        type="text"
        name="courseStudied"
        value={education.courseStudied}
        onChange={(event) => {
          const value = event.target;
          handleEducationEditData(value, education.id);
        }}
      />
      <input
        type="text"
        name="institucion"
        value={education.institucion}
        onChange={(event) => {
          const value = event.target;
          handleEducationEditData(value, education.id);
        }}
      />
      <input
        type="date"
        name="fechaInicio"
        value={education.fechaInicio}
        onChange={(event) => {
          const value = event.target;
          handleEducationEditData(value, education.id);
        }}
      />
      <input
        type="date"
        name="fechaTermino"
        value={education.fechaTermino}
        onChange={(event) => {
          const value = event.target;
          handleEducationEditData(value, education.id);
        }}
      />
    </>
  );
};

export default EditEdducationInputs;
