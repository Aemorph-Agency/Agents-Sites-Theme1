import Image from 'next/image';
import agentpic from '../../assets/images/test-pic.png'
import Icons from '../icons';

const CondoSidebar = ({  }) => {    
  return (
   <>
        <ProfileCard/>
        <ContactForm/>
       
    </>
  );
}

export default CondoSidebar;

const ProfileCard=()=>{
    return(
        <div className="agent-sidebar-profile sidebar-cards px-7 py-4">
            <div className="flex gap-4 items-center mb-3">
                <Image src={agentpic} alt='agent pic' width={80} height={80} className='w-20 h-20 rounded-full object-cover'/>
                <div className='flex flex-col'>
                    <p className='text-xl text-black font-medium -tracking-[0.2px] m-0'>Elizabeth Doe</p>
                    <p className='text-clr1100 text-sm font-normal m-0'>Sales agent at Agency name</p>
                </div>
            </div>
            <div className='text-black font-normal leading-[140%]'>
                <p>Lorem ipsum dolor sit amet consectetur. Quam at auctor tellus condimentum viverra et sed lectus. Etiam leo urna elit.</p>
            </div>
        </div>
    )
}

const ContactForm=()=>{

    return(
        <div className="agent-sidebar-contact sidebar-cards ">
            <div className='px-7 py-4'>
                <p className='text-base font-semibold -tracking-[0.16px] mb-4'>Send me a message</p>
                <form action="" className='flex flex-col gap-4 sidebar-contactform'>
                    <input type="text" placeholder='Name' className='rounded-[10px] bg-white text-base font-normal -tracking-[0.16px] text-black p-4'  />
                    <input type="tel" placeholder='Your Phone' className='rounded-[10px] bg-white text-base font-normal -tracking-[0.16px] text-black p-4'/>
                    <input type="email" placeholder='Your Email' className='rounded-[10px] bg-white text-base font-normal -tracking-[0.16px] text-black p-4' />
                    <textarea name="" id="" cols="30" rows="1" placeholder='Additional Message' className='rounded-[10px] bg-white text-base font-normal -tracking-[0.16px] text-black p-4'></textarea>
                    <input type='submit' value="Send the message" className='bg-clr100 text-white px-6 h-[48px] rounded-[10px] text-base font-semibold -tracking-[0.16px] w-fit'/>
                </form>
            </div>
            <div className='h-[1px] w-full' style={{background: 'rgba(93, 107, 119, 0.20)'}}></div>
            <div className='px-7 py-4'>

            <SidebarSocials/>
            </div>
        </div>
    )
}

const SidebarSocials=()=>{
    return(
        <div className='grid grid-cols-3 gap-[10px]'>
            <a href="#" className='text-clr100 sidebarsocials h-[48px] flex items-center justify-center'>
                <Icons iconName="phone"/>
            </a>
            <a href="#" className='text-clr100 sidebarsocials h-[48px] flex items-center justify-center'>
                <Icons iconName="envelope"/>
            </a>
            <a href="#" className='text-clr100 sidebarsocials h-[48px] flex items-center justify-center'>
                <Icons iconName="whatsappOfficial"/>
            </a>
        </div>
    )
}