import Link from "next/link";
import Light from "./Light";

export default function Header() {
  return (
    <div id="navbar">
      <Light />
      <div id="nav-links" className="row">
        <Link href="/">Welcome</Link>
        <Link href="/about">About Me</Link>
        <Link href="/work">My Work</Link>
      </div>
      <div id="nav-socials" className="row">
        <a className="social-link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kangelopoulos/">LinkedIn</a>
        <a className="social-link" rel="noreferrer" target="_blank" href="https://github.com/kangelopoulos">Github</a>
        <a className="social-link" rel="noreferrer" target="_blank" href="https://medium.com/@kangelopoulos">Medium</a>
        <a className="social-link" rel="noreferrer" target="_blank" href="https://denosoar.deno.dev/">Denosoar</a>
        <button>Resume</button>      
        <button>Contact</button>
      </div>
    </div>
  )
}