import Image from "next/image";
import '../styles/About.module.scss';

export default function About() {
  return (
    <div className="center" id="aboutme">
      <div className="mid">
        <p>I fell in love with software engineering seven years ago when I picked up data analysis in Python. A few years later, I discovered full-stack web development and it has been my passion ever since.</p>
        <p>Aside from web development, I&apos;m also a long distance runner and biker. I love camping, hiking, backpacking, and pretty much anything that involves the outdoors. Nothing quite beats a quiet night in a tent under the stars.</p>
        <p>In my off hours, you&apos;d find me road tripping to national parks with my bass fishing rod and my big shepherd mix, Odin, probably with a book about some exciting technology tucked under my arm.</p>
      </div>
      <div className="side">
        <p>Me &</p><Image width={150} height={192} src="https://kate-portfolio-bucket.s3.us-east-2.amazonaws.com/me%26odin.png" alt="me and my dog" /><p>Odin</p>
      </div>
    </div>
  )
}
