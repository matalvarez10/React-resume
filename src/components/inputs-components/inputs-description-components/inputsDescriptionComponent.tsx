import { InputDescriptionProps } from "../../../interfaces/inputDesc.interface";
import CustomInputComponent from "../../input-style-components/mainInputComponent";
import TextHeaderComponent from "../../input-style-components/textHeaderComponent";

const InputDescriptionComponent: React.FC<InputDescriptionProps> = ({
  handleData,
  formData,
  handleTextAreaInput,
}) => {
  return (
    <section className="flex flex-col p-0 ">
      <TextHeaderComponent title="Datos Personales" />
      <div className="grid grid-cols-2 gap-4">
        <CustomInputComponent
         labelText="First Name"
          type="text"
          placeholder="First Name"
          name="nombre"
          value={formData.nombre}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Last Name"
          type="text"
          placeholder="Last Name"
          name="apellido"
          value={formData.apellido}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Phone Number"
          type="text"
          placeholder="Phone Number"
          name="numero"
          value={formData.numero}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Email"
          type="text"
          placeholder="Email"
          name="correo"
          value={formData.correo}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Website"
          type="text"
          placeholder="Website"
          name="sitioWeb"
          value={formData.sitioWeb}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="Location"
          type="text"
          placeholder="Adress"
          name="ubicacion"
          value={formData.ubicacion}
          onChange={handleData}
        />
              </div>
        <CustomInputComponent
          labelText="Occupation"
          type="text"
          placeholder="Occupation"
          name="cargo"
          value={formData.cargo}
          onChange={handleData}
        />
        <label htmlFor="about" >
          <p className="font-lato font-light ">Brief description about yourself</p>
          <textarea
          className="textarea-custom"
            name="about"
            value={formData.about}
            onChange={handleTextAreaInput}
          />
        </label>

    </section>
  );
};

export default InputDescriptionComponent;
