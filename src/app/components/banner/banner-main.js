import Banner1 from "./banner1";

const Banner =(props)=>{
    return(
        <>
        {selectedBanner(props.bannerStyle)}
        </>
    )
}

export default Banner;


function selectedBanner(bannerStyle){
    if(bannerStyle === "style1"){
        return <Banner1 />;
    }
    return null;
}