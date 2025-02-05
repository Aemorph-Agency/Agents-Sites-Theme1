import '../../styles/carousel.css';



const { default: Icons } = require("../icons")


const SliderNav=({arrowLeftClass, arrowRightClass})=>{
    return(
        <div className="slider-nav flex gap-2">
            <div className={`${arrowLeftClass} slider-nav__prev slider-nav-btn w-12 h-12 flex items-center justify-center rounded-full text-clr100`}>
               <Icons iconName="arrowleft"/>
            </div>
            <div className={`${arrowRightClass} slider-nav__next slider-nav-btn w-12 h-12 flex items-center justify-center rounded-full text-clr100`}>
                <Icons iconName="arrowright"/>
            </div>
        </div>
    )


}

export default SliderNav;