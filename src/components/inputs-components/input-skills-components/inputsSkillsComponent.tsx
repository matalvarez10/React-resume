import  { useState, ChangeEvent } from "react";
import { ISkillsData } from "../../../interfaces/inputSkills.interface";
import TextHeaderComponent from "../../style-components/textHeaderComponent";
import CustomInputComponent from "../../style-components/mainInputComponent";


const InputsSkillsComponent = ({handleAddSkill}: {handleAddSkill:(skillData: ISkillsData) => void}) => {
  const [skillsData, setSkillsData] = useState<ISkillsData>(
    initialSkillsValues
  );

  const handleSkillDataInput = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSkillsData({ ...skillsData, [name]: value });
  };


  return (
    <>
      <TextHeaderComponent title="Skills"/>
      <form>
        <CustomInputComponent
          placeholder=""
          labelText="Add a Skill"
          type="text"
          name="skillName"
          onChange={handleSkillDataInput}
          value={skillsData.skillName}
        />
        <select
          name="skillLevel"
          onChange={handleSkillDataInput}
          value={skillsData.skillLevel}
        >
          <option value="" disabled>Select an Option</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
        <button type="button"
          onClick={() => {
              initialSkillId++;
              handleAddSkill(skillsData);
            }}
        >
          SUBMIT</button>
      </form>
    </>
  );
};
export let initialSkillId = 0;

const initialSkillsValues = {
  id: 0,
  skillName: "",
  skillLevel: "",
};

export default InputsSkillsComponent;