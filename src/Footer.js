import React from 'react';
import s from './Footer.module.css';

function Footer() {
  return (
    <div className={s.footer}>
<div className={s.nav}>
        <div className={s.top}>
          <span>Андрей Янкович</span>
        </div>
        <div className={s.contacts}>
        <a href='' className={s.link}>VK</a>
          <a href='' className={s.link}>Git</a>
          <a href='' className={s.link}>Lin</a>
          <a href='' className={s.link}>Fb</a>
        </div>
        <div className={s.bot}>
          <span>2019 Все права защищены</span>
        </div>
      </div>


    </div>
  );
}

export default Footer;
