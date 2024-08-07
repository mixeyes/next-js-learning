import React from 'react';
import cl from 'classnames';
import style from './Footer.module.css';

export const Footer = () => (
  <footer className={style.footer}>
    <div className={style.footer__addr}>
      <h1 className={style.footer__logo}>Something</h1>

      <h2>Contact</h2>

      <address>
        5534 Somewhere In. The World 22193-10212
        <br />
        <a className={style.footer__btn} href='mailto:example@gmail.com'>
          Email Us
        </a>
      </address>
    </div>

    <ul className={style.footer__nav}>
      <li className={style.nav__item}>
        <h2 className={style.nav__title}>Media</h2>

        <ul className={style.nav__ul}>
          <li>
            <a href='#'>Online</a>
          </li>

          <li>
            <a href='#'>Print</a>
          </li>

          <li>
            <a href='#'>Alternative Ads</a>
          </li>
        </ul>
      </li>

      <li className={cl(style.nav__item, style['nav__item--extra'])}>
        <h2 className={style.nav__title}>Technology</h2>

        <ul className={cl(style.nav__ul, style['nav__ul--extra'])}>
          <li>
            <a href='#'>Hardware Design</a>
          </li>

          <li>
            <a href='#'>Software Design</a>
          </li>

          <li>
            <a href='#'>Digital Signage</a>
          </li>

          <li>
            <a href='#'>Automation</a>
          </li>

          <li>
            <a href='#'>Artificial Intelligence</a>
          </li>

          <li>
            <a href='#'>IoT</a>
          </li>
        </ul>
      </li>

      <li className={style.nav__item}>
        <h2 className={style.nav__title}>Legal</h2>

        <ul className={style.nav__ul}>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>

          <li>
            <a href='#'>Terms of Use</a>
          </li>

          <li>
            <a href='#'>Sitemap</a>
          </li>
        </ul>
      </li>
    </ul>

    <div className={style.legal}>
      <p>&copy; 2023 Something. All rights reserved.</p>

      <div className={style.legal__links}>
        <span>
          Made with <span className={style.heart}>♥</span>
        </span>
      </div>
    </div>
  </footer>
);
