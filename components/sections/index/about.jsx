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
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="With a diverse skill set that includes full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
        />
        <section className={about.content}>
          <div className={about.image}>
            {/* <img src="/img/Nikoloz1.JPG" alt="Nikoloz Kobaidze Photo" />*/}
            <Image src="/img/Nikoloz1.JPG" width={600} height={800} />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Softskills that pay the bills"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fa", "ear-listen"]}
              copy="With a foundation in design and technical expertise, I offer strong leadership, time management, and multitasking skills. Beyond work, my passion for gaming enhances my problem-solving abilities and reflects my commitment to continuous improvement. I bring a unique blend of creativity and strategic thinking to projects. Outside of work, I stay active through football, honing my teamwork skills. I am confident that my diverse skill set and gaming passion can bring value to any project."
            />
            <BadgesBlock
              title="Reasearch and planning"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "earth-americas", name: "User Research", type: "fa" },
  { key: "qrcode", name: "Digital Strategy", type: "fa" },
  { key: "window-restore", name: "Design Systems", type: "fa" },
  { key: "cubes", name: "Product Strategy", type: "fa" },
  { key: "layer-group", name: "Brand Strategy", type: "fa" },
  { key: "ubuntu", name: "Operations", type: "fab" },
];
