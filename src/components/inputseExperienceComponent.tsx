import { InputExperienceData } from "../interfaces/inputExperience.interface";

const InputsExperience:React.FC<InputExperienceData> = ({expData,handleExpData,handleExpDataTextarea}) => {
    return ( 
        <div>
            <input type="text" name="posicion"  value={expData.posicion} onChange={handleExpData}/>
            <input type="text" name="companyName" value={expData.companyName}  onChange={handleExpData}/>
            <input type="text" name="lugar"  value={expData.lugar} onChange={handleExpData}/>
            <input type="date" name="fechaInicio"  value={expData.fechaInicio} onChange={handleExpData}/>
            <input type="date" name="fechaTermino"  value={expData.fechaTermino} onChange={handleExpData}/>
            <input  name="fechaTermino"  value={expData.fechaTermino} onChange={handleExpData}/>
            <textarea  name= "description" value={expData.description} onChange={handleExpDataTextarea} />
            <button onClick={()=>{console.log("holakks")}}>SUBMIT</button>
        </div>
    );
}
 
export default InputsExperience;