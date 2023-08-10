export interface InputChildrenComponent {
  children: React.ReactNode;
}

const InputsFieldComponent: React.FC<InputChildrenComponent> = ({
  children,
}) => {
  return <section className= "w-full h-full overflow-auto px-32 py-12 lg:w-[45%]">
    {children}
  </section>;
};

export default InputsFieldComponent;
