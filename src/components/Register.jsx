import React from 'react'
import backButton from '../assets/img/back.png'
import logoWhite from '../assets/img/logo-white.png'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import bcrypt, { genSaltSync } from 'bcryptjs'

export default function Register() {
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [tanggal_lahir, setTanggal_Lahir] = useState('');
    const [nomor_telepon, setNomor_Telepon] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const data = {
            nama: nama,
            username: username,
            tanggal_lahir: tanggal_lahir,
            nomor_telepon: nomor_telepon,
            email: email,
            password: password
        }

        Axios.post("http://localhost:9080/register", data).then(() => {
            alert("Register success")
            window.location = '/login'
        }).catch(err => { })
    }

    useEffect(() => {
        console.log(username)
    }, [username])

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
                    <div className="col">
                        <div
                            className="container kartu-login"
                            style={{ marginTop: "5%", paddingBottom: "8%" }}
                        >
                            <div className="row">
                                <div className="col-1" style={{ marginTop: "5%", marginLeft: "2%" }}>
                                    <a href="/">
                                        <img src={backButton} alt="" width="50%" />
                                    </a>
                                </div>
                                <div className="col-9" style={{ marginTop: "2%", marginLeft: "2%" }}>
                                    <div className="row">
                                        <center>
                                            <img src={logoWhite} alt="" width="30%" />
                                            <h5 style={{ fontWeight: 500, fontSize: 15 }}>
                                                Halo! Selamat Datang di LebakTravel.id
                                            </h5>
                                        </center>
                                    </div>
                                </div>
                                <form action="" onSubmit={handleSubmit} className="form-login">
                                    <div className="container" style={{ width: "90%" }}>
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <label htmlFor="">Nama</label>
                                                </div>
                                                <div className="row">
                                                    <input type="text" id='nama' placeholder="Masukan Nama" value={nama} onChange={(event) => setNama(event.target.value)} required />
                                                </div>
                                                <div className="row" style={{ marginTop: "7%" }}>
                                                    <label htmlFor="">Username</label>
                                                </div>
                                                <div className="row">
                                                    <input type="text" id='username' placeholder="Masukan Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
                                                </div>
                                                <div className="row" style={{ marginTop: "7%" }}>
                                                    <label htmlFor="">Tanggal, Bulan, dan Tahun Lahir</label>
                                                </div>
                                                <div className="row">
                                                    <input
                                                        type="date" id='tanggal_lahir'
                                                        placeholder="Masukan Tanggal, Bulan, dan Tahun Lahir"
                                                        value={tanggal_lahir} onChange={(event) => setTanggal_Lahir(event.target.value)} required />
                                                </div>
                                                <div className="row" style={{ marginTop: "7%" }}>
                                                    <label htmlFor="">Nomor Telepon</label>
                                                </div>
                                                <div className="row">
                                                    <input type="number" id='nomor_telepon' placeholder="Masukan Nomor Telepon " value={nomor_telepon} onChange={(event) => setNomor_Telepon(event.target.value)} required />
                                                </div>
                                            </div>
                                            <div className="col" style={{ marginLeft: "2%" }}>
                                                <div className="row">
                                                    <label htmlFor="">Email</label>
                                                </div>
                                                <div className="row">
                                                    <input type="email" id='email' placeholder="Masukan Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                                </div>
                                                <div className="row" style={{ marginTop: "7%" }}>
                                                    <label htmlFor="">Password</label>
                                                </div>
                                                <div className="row">
                                                    <input type="password" id='password' placeholder="Masukan Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                                                </div>
                                                <div className="row" style={{ marginTop: "5%" }}>
                                                    <input type="submit" value="Daftar" />
                                                </div>
                                                <div className="row" style={{ marginTop: "5%" }}>
                                                    <div className="col">
                                                        <p>
                                                            Sudah Punya Akun ?{" "}
                                                            <a href="/login" style={{ textDecoration: "none" }}>
                                                                Masuk
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
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
