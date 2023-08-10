import { IExperienceData } from "../../interfaces/inputExperience.interface";
const IndividualExperienceComponent = ({ job }: { job: IExperienceData }) => {
  console.log(job.fechaInicio);
  let fecha1 = new Date(job.fechaInicio);
  fecha1.setDate(fecha1.getMonth() + 1);
  let fecha2 = new Date(job.fechaTermino);
  fecha1.setDate(fecha2.getMonth() + 1);
  const finalDate1 = `${fecha1
    .toLocaleString("en-US", { month: "long" })
    .slice(0, 3)} ${fecha1.getFullYear()}`;
  const finalDate2 = `${fecha2
    .toLocaleString("en-US", { month: "long" })
    .slice(0, 3)} ${fecha2.getFullYear()}`;
  return (
    <section className="break-all font-lato">
      <div className="flex flex-row justify-between text-sm font-light text-[#323b4c]">
        <p >{job.posicion}</p>
        <p >
          {finalDate1}-{finalDate2}
        </p>
      </div>
      <p className="text-[#323b4c] font-bold text-sm">{job.companyName} l {job.lugar}</p>
      <p className="text-[#737373] text-xs">{job.description}</p>
    </section>
  );
};

export default IndividualExperienceComponent;
