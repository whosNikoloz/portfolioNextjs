// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title="Polymath foundations"
              icon={["fat", "chart-network"]}
              copy="With a strong foundation in both design and development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends."
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Software I love to work with"
              copy="With just a year of experience creating digital assets, I've gained a foundational understanding of how top-notch software products in the world are designed. During this time, I've utilized various software tools to enhance my skills."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Technologies I love to build with"
              copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const software = [
  { key: "photoshop", name: "Photoshop", type: "devicon" },
  { key: "illustrator", name: "Illustrator", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "canva", name: "Canva", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "visualstudio", name: "VisualStudio", type: "devicon" },
  { key: "mailbox", name: "Postman", type: "fas" },
  { key: "computer-mouse", name: "Click Up", type: "fas" },
];

const tech = [
  { key: "csharp", name: "C#", type: "devicon" },
  { key: "dotnetcore", name: ".NetCore", type: "devicon" },
  { key: "dot-net", name: ".Net", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "github", name: "GitHub", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "microsoftsqlserver", name: "SQLServer", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
];
