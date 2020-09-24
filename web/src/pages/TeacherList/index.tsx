import React from 'react';
import PageHeader from '../../components/PageHeader';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis" >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
                <article className="teacher-item">
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
                </article>
            </main>
        </div>
    )
}

export default TeacherList;