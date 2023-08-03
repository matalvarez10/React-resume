import { IEducationData } from "../../../interfaces/inputEducation.interface";
interface EducationComponentProps {
  education: IEducationData;
  handleDeleteEducation: (id: number) => void;
  handleEducationEditData: (
    event: EventTarget & HTMLInputElement,
    id: number
  ) => void;
}

const EducationComponent: React.FC<EducationComponentProps> = ({
  education,
  handleDeleteEducation,
  handleEducationEditData,
}) => {
  return (
    <>
      <p>{education.institucion}</p>
      <button onClick={()=>handleDeleteEducation(education.id)}>DELETE</button>
      <button>EDIT</button>
    </>
  );
};

export default EducationComponent;
