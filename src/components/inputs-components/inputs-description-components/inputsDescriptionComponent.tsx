import { InputDescriptionProps } from "../../../interfaces/inputDesc.interface";

const InputDescriptionComponent:React.FC<InputDescriptionProps> = ({handleData,formData}) => {
    return ( 
        <>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleData}
        />
        <input
          type="text"
          placeholder="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleData}
        />
        <input
          type="text"
          placeholder="numero"
          name="numero"
          value={formData.numero}
          onChange={handleData}
        />
        </>
     );
}
 
export default InputDescriptionComponent;