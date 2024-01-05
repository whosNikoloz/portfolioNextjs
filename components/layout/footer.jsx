import { useState, useEffect } from "react";

import Container from "../structure/container";
import Icon from "../utils/icon.util";

import css from "../../styles/structure/footer.module.scss";

import content from "../../content/footer.json";
import settings from "../../content/_settings.json";

export default function Footer() {
  return (
    <footer className={css.container}>
      <Container spacing={["verticalXXLrg", "bottomLrg"]}>
        <section className={css.sections}>
          <ul className={css.social}>
            <li>
              <h4>Social</h4>
            </li>
            <li className={css.socialList}>
              {content.social.map(({ url, icon }, index) => {
                return (
                  <a key={index} href={url} rel="noreferrer" target="_blank">
                    <Icon icon={["fab", icon]} />
                  </a>
                );
              })}
            </li>
          </ul>
        </section>
        <section className={css.github}>
          <a rel="noreferrer" target="_blank">
            <h5>
              <p>Gmail: nika.kobaidze021@gmail.com</p>
            </h5>
            <ul>
              <li>
                <p>Phone: +955 577602399</p>
              </li>
            </ul>
          </a>
        </section>
      </Container>
      <canvas id="gradient-canvas" className={""} data-transition-in></canvas>
    </footer>
  );
}
