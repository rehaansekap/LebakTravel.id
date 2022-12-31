import React from 'react'
import vectorLupaPassword from '../assets/img/vector-lupa-password-1.png'
import backButton from '../assets/img/back.png'
import logoWhite from '../assets/img/logo-white.png'
import Axios from 'axios';
import { useEffect, useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: username,
            password: password
        }

        Axios.post("http://localhost:9080/login", data).then((result) => {
            console.log(result);
            console.log("Login successful!");
            console.log(username, password);



            if (result.data.username === username && result.data.password === password) {
                window.location = "/beranda/" + result.data.id
            } else {
                alert("Username atau Password Salah!");
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logoWhite} alt="" className="logo-brand" /></a>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse navitem" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/login">Masuk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Daftar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container" style={{ marginTop: "5%" }}>
                <div className="row">
                    <div className="col" style={{ marginTop: '13%', marginBottom: '10%' }}>
                        <img src={vectorLupaPassword} alt="" width="80%" />
                    </div>
                    <div className="col">
                        <div className="container kartu-login" style={{ marginTop: '10%', paddingBottom: '20%' }}>
                            <div className="row">
                                <div className="col-1" style={{ marginTop: '5%', marginLeft: '2%' }}>
                                    <a href="/">
                                        <img src={backButton} alt="" width="150%" />
                                    </a>
                                </div>
                                <div className="col-9" style={{ marginTop: '4%', marginLeft: '2%' }}>
                                    <div className="row">
                                        <center>
                                            <img src={logoWhite} alt="" width="50%" />
                                            <h5 style={{ fontWeight: 500, fontSize: '15px' }}>Halo! Selamat Datang di
                                                LebakTravel.id
                                            </h5>
                                        </center>
                                    </div>
                                </div>
                                <form action className="form-login" onSubmit={handleSubmit}>
                                    <div className="container" style={{ width: '90%' }}>
                                        <div className="row">
                                            <label htmlFor="">Username</label>
                                        </div>
                                        <div className="row">
                                            <input type="username" id='username' placeholder="Masukan Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
                                        </div>
                                        <div className="row" style={{ marginTop: '7%' }}>
                                            <label htmlFor="">Password</label>
                                        </div>
                                        <div className="row">
                                            <input type="password" id='password' placeholder="Masukan Kata Sandi" value={password} onChange={(event) => setPassword(event.target.value)} required />
                                        </div>
                                        <div className="row">
                                            <div className="col login-lupa-kata-sandi">
                                                <a href="/lupasandi">Lupa Kata Sandi ?</a>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: '5%' }}>
                                            <input type="submit" value="Masuk" />
                                        </div>
                                        <div className="row" style={{ marginTop: '5%' }}>
                                            <div className="col">
                                                <p>Belum Punya Akun ? <a href="/register" style={{ textDecoration: 'none' }}>Daftar</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
