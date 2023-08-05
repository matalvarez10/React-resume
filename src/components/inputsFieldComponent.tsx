export interface InputChildrenComponent {
  children: React.ReactNode;
}

const InputsFieldComponent: React.FC<InputChildrenComponent> = ({
  children,
}) => {
  return <div className=" border-2 border-black w-6/12 h-full overflow-auto px-32 py-12">
    {children}
  </div>;
};

export default InputsFieldComponent;
