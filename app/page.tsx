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
          <a href="/DylanResume2025.pdf" download className="downloadButtons">Download Resume</a>
          <a href="/CoverLetter.odt" download className="downloadButtons">Download CV</a>
        </div>
      </div>
      <img src="headshot.png" width={500} height={500} alt="" />
    </div>
  );
}
