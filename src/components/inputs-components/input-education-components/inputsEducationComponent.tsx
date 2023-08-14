import { IEducationData } from "../../../interfaces/inputEducation.interface";
import { useState, ChangeEvent,FormEventHandler } from "react";
import CustomInputComponent from "../../input-style-components/mainInputComponent";
import TextHeaderComponent from "../../input-style-components/textHeaderComponent";

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

  const onSubmit:FormEventHandler<HTMLFormElement> = (event) =>{
    event.preventDefault();
    initialEducationId++;
    handleAddEducation(educationData);
    setEducationData(initialEducationValues);
  }
  
  return (
    <>
      <TextHeaderComponent title="Courses/Education"/>
      <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4"> 
        <CustomInputComponent
          placeholder="Course Studied"
          labelText="Course Studied"
          type="text"
          name="courseStudied"
          required
          value={educationData.courseStudied}
          onChange={handleEducationData}
        />
        <CustomInputComponent
          placeholder="Educational Institution"
          labelText="Educational Institution"
          type="text"
          name="institucion"
          required
          value={educationData.institucion}
          onChange={handleEducationData}
        />
        <CustomInputComponent
          placeholder=""
          labelText="Fecha Inicio"
          type="date"
          name="fechaInicio"
          required
          value={educationData.fechaInicio}
          onChange={handleEducationData}
        />
        <CustomInputComponent
          placeholder=""
          labelText="Fecha Termino"
          type="date"
          name="fechaTermino"
          required
          value={educationData.fechaTermino}
          onChange={handleEducationData}
        />
        <button
          className="btn-blue col-span-2"
          type="submit"
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
