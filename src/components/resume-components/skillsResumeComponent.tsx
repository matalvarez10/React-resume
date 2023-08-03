import { ISkillsData } from "../../interfaces/inputSkills.interface";

const SkillsResumeComponent = ({allSkillsArray}:{allSkillsArray: ISkillsData[]}) => {
    return ( 
        <>
            {allSkillsArray.map(skill=>(
                <div key={skill.id}>
                    <p>{skill.skillLevel}</p>
                    <p>{skill.skillName}</p>
                </div>
            ))}
        </> 
    );
}
 
export default SkillsResumeComponent;