import React from 'react'
import style from "./footer.module.scss"

export const Footer = () => {
  return (
    <div className={style.footer_top}>
    <div className="container">
        <div className={style.block}>
            <div className={style.left_block}>
                <h2 className={style.title}>Есть вопросы?</h2>
                <p className={style.text}>Оставьте свои данные и наш менеджер свяжется с вами в ближайшее время.</p>
            </div>
            <div className={style.right_block}>
                <div className={style.form}>
                    <div className={style.two_form}>
                        <div className={style.fullname}>
                            <input className={style.name} type="text" placeholder="Ваше имя" />
                        </div>
                        <div className={style.phone}>
                            <input className={style.name} type="text" placeholder="Телефон/E-mail" />
                        </div>
                    </div>
                    <input className={style.comment} type="textarea" placeholder="Комментарий" />
                </div>
                <p className={style.des}>Даю согласие на рассылку рекламных материалов, акций и скидок</p>
                <p className={style.des}>Даю согласие на обработку моих персональных данных</p>
                <button className={style.btn}>Отправить</button>
            </div>
        </div>
    </div>
</div>
  )
}
