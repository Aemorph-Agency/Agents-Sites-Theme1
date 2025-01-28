
const Dropdown=()=>{
    return(
       <div className="relative rounded-2xl bg-clr500 px-5 flex-1">

           <div className="absolute top-1/2 -translate-y-1/2 left-5">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g opacity="0.5">
                <path d="M15.0257 13.8474L18.5946 17.4163L17.4161 18.5948L13.8472 15.0259C12.5639 16.0526 10.9365 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16675C1.6665 5.02675 5.0265 1.66675 9.1665 1.66675C13.3065 1.66675 16.6665 5.02675 16.6665 9.16675C16.6665 10.9367 16.0523 12.5642 15.0257 13.8474ZM13.3538 13.2291C14.3728 12.1789 14.9998 10.7464 14.9998 9.16675C14.9998 5.94383 12.3894 3.33341 9.1665 3.33341C5.94359 3.33341 3.33317 5.94383 3.33317 9.16675C3.33317 12.3897 5.94359 15.0001 9.1665 15.0001C10.7462 15.0001 12.1787 14.373 13.2288 13.354L13.3538 13.2291Z" fill="#548EFF"/>
            </g>
            </svg>
           </div>

         <select className="w-full pl-6 text-clr100 text-sm font-medium leading-[100%] -tracking-[0.15px] bg-transparent py-4">
            <option>Find by District</option>
            <option>Option 1</option>
            <option>Option 2</option>
        </select>
       </div>
    )
}


export default Dropdown;