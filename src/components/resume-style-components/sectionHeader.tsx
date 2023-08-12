const CustomSectionHeader = ({titulo}:{titulo:string}) => {
    return (  
        <div> {/* Had to use a div so the gap doesnt affect the hr component */}
            <p className="text-base font-raleway text-blue-500 font-bold indent-1 mb-1">{"> "+ titulo}</p>
            <hr className="w-full h-[2px] bg-blue-500"/>
        </div>
    );
}
 
export default CustomSectionHeader;