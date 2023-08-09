import { useState, ChangeEvent } from "react";
import { ISkillsData } from "../../../interfaces/inputSkills.interface";
import TextHeaderComponent from "../../style-components/textHeaderComponent";
import CustomInputComponent from "../../style-components/mainInputComponent";

const InputsSkillsComponent = ({
  handleAddSkill,
}: {
  handleAddSkill: (skillData: ISkillsData) => void;
}) => {
  const [skillsData, setSkillsData] =
    useState<ISkillsData>(initialSkillsValues);

  const handleSkillDataInput = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setSkillsData({ ...skillsData, [name]: value });
  };

  return (
    <>
      <TextHeaderComponent title="Skills" />
      <form >
        <div className="grid grid-cols-2 gap-4">
          <CustomInputComponent
            placeholder=""
            labelText="Add a Skill"
            type="text"
            name="skillName"
            onChange={handleSkillDataInput}
            value={skillsData.skillName}
          />
          <label className="font-lato font-light">
            <p>Profficiency level </p>
            <select
            className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="skillLevel"
              onChange={handleSkillDataInput}
              value={skillsData.skillLevel}
            >
              <option value="" disabled>
                Select an Option
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </label>
        </div>
        <button
          type="button"
          className="btn-blue"
          onClick={() => {
            initialSkillId++;
            handleAddSkill(skillsData);
          }}
        >
          SUBMIT
        </button>
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
