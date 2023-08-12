import DescriptionComponent from "./resume-components/descriptionResumeComponent";
import { IDescriptionData } from "../interfaces/inputDesc.interface";
import ExperienceResumeComponent from "./resume-components/experienceResumeComponent";
import EducationResumeComponent from "./resume-components/educationResumeComponent";
import { IExperienceData } from "../interfaces/inputExperience.interface";
import { IEducationData } from "../interfaces/inputEducation.interface";
import { ISkillsData } from "../interfaces/inputSkills.interface";
import SkillsResumeComponent from "./resume-components/skillsResumeComponent";
import html2pdf from "html2pdf.js";


interface ResumeComponentProps {
  formData: IDescriptionData;
  allJobsArray: IExperienceData[];
  allEducationArray: IEducationData[];
  allSkillsArray: ISkillsData[];
  allLanguagesArray: ISkillsData[];
}

const ResumeComponent: React.FC<ResumeComponentProps> = ({
  formData,
  allJobsArray,
  allEducationArray,
  allSkillsArray,
  allLanguagesArray,
}) => {
  const generatePDF = () => {
    const element = document.getElementById("download-pdf");
    if (element) {
      const opt = {
        filename: "resume.pdf",
        image: { type: "jpg", quality: 1 },
        html2canvas: { scale: 2},
        jsPDF: { unit: "mm", format: [152, 165*1.41], orientation: "portrait"},
      };
      html2pdf().from(element).set(opt).save();
    }
  };
  return (
    <>
      <section className="bg-[#eaefff] w-full h-full grid grid-cols-1 justify-center items-center overflow-auto lg:w-[55%]">
        {/* RESUME CANVAS */}
        <button onClick={generatePDF}>DESCARGA</button>
        <div id="download-pdf" className="bg-white w-[567px] h-[800px] shadow-lg lg:w-[567px] lg:h-[800px] p-5 align-middle my-10 flex flex-col gap-3 m-auto">
          <DescriptionComponent formData={formData} />
          <div className="flex flex-row gap-10">
            <div className="w-[60%]">
              <ExperienceResumeComponent allJobsArray={allJobsArray} />
            </div>
            <div className="w-[35%] flex flex-col gap-1">
              <EducationResumeComponent allEducationArray={allEducationArray} />
              <SkillsResumeComponent
                allSkillsArray={allSkillsArray}
                titulo="Skills"
              />
              <SkillsResumeComponent
                allSkillsArray={allLanguagesArray}
                titulo="Languages"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeComponent;
