const CustomSectionHeader = ({titulo}:{titulo:string}) => {
    return (  
        <>
            <p className="text-base font-raleway text-blue-500 font-bold indent-1">{"> "+ titulo}</p>
            <hr className="w-full h-[2px] bg-blue-500"/>
        </>
    );
}
 
export default CustomSectionHeader;