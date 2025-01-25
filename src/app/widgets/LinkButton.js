const LinkButton=(props)=>{
    return(
        <a href={props.buttonlink} className={`${buttonSize(props.size)} ${props.color} flex items-center justify-center bg-btn100 rounded-full w-auto`}>{props.text}</a>
    )
}
export default LinkButton;


function buttonSize(size){
    if(size == "sm"){
        return " text-sm min-h-[48px] px-[24px]"
    }
    return;
}