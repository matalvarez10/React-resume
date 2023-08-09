import { IEducationData } from "../../../interfaces/inputEducation.interface";
import { useState, ChangeEvent } from "react";
import CustomInputComponent from "../../style-components/mainInputComponent";
import TextHeaderComponent from "../../style-components/textHeaderComponent";

interface InputEducationProps {
  handleAddEducation: (educacionData: IEducationData) => void;
}
const InputEducationComponent: React.FC<InputEducationProps> = ({
  handleAddEducation,
}) => {
  const [educationData, setEducationData] = useState<IEducationData>(
    initialEducationValues
  );

  const handleEducationData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEducationData({ ...educationData, [name]: value });
  };
  return (
    <>
      <TextHeaderComponent title="Courses/Education"/>
      <form className="grid grid-cols-2 gap-4"> 
        <CustomInputComponent
          placeholder=""
          labelText="Course Studied"
          type="text"
          name="courseStudied"
          value={educationData.courseStudied}
          onChange={handleEducationData}
        />
        <CustomInputComponent
          placeholder=""
          labelText="Educational Institution"
          type="text"
          name="institucion"
          value={educationData.institucion}
          onChange={handleEducationData}
        />
        <CustomInputComponent
          placeholder=""
          labelText="Fecha Inicio"
          type="date"
          name="fechaInicio"
          value={educationData.fechaInicio}
          onChange={handleEducationData}
        />
        <CustomInputComponent
          placeholder=""
          labelText="Fecha Termino"
          type="date"
          name="fechaTermino"
          value={educationData.fechaTermino}
          onChange={handleEducationData}
        />
        <button
          className="btn-blue col-span-2"
          type="button"
          onClick={() => {
            initialEducationId++;
            handleAddEducation(educationData);
          }}
        >
          ADD TO RESUME
        </button>
      </form>
    </>
  );
};

let initialEducationValues = {
  id: 0,
  courseStudied: "",
  institucion: "",
  fechaInicio: "",
  fechaTermino: "",
};
export let initialEducationId = 0;
export default InputEducationComponent;
