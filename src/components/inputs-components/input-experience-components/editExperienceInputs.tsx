import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import CustomInputComponent from "../../input-style-components/mainInputComponent";
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
        labelText="Edit Role"
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
        labelText="Edit Company Name"
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
        labelText="Edit Location"
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
        labelText="Edit Start Date "
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
        labelText="Edit End Date"
        placeholder=""
        type="date"
        name="fechaTermino"
        value={job.fechaTermino}
        onChange={(event) => {
          const value = event.target;
          handleChange(value, job.id);
        }}
      />
      <label htmlFor="description" className="font-lato font-light">
        <p>Edit Job Description</p>
        <textarea
        className="textarea-custom"
          name="description"
          value={job.description}
          onChange={(event) => {
            const value = event.target ;
            handleChange(value , job.id);
          }}
        />
      </label>
    </>
  );
};

export default EditExperienceInputs;
