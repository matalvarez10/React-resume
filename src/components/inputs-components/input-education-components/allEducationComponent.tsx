import { IEducationData } from "../../../interfaces/inputEducation.interface";
import EducationComponent from "./educationComponent";
interface AllEducationProps {
  allEducationArray: IEducationData[];
  handleDeleteEducation: (id: number) => void;
  handleEducationEditData: (
    event: EventTarget & HTMLInputElement  ,
    id: number
  ) => void;
}

const AllEducationComponent: React.FC<AllEducationProps> = ({
  allEducationArray,
  handleDeleteEducation,
  handleEducationEditData,
}) => {
  if (allEducationArray.length == 0) {
    return;
  }
  return (
    <>
      {allEducationArray.map((education)=>(
        <EducationComponent
        key={education.id}
        education={education}
        handleDeleteEducation={handleDeleteEducation}
        handleEducationEditData={handleEducationEditData}
        />
      ))}
    </>
  );
};

export default AllEducationComponent;
