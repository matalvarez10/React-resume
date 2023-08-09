import { ISkillsData } from "../../../interfaces/inputSkills.interface";
import { EditDataHandler } from "../all-inputs-components/listInputsComponent";
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
    <>
      <input
        type="text"
        name="skillName"
        onChange={(event) => {
          const value = event.target;
          handleChange(value, skill.id);
        }}
        value={skill.skillName}
      />
      <select
        name="skillLevel"
        onChange={(event) => {
          const value = event.target;
          handleChange(value, skill.id);
        }}
        value={skill.skillLevel}
      >
        <option value="" disabled>
          Select an Option
        </option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Expert">Expert</option>
      </select>
    </>
  );
};

export default EditSkillsInputs;
