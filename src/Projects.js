import React from 'react';
import s from './Projects.module.css';

function Projects() {
  return (
    <div className={s.projects}>
      <div className={s.navBar}>
<div className={s.top}>
<div className={s.nav}>
    <span>Мои Работы</span>
    </div>
</div>
<div className={s.bot}>
  <div className={s.one}>
  <div className={s.oneBot}></div>
  </div>

  
  <div className={s.two}>
  <div className={s.twoTop}>
    <button className={s.twoTopButton}>Смотреть</button>
  </div>
  <div className={s.twoBot}>
    <div className={s.twoBotTop}>
      <span>Название проекта</span>
    </div>
    <div className={s.twoBotBot}>
    <span>Краткое описание</span>
    </div>
  </div>
  </div>
  </div>
</div>


    </div>
  );
}

export default Projects;
