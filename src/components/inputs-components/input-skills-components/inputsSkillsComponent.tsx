import { useState, ChangeEvent,FormEventHandler} from "react";
import { ISkillsData } from "../../../interfaces/inputSkills.interface";
import TextHeaderComponent from "../../input-style-components/textHeaderComponent";
import CustomInputComponent from "../../input-style-components/mainInputComponent";
import CustomSelectComponent from "../../input-style-components/selectComponent";

const InputsSkillsComponent = ({
  handleAddSkill,
  title,
}: {
  handleAddSkill: (skillData: ISkillsData) => void;
  title: string;
}) => {
  const [skillsData, setSkillsData] =
    useState<ISkillsData>(initialSkillsValues);

  const handleSkillDataInput = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setSkillsData({ ...skillsData, [name]: value });
  };

  const onSubmit:FormEventHandler<HTMLFormElement> = (event) =>{
    event.preventDefault();
    initialSkillId++;
    handleAddSkill(skillsData);
    setSkillsData(initialSkillsValues);
  }


  return (
    <>
      <TextHeaderComponent title={title} />
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <CustomInputComponent
            placeholder=""
            labelText={`Add a ${title.slice(0, -1)}`}
            type="text"
            name="skillName"
            onChange={handleSkillDataInput}
            value={skillsData.skillName}
            required
          />
          <CustomSelectComponent
            labelText="Profficiency level"
            name="skillLevel"
            onChange={handleSkillDataInput}
            value={skillsData.skillLevel}
            required
          />
        </div>
        <button
          type="submit"
          className="btn-blue"
        >
          ADD TO RESUME
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
