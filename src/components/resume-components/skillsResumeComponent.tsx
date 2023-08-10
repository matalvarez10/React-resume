import { ISkillsData } from "../../interfaces/inputSkills.interface";
import CustomSectionHeader from "../resume-style-components/sectionHeader";
const SkillsResumeComponent = ({
  allSkillsArray,
  titulo,
}: {
  allSkillsArray: ISkillsData[];
  titulo: string;
}) => {
  return (
    <>
      <CustomSectionHeader titulo={titulo} />
      <ul className="list-disc marker:text-blue-500 marker:text-xs text-xs">
        {allSkillsArray.map((skill) => (
          <li key={skill.id} className="list-inside">
            {skill.skillName} - <span className="font-bold">{skill.skillLevel}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SkillsResumeComponent;
