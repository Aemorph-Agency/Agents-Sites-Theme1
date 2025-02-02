import Icons from "./icons";

const ListingPagination=()=>{
    return(
        <div className="flex  gap-9 items-center mt-[60px]">
            <div className="text-clr1100">
                <Icons iconName="caretLeft"/>
            </div>

                <a className="condoListPagination text-clr1100 text-[15px] font-semibold leading-[120%] relative active">1</a>
                <a className="condoListPagination text-clr1100 text-[15px] font-semibold leading-[120%] relative">2</a>
                <a className="condoListPagination text-clr1100 text-[15px] font-semibold leading-[120%] relative">3</a>
                <a className="condoListPagination text-clr1100 text-[15px] font-semibold leading-[120%] relative">4</a>
                <a className="condoListPagination text-clr1100 text-[15px] font-semibold leading-[120%] relative">...</a>
                <a className="condoListPagination text-clr1100 text-[15px] font-semibold leading-[120%] relative">12</a>

            <div className="text-clr1100">
                <Icons iconName="caretRight"/>
            </div>
        </div>
    )
}
export default ListingPagination;