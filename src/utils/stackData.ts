import { FaNode, FaReact, FaPython } from "react-icons/fa";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiStyledcomponents, SiExpress } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";

export const stackData = [
  {
    title: "HTML",
    img: IoLogoHtml5,
  },
  {
    title: "CSS",
    img: IoLogoCss3,
  },
  {
    title: "JS",
    img: SiJavascript,
  },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "Styled Components",
    img: SiStyledcomponents,
  },
  {
    title: "React",
    img: FaReact,
  },

  { title: "TypeScript", img: SiTypescript },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Python", img: FaPython },
  { title: "Django", img: DiDjango },
  { title: "GitHub", img: AiFillGithub },
  { title: "Express", img: SiExpress },
];
