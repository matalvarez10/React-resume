import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { IEducationData } from "../../../interfaces/inputEducation.interface";
import { ISkillsData } from "../../../interfaces/inputSkills.interface";
import ElementComponent from "./elementComponent";

export type EditDataHandler = (
  | ((event: EventTarget & HTMLInputElement, id: number) => void)
  | ((event: EventTarget & HTMLInputElement | EventTarget & HTMLTextAreaElement, id: number) => void)
  | ((event: (EventTarget & HTMLInputElement) | (EventTarget & HTMLSelectElement), id: number) => void)
);


interface AllListComponentProps {
  allElementsArray: (IExperienceData | IEducationData | ISkillsData)[];
  handleDeleteElement: (id: number) => void;
  handleEditElement: EditDataHandler;
}

const ListInputsComponent: React.FC<AllListComponentProps> = ({
  allElementsArray: allElementsArray,
  handleDeleteElement: handleDeleteElement,
  handleEditElement: handleEditElement,
}) => {
  if (allElementsArray.length == 0) {
    return;
  }
  return (
    <div>
      <h3>Added Jobs</h3>
      <section className="flex flex-col gap-3">
        {allElementsArray.map((element) => (
          <ElementComponent
            key={element.id}
            element={element}
            handleDeleteElement={handleDeleteElement}
            handleEditElement={handleEditElement}
          />
        ))}
      </section>
    </div>
  );
};

export default ListInputsComponent;
