import { IEducationData } from "../../../interfaces/inputEducation.interface";
import CustomInputComponent from "../../input-style-components/mainInputComponent";
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
    <div className="grid grid-cols-2 gap-4" >
      <CustomInputComponent
        labelText="Edit Course Studied"
        placeholder=""
        type="text"
        name="courseStudied"
        value={education.courseStudied}
        onChange={(event) => {
          const value = event.target;
          handleEducationEditData(value, education.id);
        }}
      />
      <CustomInputComponent
        labelText="Edit Educational Institution"
        placeholder=""
        type="text"
        name="institucion"
        value={education.institucion}
        onChange={(event) => {
          const value = event.target;
          handleEducationEditData(value, education.id);
        }}
      />
      <CustomInputComponent
        labelText="Edit Start Date"
        placeholder=""
        type="date"
        name="fechaInicio"
        value={education.fechaInicio}
        onChange={(event) => {
          const value = event.target;
          handleEducationEditData(value, education.id);
        }}
      />
      <CustomInputComponent
        labelText="Edit End Date"
        placeholder=""
        type="date"
        name="fechaTermino"
        value={education.fechaTermino}
        onChange={(event) => {
          const value = event.target;
          handleEducationEditData(value, education.id);
        }}
      />
    </div>
  );
};

export default EditEdducationInputs;
