import DescriptionComponent from "./resume-components/descriptionResumeComponent";
import { IDescriptionData } from "../interfaces/inputDesc.interface";
import ExperienceResumeComponent from "./resume-components/experienceResumeComponent";
import EducationResumeComponent from "./resume-components/educationResumeComponent";
import { IExperienceData } from "../interfaces/inputExperience.interface";
import { IEducationData } from "../interfaces/inputEducation.interface";
import { ISkillsData } from "../interfaces/inputSkills.interface";
import SkillsResumeComponent from "./resume-components/skillsResumeComponent";
import html2pdf from "html2pdf.js";
import { FaDownload } from "react-icons/fa6";


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
        jsPDF: { unit: "mm", format: [151, 233], orientation: "portrait"},
      };
      html2pdf().from(element).set(opt).save();
    }
  };
  return (
    <>
<section className="bg-[#eaefff] w-full h-full grid grid-cols-1 gap-2 overflow-auto lg:w-[55%] relative">
  {/* RESUME CANVAS */}
  <div id="download-pdf" className="mt-5 mx-auto bg-white w-[567px] shadow-lg lg:w-[567px] lg:h-[800px] p-5 flex flex-col gap-3">
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
  <button onClick={generatePDF} className="fixed bottom-8 right-8 bg-blue-700 rounded text-white font-raleway font-bold h-12 w-[200px] flex items-center gap-5 hover:scale-110">
    <span className="h-full w-[25%] display rounded-tl rounded-bl flex justify-center items-center bg-blue-600"><FaDownload className="mb-1"/></span>
    DOWNLOAD
  </button>
</section>

    </>
  );
};

export default ResumeComponent;
