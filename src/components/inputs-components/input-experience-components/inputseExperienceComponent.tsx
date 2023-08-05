import { InputExperienceData } from "../../../interfaces/inputExperience.interface";
import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { ChangeEvent, useState } from "react";
import CustomInputComponent from "../../style-components/mainInputComponent";
import TextHeaderComponent from "../../style-components/textHeaderComponent";
import CustomButtonComponent from "../../style-components/customButtonComponent";

const InputsExperience: React.FC<InputExperienceData> = ({
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

  return (
    <section>
      <TextHeaderComponent title="Job Experience"/>
      <form className="grid grid-cols-2 gap-4">
        <CustomInputComponent
          labelText="Role"
          placeholder="Role"
          type="text"
          name="posicion"
          value={expData.posicion}
          onChange={handleExpData}
        />
        <CustomInputComponent
          labelText="Company Name"
          placeholder="Company Name"
          type="text"
          name="companyName"
          value={expData.companyName}
          onChange={handleExpData}
        />
        <CustomInputComponent
          labelText="Location"
          placeholder="Place"
          type="text"
          name="lugar"
          value={expData.lugar}
          onChange={handleExpData}
        />
        <CustomInputComponent
          labelText="Fecha Inicio"
          placeholder=""
          type="date"
          name="fechaInicio"
          value={expData.fechaInicio}
          onChange={handleExpData}
        />
        <CustomInputComponent
          labelText="Fecha Termino"
          placeholder=""
          type="date"
          name="fechaTermino"
          value={expData.fechaTermino}
          onChange={handleExpData}
        />
        <textarea
          className="border-red-500 border-2"
          name="description"
          value={expData.description}
          onChange={handleExpDataTextarea}
        />
        <button
        className=" border-red-500 border-2"
          type="button"
          onClick={() => {
            initialExperienceId++;
            handleClickExp(expData);
            setExpData(initialValues);
          }}
        >
          SUBMIT
        </button>
        <CustomButtonComponent/>
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
export default InputsExperience;
