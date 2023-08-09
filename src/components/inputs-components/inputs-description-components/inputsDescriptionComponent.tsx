import { InputDescriptionProps } from "../../../interfaces/inputDesc.interface";
import CustomInputComponent from "../../style-components/mainInputComponent";
import TextHeaderComponent from "../../style-components/textHeaderComponent";

const InputDescriptionComponent: React.FC<InputDescriptionProps> = ({
  handleData,
  formData,
  handleTextAreaInput,
}) => {
  return (
    <section className="flex flex-col gap-5 p-0 ">
      <TextHeaderComponent title="Datos Personales" />
      <div className="grid grid-cols-2 gap-4">
        <CustomInputComponent
         labelText="First Name"
          type="text"
          placeholder="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Last Name"
          type="text"
          placeholder="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Phone Number"
          type="text"
          placeholder="numero"
          name="numero"
          value={formData.numero}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Email"
          type="text"
          placeholder="correo"
          name="correo"
          value={formData.correo}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Website"
          type="text"
          placeholder="sitioWeb"
          name="sitioWeb"
          value={formData.sitioWeb}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Location"
          type="text"
          placeholder="ubicacion"
          name="ubicacion"
          value={formData.ubicacion}
          onChange={handleData}
        />
              </div>
        <CustomInputComponent
          labelText="Occupation"
          type="text"
          placeholder="occupation"
          name="cargo"
          value={formData.cargo}
          onChange={handleData}
        />
        <label htmlFor="about" >
          <p className="font-lato font-light ">Brief description about yourself</p>
          <textarea
          className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40"
            name="about"
            value={formData.about}
            onChange={handleTextAreaInput}
          />
        </label>

    </section>
  );
};

export default InputDescriptionComponent;
