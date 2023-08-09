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
  listTitle: string;
}

const ListInputsComponent: React.FC<AllListComponentProps> = ({
  allElementsArray,
  handleDeleteElement,
  handleEditElement,
  listTitle,

}) => {
  if (allElementsArray.length == 0) {
    return;
  }

  return (
    <div>
      <h1 className="font-raleway font-bold text-blue-500 text-center">Added {listTitle}</h1>
      <section className="flex flex-col gap-3">
        {allElementsArray.map((element) => (
          <ElementComponent
            key={element.id}
            element={element}
            handleDeleteElement={handleDeleteElement}
            handleEditElement={handleEditElement}
            title={"posicion" in element ? element.companyName : 
                  "institucion" in element ? element.institucion :
                  "skillLevel" in element ? element.skillName :
                   'Error'}
          />
        ))}
      </section>
    </div>
  );
};

export default ListInputsComponent;
