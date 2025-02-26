import Image from "next/image";

const PropertyGridCard = ({ propImage, propName, propPrice }) => {
    return (
      <div className="condos-grid-box h-[424px] relative flex items-end justify-center p-3 rounded-[10px] overflow-hidden">
        {propImage && (
          <Image
            src={propImage}
            alt={propName || 'Condo Image'}
            className="absolute left-0 top-0 w-full h-full object-cover"
            width={424}
            height={424}
          />
        )}
        <div className="rounded-[10px] details px-[30px] py-[25px] text-left w-full bg-black bg-opacity-50">
          <div className="condo-name text-2xl font-bold -tracking-[0.48px] text-white">
            {propName}
          </div>
          <div className="condo-price text-base font-medium -tracking-[0.32px] text-white">
            {propPrice}
          </div>
        </div>
      </div>
    );
  };
  
  export default PropertyGridCard;