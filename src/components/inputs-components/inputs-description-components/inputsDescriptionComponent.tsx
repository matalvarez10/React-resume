import { InputDescriptionProps } from "../../../interfaces/inputDesc.interface";
import CustomInputComponent from "../../style-components/mainInputComponent";
import TextHeaderComponent from "../../style-components/textHeaderComponent";

const InputDescriptionComponent: React.FC<InputDescriptionProps> = ({
  handleData,
  formData,
}) => {
  return (
    <section className="flex flex-col gap-5 p-0">
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
        <CustomInputComponent
          labelText="Occupation"
          type="text"
          placeholder="occupation"
          name="cargo"
          value={formData.cargo}
          onChange={handleData}
        />
        <CustomInputComponent
          labelText="About you"
          type="text"
          placeholder="about"
          name="about"
          value={formData.about}
          onChange={handleData}
        />
      </div>
    </section>
  );
};

export default InputDescriptionComponent;
