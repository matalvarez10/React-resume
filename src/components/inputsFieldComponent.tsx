import { FaSheetPlastic } from "react-icons/fa6";
export interface InputChildrenComponent {
  children: React.ReactNode;
}

const InputsFieldComponent: React.FC<InputChildrenComponent> = ({
  children,
}) => {
  return <section className= "w-full h-full overflow-auto px-6 py-12 lg:w-[45%] 2xl:px-32">
    <h1 className="flex flex-row gap-2 justify-center items-center mb-3 text-blue-900 font-raleway font-black text-4xl text-center"><span><FaSheetPlastic/></span>Resume Builder</h1>
    {children}
  </section>;
};

export default InputsFieldComponent;
