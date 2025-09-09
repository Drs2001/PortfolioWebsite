import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <div className="pt-60">
        <p>Hi I am</p>
        <p className="font-bold text-lg">Dylan Spence</p>
        <p className="title">Full Stack Developer / IT Enthusiest</p>
        <div className="links">
          <a href="https://github.com/Drs2001" target="_blank" rel="noopener noreferrer">
            <div className="icons">
              <img src="/github-mark-white.svg" alt="Open link" width="24" height="24"></img>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/dylan-spence-999036234/" target="_blank" rel="noopener noreferrer">
            <div className="icons">
              <img src="/linkedin.png" alt="Open link" width="24" height="24"></img>
            </div>
          </a>
          <a href="https://gitea.spence.cloud/Drs2001" target="_blank" rel="noopener noreferrer">
            <div className="icons">
              <img src="/gitea.png" alt="Open link" width="24" height="24"></img>
            </div>
          </a>
        </div>
      </div>
      <Image src="/headshot.png" width={500} height={500} alt="" />
    </div>
  );
}
