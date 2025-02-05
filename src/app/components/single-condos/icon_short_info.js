const { default: Icons } = require("../icons")

const Icon_numberInfos=({icon, title, content})=>{
    return(
        <div className="flex flex-col justify-start gap-2 rounded-[4px] items-start">
            <div className="p-3 units-icon">
                <Icons iconName={icon}/>
            </div>
            <p className="text-clr1100 text-[13px] font-normal m-0">{title}</p>
            <p className="text-black text-base font-normal -tracking-[0.16px] leading-[140%] m-0">{content}</p>

        </div>
    )
}


export default Icon_numberInfos;