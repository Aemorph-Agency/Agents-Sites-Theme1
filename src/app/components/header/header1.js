import LinkButton from "@/app/widgets/LinkButton"


const Header= ()=>{

    return(
        <>
            <HeaderOne/>
        </>
    )
}

const HeaderOne =()=>{
    return(
        <header className="sticky top-0 h-[100px] -mb-[100px] z-50">
            <div className="container">
                <div className="header-wrapper flex flex-nowrap justify-between py-[31px]">
                    <div className="headerlogo">
                        <div className="sitelogo flex flex-col justify-start">
                            <div className="text-2xl text-clr400 font-bold">Elizabeth Doe</div>
                            <span className="text-xs text-clr400">Properties in Singapore</span>
                        </div>
                    </div>

                    <div className="headerMenu flex items-center">
                        <HeaderNavMenu/>
                    </div>

                    <LinkButton buttonlink="#" text="Contact Me" size="sm" color="text-white" borderRadiusClass="rounded-full"/>

                </div>
            </div>
        </header>
    )
}


const HeaderNavMenu = ()=>{
    return(
        <nav>
            <ul className="top-menu list-none flex gap-[45px]">
                <li>
                    <div className="has-submenu flex gap-[10px] items-center">
                        <a className="text-[13px] uppercase font-semibold">Condos in singapore</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M12.5 6L8.5 10L4.5 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                </li>
                <li>
                    <a className="text-[13px] uppercase font-semibold">Resale Properties</a>
                </li>
                <li>
                    <a className="text-[13px] uppercase font-semibold">Articles</a>
                </li>
                <li>
                    <a className="text-[13px] uppercase font-semibold">About me</a>
                </li>
            </ul>
        </nav>
    )
}



export default Header;