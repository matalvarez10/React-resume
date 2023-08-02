import { IExperienceData } from "../../../interfaces/inputExperience.interface";
interface EditInputsProps{
    job: IExperienceData;
    handleExpResumeData: (event: (EventTarget & HTMLInputElement) | (EventTarget & HTMLTextAreaElement), id: number) => void;

}

const EditInputs:React.FC<EditInputsProps> = ({job,handleExpResumeData}) => {
    return ( 
    <>
        <input
          type="text"
          name="posicion"
          value={job.posicion}
          onChange={(event) => {
            const value = event.target;
            handleExpResumeData(value, job.id);
          }}
        />
        <input
          type="text"
          name="companyName"
          value={job.companyName}
          onChange={(event) => {
            const value = event.target;
            handleExpResumeData(value, job.id);
          }}
        />
        <input
          type="text"
          name="lugar"
          value={job.lugar}
          onChange={(event) => {
            const value = event.target;
            handleExpResumeData(value, job.id);
          }}
        />
        <input
          type="date"
          name="fechaInicio"
          value={job.fechaInicio}
          onChange={(event) => {
            const value = event.target;
            handleExpResumeData(value, job.id);
          }}
        />
        <input
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
}
 
export default EditInputs;