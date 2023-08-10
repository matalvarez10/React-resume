import { IEducationData } from "../../interfaces/inputEducation.interface";

const IndividualEducationComponent = ({
  education,
}: {
  education: IEducationData;
}) => {
  const fechaInicio = new Date(education.fechaInicio).getFullYear();
  const fechaTermino = new Date(education.fechaTermino).getFullYear();
  return (
    <div className="flex flex-col text-[#323b4c] break-all font-lato">
      <p className="text-sm font-bold">{education.courseStudied}</p>
      <p className="text-xs font-bold">{education.institucion}</p>
      <p className="text-xs">{fechaInicio} - {fechaTermino}</p>
    </div>
  );
};

export default IndividualEducationComponent;
