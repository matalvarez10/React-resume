import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import CustomInputComponent from "../../style-components/mainInputComponent";

interface EditInputsProps {
  job: IExperienceData;
  handleExpResumeData: (
    event:
      | (EventTarget & HTMLInputElement)
      | (EventTarget & HTMLTextAreaElement),
    id: number
  ) => void;
}

const EditInputs: React.FC<EditInputsProps> = ({
  job,
  handleExpResumeData,
}) => {
  return (
    <>
      <CustomInputComponent
        labelText="HOLA"
        placeholder=""
        type="text"
        name="posicion"
        value={job.posicion}
        onChange={(event) => {
          const value = event.target;
          handleExpResumeData(value, job.id);
        }}
      />
      <CustomInputComponent
        labelText="HOLA"
        placeholder=""
        type="text"
        name="companyName"
        value={job.companyName}
        onChange={(event) => {
          const value = event.target;
          handleExpResumeData(value, job.id);
        }}
      />
      <CustomInputComponent
        labelText="HOLA"
        placeholder=""
        type="text"
        name="lugar"
        value={job.lugar}
        onChange={(event) => {
          const value = event.target;
          handleExpResumeData(value, job.id);
        }}
      />
      <CustomInputComponent
        labelText="HOLA"
        placeholder=""
        type="date"
        name="fechaInicio"
        value={job.fechaInicio}
        onChange={(event) => {
          const value = event.target;
          handleExpResumeData(value, job.id);
        }}
      />
      <CustomInputComponent
        labelText="HOLA"
        placeholder=""
        type="date"
        name="fechaTermino"
        value={job.fechaTermino}
        onChange={(event) => {
          const value = event.target;
          handleExpResumeData(value, job.id);
        }}
      />
      <textarea
        name="description"
        value={job.description}
        onChange={(event) => {
          const value = event.target;
          handleExpResumeData(value, job.id);
        }}
      />
    </>
  );
};

export default EditInputs;
