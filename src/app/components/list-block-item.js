import Icons from "./icons";

const GridItem=(props)=>{
    return(
        <div className="rounded-[20px] py-[35px] px-[40px] flex  flex-col justify-center bg-clr700 relative group cursor-pointer">
            <p className="text-black text-xl font-medium leading-normal -tracking-[0.2px] mb-[10px]">{props.title}</p>
            <p className="font-base text-black opacity-[0.40] font-medium -tracking-[0.16px]">{props.subtitle}</p>
            <div className="absolute top-1/2 -translate-y-1/2 opacity-0 right-[40px] group-hover:opacity-100 transition duration-300 ease-in-out">
                <Icons iconName="chevright"/>
            </div>
        </div>
    )
}
export default GridItem;