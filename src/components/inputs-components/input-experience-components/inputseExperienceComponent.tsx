import { InputExperienceData } from "../../../interfaces/inputExperience.interface";
import { IExperienceData } from "../../../interfaces/inputExperience.interface";
import { ChangeEvent, useState } from "react";

const InputsExperience:React.FC<InputExperienceData> = ({handleClickExp }) => {
    const [expData, setExpData] = useState<IExperienceData>(initialValues);
      const handleExpData = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target ;
        setExpData({ ...expData, [name]: value });
      };
    
      const handleExpDataTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setExpData({ ...expData, [name]: value });
      };
      
    return ( 
        <form>
            <input type="text" name="posicion"  value={expData.posicion} onChange={handleExpData}/>
            <input type="text" name="companyName" value={expData.companyName}  onChange={handleExpData}/>
            <input type="text" name="lugar"  value={expData.lugar} onChange={handleExpData}/>
            <input type="date" name="fechaInicio"  value={expData.fechaInicio} onChange={handleExpData}/>
            <input type="date" name="fechaTermino"  value={expData.fechaTermino} onChange={handleExpData}/>
            <textarea  name= "description" value={expData.description} onChange={handleExpDataTextarea} />
            <button type="button" onClick={()=>{
              initialExperienceId++;
              handleClickExp(expData);
              setExpData(initialValues);
              }}>SUBMIT</button>
        </form>
    );
}

let initialValues= {
  id:0,
  posicion:"",
  companyName:"",
  lugar:"",
  fechaInicio:"",
  fechaTermino:"",
  description:"",
};
export let initialExperienceId = 0;
export default InputsExperience;