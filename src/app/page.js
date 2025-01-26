import Image from "next/image";
import Header from "./components/header/header1";
import Banner from "./components/banner/banner-main";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner bannerStyle="style1"/>
    </>
  );
}
