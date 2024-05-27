import React, {useContext, useState} from "react";
import {ThemeContext} from "../Context/ThemeContext";
import './styles.css'; // Предполагается, что файл со стилями правильно подключен

const SignInPage = () => {
    const {theme} = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь добавьте логику для авторизации
        console.log("Данные формы:", formData);
    };

    return (
        <div className={`login-page ${theme}`}>
            <div className="form-container">
                <h2>Авторизация</h2>
                <form onSubmit={handleSubmit}>
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
                    <button className={`${theme}`} type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
