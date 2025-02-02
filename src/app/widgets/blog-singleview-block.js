import Image from "next/image";
import sampleblogimage from '../assets/images/pt-3.jpg'


const BlogSingleViewBlock=(props)=>{


    return(
        <div className="rounded-[20px] h-[318px] relative flex items-end group overflow-hidden">
            <Image src={sampleblogimage}  alt="" width={424} height={318} className="absolute left-0 top-0 w-full h-full group-hover:scale-105 transition duration-300 ease-in-out"/>
            <div className="blog-details z-10 p-[30px]">
                <p className="text-white blog-date mb-[10px] text-[14px] font-medium -tracking-[0.28px]">{props.date}</p>
                <h3 className="text-white text-[18px] font-semibold leading-[130%] -tracking-[0.18px]">{props.title}</h3>
            </div>
        </div>
    )
}
export default BlogSingleViewBlock;