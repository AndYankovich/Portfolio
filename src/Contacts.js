import React from 'react';
import s from './Contacts.module.css';

function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.nav}>
        <div className={s.top}>
          <span>Контакты</span>
        </div>
        <div className={s.form}>
          <input type='text' value='Введите свое Имя' className={s.input}></input>
          <input type='text' value='Введите номер телефона' className={s.input}></input>
          <textarea value='Введите текст собщения' className={s.text}></textarea>
        </div>
        <button className={s.button}>Отправить</button>
      </div>


    </div>
  );
}

export default Contacts;
