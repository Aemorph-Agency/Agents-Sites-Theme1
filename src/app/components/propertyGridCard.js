import Image from "next/image";

const PropertyGridCard=(props)=>{
    return(
        <div className="condos-grid-box h-[424px] relative flex items-end justify-center p-3">
        <Image src={props.propImage} alt="" className="absolute left-0 top-0 w-full h-full"/>
        <div className=" rounded-[10px] details px-[30px] py-[25px] text-left w-full">
            <div className="condo-name text-2xl font-bold -tracking-[0.48px] text-white">{props.propName}</div>
            <div className="condo-price text-base font-medium -tracking-[0.32px] text-white">{props.propPrice}</div>
        </div>
    </div> 
    )
}
export default PropertyGridCard;