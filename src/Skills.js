import React from 'react';
import s from './Skills.module.css';

function Skills() {
  return (
    <div className={s.skills}>
      <div className={s.navBar}>
<div className={s.top}>
  <div className={s.nav}>
    <span>Мои Скиллы</span>
    </div>
</div>
<div className={s.bot}>
<div className={s.one}></div>
<div className={s.two}>
  <div className={s.twoBot}></div>
</div>
<div className={s.three}>
  <div className={s.threeTop}></div>
  <span className={s.threeMid}>React</span>
  <div className={s.threeBot}></div>
</div>
</div>
</div>
    </div>
  );
}

export default Skills;
