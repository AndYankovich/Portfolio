import React from 'react';
import s from './Slogan.module.css';

function Slogan() {
  return (
    <div className={s.slogan}>
      <div className={s.nav}>
      <div className={s.top}>
        <span>Рассматриваю варианты удаленной работы</span>
      </div>
      <button className={s.button}>Нанять меня</button>
</div>

    </div>
  );
}

export default Slogan;
