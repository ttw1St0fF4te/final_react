import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import '../components/style/HomePage.css';
import '../animations/fade-in.css';

const HomePage = () => {
    return (
        <div className="fade-in"> 
            <section className="store-info"> 
                <h1>MOE: Ваш стиль, ваш выбор - выражайте себя уникально.</h1> 
                <p> Мы предлагаем широкий ассортимент мужской, женской и детской одежды, а также аксессуаров. 
                    <br></br> У нас вы найдете только лучшие бренды и продукты высокого качества. </p> 
            </section> 

            <section className="main-body">
                <a href="/catalog">Каталог</a>
            </section>

            <section className="feedback-form"> 
                <h2>Обратная связь</h2>
                <FeedbackForm /> 
            </section>
        </div>
    );
};

export default HomePage;