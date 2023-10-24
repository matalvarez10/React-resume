import { InputExperienceData } from "../../../interfaces/inputExperience.interface";
import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { ChangeEvent, useState,FormEventHandler } from "react";
import CustomInputComponent from "../../input-style-components/mainInputComponent";
import TextHeaderComponent from "../../input-style-components/textHeaderComponent";

const InputsExperienceComponent: React.FC<InputExperienceData> = ({
  handleClickExp,
}) => {
  const [expData, setExpData] = useState<IExperienceData>(initialValues);
  const handleExpData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpData({ ...expData, [name]: value });
  };

  const handleExpDataTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setExpData({ ...expData, [name]: value });
  };
  const onSubmit:FormEventHandler<HTMLFormElement> = (event) =>{
    event.preventDefault();
    initialExperienceId++;
    handleClickExp(expData);
    setExpData(initialValues);
  }

  return (
    <section>
      <TextHeaderComponent title="Job Experience" />
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CustomInputComponent
            labelText="Role"
            placeholder="Role"
            type="text"
            name="posicion"
            required
            value={expData.posicion}
            onChange={handleExpData}
          />
          <CustomInputComponent
            labelText="Company Name"
            placeholder="Company Name"
            type="text"
            name="companyName"
            required
            value={expData.companyName}
            onChange={handleExpData}
          />
          <CustomInputComponent
            labelText="Location"
            placeholder="Place"
            type="text"
            name="lugar"
            required
            value={expData.lugar}
            onChange={handleExpData}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <CustomInputComponent
            labelText="Start Date"
            placeholder=""
            type="date"
            name="fechaInicio"
            required
            value={expData.fechaInicio}
            onChange={handleExpData}
          />
          <CustomInputComponent
            labelText="End date"
            placeholder=""
            type="date"
            name="fechaTermino"
            required
            value={expData.fechaTermino}
            onChange={handleExpData}
          />
        </div>
        <label className="font-lato font-light">
          <p>Job Description</p>
          <textarea
            className="textarea-custom"
            name="description"
            required
            value={expData.description}
            onChange={handleExpDataTextarea}
          />
        </label>
        <button
          className="btn-blue"
          type="submit"
        >
          ADD TO RESUME
        </button>
      </form>
    </section>
  );
};

let initialValues = {
  id: 0,
  posicion: "",
  companyName: "",
  lugar: "",
  fechaInicio: "",
  fechaTermino: "",
  description: "",
};
export let initialExperienceId = 0;
export default InputsExperienceComponent;
