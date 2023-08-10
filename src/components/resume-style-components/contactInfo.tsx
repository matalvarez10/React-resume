
interface CustomContactInfoProps {
  datos: string;
  Icon: () => JSX.Element;
}

const CustomContactInfo: React.FC<CustomContactInfoProps> = ({
  datos,
  Icon,
}) => {
  return (
    <div className="flex flex-row gap-2 items-center">
        <div className="h-6 text-xs rounded-full bg-blue-500 aspect-square flex items-center justify-center text-white">
            <Icon />
        </div>
        <span className="break-all text-[#333132] text-xs font-lato font-light">{datos}</span>

    </div>
  );
};

export default CustomContactInfo;
