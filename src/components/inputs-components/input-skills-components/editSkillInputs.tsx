import { ISkillsData } from "../../../interfaces/inputSkills.interface";
import { EditDataHandler } from "../all-inputs-components/listInputsComponent";
import CustomInputComponent from "../../style-components/mainInputComponent";
import CustomSelectComponent from "../../style-components/selectComponent";
interface EditSkillsInterface {
  skill: ISkillsData;
  handleEditSkill: EditDataHandler;
}

const EditSkillsInputs: React.FC<EditSkillsInterface> = ({
  skill,
  handleEditSkill,
}) => {
  const handleChange = (
    event: EventTarget & (HTMLInputElement | HTMLSelectElement),
    id: number
  ) => {
    handleEditSkill(event as EventTarget & HTMLInputElement, id);
  };
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <CustomInputComponent
        labelText="Edit Skill"
        placeholder=""
        type="text"
        name="skillName"
        onChange={(event) => {
          const value = event.target;
          handleChange(value, skill.id);
        }}
        value={skill.skillName}
      />
      <CustomSelectComponent
        labelText="Edit proficiency level"
        name="skillLevel"
        onChange={(event) => {
          const value = event.target;
          handleChange(value, skill.id);
        }}
        value={skill.skillLevel}
      />
    </div>
  );
};

export default EditSkillsInputs;
