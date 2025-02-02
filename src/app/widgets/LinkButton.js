import Icons from "../components/icons";

const LinkButton=(props)=>{
    return(
        UseButton(props)
    )
}
export default LinkButton;

function UseButton(props){  
    if(props.icon){
        return ButtonWithIcon(props);
    }else{
        return SimpleButton(props);
    }

}

const SimpleButton=(props)=>{
    return(
        <a href={props.buttonlink} className={`${buttonSize(props.size)} ${props.color} ${props.borderRadiusClass} w-fit flex items-center justify-center bg-btn100`}>
            {props.text}
        </a>
    )
}


const ButtonWithIcon=(props)=>{
    return(
        <a href={props.buttonlink} className={`${buttonSize(props.size)} ${props.color} ${props.borderRadiusClass} w-fit flex items-center justify-center bg-btn100`}>
            <div className="flex gap-[14px] items-center justify-center">
            {props.text}
            {props.icon && <Icons iconName={props.icon} />}
            </div>
    </a>
    )
}

function buttonSize(size){
    if(size == "sm"){
        return " text-sm min-h-[48px] px-[24px]"
    }else if(size == "md"){
         return " text-base min-h-[56px] px-[28px]"
    }else{
        return;
    }
    return;
}