import React from 'react';
import './styles.css'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (<article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/49659169?s=460&u=d643ef574f883d0bfc36064389f1946d76dc501d&v=4" alt="Gabriel Salomão" />
            <div>
                <strong>Gabriel Salomão</strong>
                <span>Quimica</span>
            </div>
        </header>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit deserunt sint voluptatibus et eveniet doloribus quaerat similique, alias fugit in quas, neque, eius iusto harum voluptates praesentium ratione reiciendis!
        </p>
        <footer>
            <p>
                Preço/hora
                                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsAppIcon} alt="Whatsapp" />
                                Entrar em contato
            </button>
        </footer>
    </article>)
}

export default TeacherItem;