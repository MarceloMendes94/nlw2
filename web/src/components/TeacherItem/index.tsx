import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://scontent.fvix2-2.fna.fbcdn.net/v/t1.0-9/74289811_109457003831360_4254708441525780480_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeG_KdscKXCUgwLrulf9yCsnmjTnIg-3A9-aNOciD7cD35Q4iYvoEwyJQNRVwX2niPoxfslhYsGNVzDEfK8v4Ph3&_nc_ohc=LmwTL1HMRZwAX8pAMTi&_nc_ht=scontent.fvix2-2.fna&oh=b8b6abba31adb7f3809ffd3fccbacdef&oe=5F4DB393" alt="Marcelo Mendes"/>
            <strong>Marcelo</strong><br/><br/>
            <span>Quimica</span>
        </header>
        <div>                        
            <p>sorvete</p>
            <br/><br/>
            <p>
            No mundo atual, a constante divulgação das informações facilita a criação do impacto na agilidade decisória.
            </p>
        </div>
        <footer>
                <p>preço/hora:<strong>R$20,00</strong></p>
                <button type="button">
                    <img src={whatsappIcon} alt="wpp"/>
                    entrar em contato
                </button>
            </footer>
    </article>
    )
}
export default TeacherItem