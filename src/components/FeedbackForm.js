import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './style/FeedBackForm.css';

const FeedbackForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const sendEmail = (data) => {
        emailjs.send('service_ie2ldfa', 'template_q1z362b', data, 'qGu-l6j_Vw_41MKsh')
            .then((result) => {
                console.log(result.text);
                reset();
            }, (error) => {
                console.error(error.text);
            });
    };

    return (
        <form className="feedback-form" onSubmit={handleSubmit(sendEmail)}>
            <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" {...register('name', { required: true })} />
                {errors.name && <span className="error">Поле обязательно для заполнения</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span className="error">Введите корректный email</span>}
            </div>

            <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea id="message" {...register('message', { required: true })} />
                {errors.message && <span className="error">Поле обязательно для заполнения</span>}
            </div>

            <button type="submit">Отправить</button>
        </form>
    );
};

export default FeedbackForm;
