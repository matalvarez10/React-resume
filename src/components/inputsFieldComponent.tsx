export interface InputChildrenComponent {
    children: React.ReactNode;
  }

const InputsFieldComponent:React.FC<InputChildrenComponent> = ({children}) => {
    return ( 
    <div className="contenedor">
        {children}    
    </div> 
    );
}

export default InputsFieldComponent;
