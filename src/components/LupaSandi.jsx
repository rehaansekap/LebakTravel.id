import React from 'react'
import vectorLupaPassword from '../assets/img/vector-lupa-password-1.png'
import backButton from '../assets/img/back.png'
import logoWhite from '../assets/img/logo-white.png'
import Axios from 'axios';
import { useEffect, useState } from 'react';

export default function LupaSandi() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email
        }

        Axios.post("http://localhost:9080/lupasandi", data).then((result) => {
            if (result.data.email === email) {
                window.location = "/ubahsandi/" + result.data.id
            } else {
                alert("Email tidak terdaftar !");
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
                    <div className="col" style={{ marginTop: "13%", marginBottom: "10%" }}>
                        <img src={vectorLupaPassword} alt="" width="80%" />
                    </div>
                    <div className="col">
                        <div className="container kartu-login" style={{ marginTop: "10%" }}>
                            <div className="row">
                                <div className="col-1" style={{ marginTop: "5%", marginLeft: "2%" }}>
                                    <a href="/login">
                                        <img src={backButton} alt="" width="150%" />
                                    </a>
                                </div>
                                <div className="col-9" style={{ marginTop: "4%", marginLeft: "2%" }}>
                                    <div className="row">
                                        <center>
                                            <img src={logoWhite} alt="" width="50%" />
                                            <h5 style={{ fontWeight: 500, fontSize: 15 }}>
                                                Atur Ulang Kata Sandi
                                            </h5>
                                        </center>
                                    </div>
                                </div>
                                <form action="" className="form-login" onSubmit={handleSubmit}>
                                    <div className="container" style={{ width: "90%" }}>
                                        <div className="row">
                                            <label htmlFor="">Email Pemulihan</label>
                                        </div>
                                        <div className="row">
                                            <input type="email" placeholder="Masukan Email Anda" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                        </div>
                                        <div className="row" style={{ marginTop: "3%", marginBottom: "3%" }}>
                                            <input type="submit" value="Kirim Email" />
                                        </div>
                                        <div className="kirim-ulang row">
                                            <p>
                                                Belum menerima email?{" "}
                                                <a
                                                    href="/lupasandi"
                                                    style={{ color: "#024687", textDecoration: "none" }}
                                                >
                                                    {" "}
                                                    Kirim Ulang
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
