import React, { useState, useContext } from "react";
import {ThemeContext} from "../Context/ThemeContext";
import './styles.css'


const SignUpPage = () => {
    const { theme } = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        birthdate: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь вы можете добавить логику отправки данных формы
        console.log("Данные формы:", formData);
    };

    return (
        <div className={`login-page ${theme}`}>
            <div className="form-container">
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmit}>
                    <div className={`form-group ${theme}`}>
                        <label htmlFor="name">Имя:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`form-group ${theme}`}>
                        <label htmlFor="username">Логин:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`form-group ${theme}`}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`form-group ${theme}`}>
                        <label htmlFor="password">Пароль:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`form-group ${theme}`}>
                        <label htmlFor="birthdate">Дата рождения:</label>
                        <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`form-group ${theme}`}>
                        <label htmlFor="phone">Номер телефона:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className={`${theme}`} type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
