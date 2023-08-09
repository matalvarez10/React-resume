import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import CustomInputComponent from "../../style-components/mainInputComponent";
import { EditDataHandler } from "../all-inputs-components/listInputsComponent";
export interface EditInputsProps {
  job: IExperienceData  ;
  handleExpResumeData:EditDataHandler;
}
const EditExperienceInputs: React.FC<EditInputsProps> = ({
  job,
  handleExpResumeData,
}) => {

  const handleChange = (
    event: EventTarget & (HTMLInputElement | HTMLTextAreaElement),
    id: number
  ) => {
    handleExpResumeData(event as EventTarget & HTMLInputElement, id);
  };
  
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
          handleChange(value, job.id);
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
          handleChange(value, job.id);
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
          handleChange(value, job.id);
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
          handleChange(value, job.id);
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
          handleChange(value, job.id);
        }}
      />
      <textarea
        name="description"
        value={job.description}
        onChange={(event) => {
          const value = event.target ;
          handleChange(value , job.id);
        }}
      />
    </>
  );
};

export default EditExperienceInputs;
