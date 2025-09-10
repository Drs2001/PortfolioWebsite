import Image from "next/image";
import Icons from "./components/Icons"
import data from "./data.json";

export default function Home() {
  return (
    <div className="home">
      <div className="pt-60">
        <p>Hi I am</p>
        <p className="font-bold text-lg">{data.personal_info.first_name} {data.personal_info.last_name}</p>
        <p className="title">Full Stack Developer / IT Enthusiast</p>
        <Icons />
        <div className="flex gap-2.5">
          <button className="downloadButtons">Download Resume</button>
          <button className="downloadButtons">Download CV</button>
        </div>
      </div>
      <Image src="/headshot.png" width={500} height={500} alt="" />
    </div>
  );
}
