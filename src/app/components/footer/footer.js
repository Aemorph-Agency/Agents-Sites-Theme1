import LinkButton from "@/app/widgets/LinkButton";
import '../../styles/footer.css';
import Icons from "../icons";


const Footer=()=>{
    return(

        <footer className="mt-[89px]">
            <div className="container">

              <div className="max-w-[860px] flex flex-col gap-[31px] items-center m-auto mt-[50px]">
              <h2 className="text-[32px] font-black  -tracking-[0.64px]">Do you need a consultation ? </h2>
                    <p className="text-lg leading-[140%] -tracking-[0.18px] font-normal mb-0">Lorem ipsum dolor sit amet consectetur. Nec nullam velit arcu egestas. Varius tristique ullamcorper id bibendum. Nunc ut tortor sapien elementum. Posuere dui nulla porta risus malesuada.</p>
                    <LinkButton buttonlink="#" text="Contact Me" size="sm" color="text-white" borderRadiusClass="rounded-full"/>
               
              </div>
              <div className="divider w-full h-[1px]  mt-[68px]  mb-[60px]"></div>
                    

            <div  className="flex justify-between">
                <div className="flex gap-[112px]">
                    <ul className="list-none pl-0 flex gap-[15px] flex-col">
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">All Properties</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">New Launch</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">Resale Properties</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">Condos</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">Landed Properties</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">HDB Properties</a>
                        </li>
                    </ul>

                    <ul className="list-none pl-0 flex gap-[15px] flex-col">
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">All Properties</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">New Launch</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">Resale Properties</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">Condos</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">Landed Properties</a>
                        </li>
                        <li>
                            <a href="#" className="text-[13px] font-normal -tracking-[0.13px]">HDB Properties</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-contacts flex flex-col gap-[18px]">
                    <a href="#" className="flex gap-[10px] items-center text-base font-normal -tracking-[0.16px]">
                        <Icons iconName="phone"/>
                        +65 1234 5678
                    </a>     
                    <a href="#" className="flex gap-[10px] items-center text-base font-normal -tracking-[0.16px]">
                        <Icons iconName="envelope"/>
                        mail@johnandersen.com
                    </a>     
                    <a href="#" className="flex gap-[10px] items-center text-base font-normal -tracking-[0.16px]">
                        <Icons iconName="pin"/>
                        3 Pioneer Walk, Singapore 627750
                    </a>     
                </div>
            </div>

            <div className="mt-[113px] flex justify-between items-center pb-10">
                <p className="mb-0 text-[13px] flex-1">© 2024 JohnAndersen.com</p>


                <div className="socials flex gap-[10px]">
                    <div className="rounded-full p-[18px] bg-white">
                        <Icons iconName="youtube"/>
                    </div>
                    <div className="rounded-full p-[18px] bg-white">
                        <Icons iconName="facebook"/>
                    </div>
                    <div className="rounded-full p-[18px] bg-white">
                        <Icons iconName="instagram"/>
                    </div>
                </div>

                <div className="flex-1 flex justify-end">
                    <div className="bg-white footer-endmenu px-[18px] py-3 w-fit">
                        <a className="text-[13px] font-normal -tracking-[0.13px]">Terms and Conditions</a>
                        <a className="text-[13px] font-normal -tracking-[0.13px]">Privacy Policy</a>
                    </div>
                </div>

            </div>


            </div>
        </footer>
    )

}
export default Footer;
