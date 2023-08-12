export interface InputChildrenComponent {
  children: React.ReactNode;
}

const InputsFieldComponent: React.FC<InputChildrenComponent> = ({
  children,
}) => {
  return <section className= "w-full h-full overflow-auto px-6 py-12 lg:w-[45%] 2xl:px-32">
    {children}
  </section>;
};

export default InputsFieldComponent;
