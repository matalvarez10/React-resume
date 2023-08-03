import { IEducationData } from "../../../interfaces/inputEducation.interface";
import { useState, ChangeEvent } from "react";

interface InputEducationProps {
  handleAddEducation: (educacionData: IEducationData) => void;
}
const InputEducation: React.FC<InputEducationProps> = ({
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
    <form>
      <input
        type="text"
        name="courseStudied"
        value={educationData.courseStudied}
        onChange={handleEducationData}
      />
      <input
        type="text"
        name="institucion"
        value={educationData.institucion}
        onChange={handleEducationData}
      />
      <input
        type="date"
        name="fechaInicio"
        value={educationData.fechaInicio}
        onChange={handleEducationData}
      />
      <input
        type="date"
        name="fechaTermino"
        value={educationData.fechaTermino}
        onChange={handleEducationData}
      />
      <button
        type="button"
        onClick={() => {
          initialEducationId++;
          handleAddEducation(educationData);
        }}
      >
        SUBMIT
      </button>
    </form>
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
export default InputEducation;
