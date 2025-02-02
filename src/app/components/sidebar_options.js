const SidebarOptions=({choices})=>{
    return(
        <div>
          <ul className="list-none pl-0 flex flex-col gap-3">
        {choices.map((choice, index) => (
          <li key={index}>
            <a href={choice.link || "#"} className="text-sm -tracking-[0.14px] font-medium text-clr100">{choice.label}</a>
          </li>
        ))}
      </ul>
        </div>
    )
}


export default SidebarOptions