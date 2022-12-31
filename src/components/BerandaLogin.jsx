import '../assets/css/style.css'
import logoWhite from '../assets/img/logo-white.png'
import vectorAboutUs from '../assets/img/vector-about-us.png'
import React from 'react'
import fotoProfile from '../assets/img/profile-default.png'
import { useParams } from 'react-router-dom'

export default function Beranda() {
    let { id } = useParams();
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href={"/beranda/" + id}><img src={logoWhite} alt="" className="logo-brand" /></a>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse navitem" id="navbarTogglerDemo03">
                        <ul className="navbar-nav nav-item-kanan mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href={"/daftarpariwisata/" + id}>Pariwisata</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/daftarhotel/" + id}>Hotel</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Logout</a>
                            </li>
                        </ul>
                    </div>
                    <a className="nav-profile-photo" href={"/profile/" + id}><img src={fotoProfile} alt="" width={"40"} /></a>
                </div>
            </nav>
            {/* Greetings */}
            <div className="overlay">
                <div className="greetings">
                    <div className="container greetings2">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col-3">
                            </div>
                            <div className="col-6 greetings-text">
                                Selamat Datang,<br />di LebakTravel.id
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Us */}
            <div className="about-us">
                <div className="container about-us2">
                    <div className="row">
                        <div className="col-5" style={{ marginTop: '5%' }}>
                            <div className="row">
                                <h1>Tentang LebakTravel.id</h1>
                            </div>
                            <div className="row">
                                <p>
                                    travel.id merupakan sebuah website untuk mereservasi hotel serta mencari informasi
                                    mengena tempat wisata yang ada di Banten.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={vectorAboutUs} alt="" className="about-us-image" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimoni */}
            <center>
                <div className="testimoni">
                    <div className="container testimoni2">
                        <div className="Row">
                            <h1>Testimoni</h1>
                        </div>
                        <div className="row testimoni-carousel">
                            <div className="col quotes">
                                <div className="card">
                                    <div className="card-body card-quotes">
                                        <blockquote className="blockquote mb-0">
                                            <i>
                                                "Hotel Ini Sangat Bagus"
                                            </i><br /> - Aulia Fitri Fadillah
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="col quotes">
                                <div className="card">
                                    <div className="card-body card-quotes">
                                        <blockquote className="blockquote mb-0">
                                            <i>
                                                "Pariwisata serta Hotel yang disediakan sangatlah cocok"
                                            </i><br /> - Suci Indah Ramdhani
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="col quotes">
                                <div className="card">
                                    <div className="card-body card-quotes">
                                        <blockquote className="blockquote mb-0">
                                            <i>
                                                "Pelayanan yang disediakan sangatlah lengkap"
                                            </i><br /> - Dhiva Aulia Fitri
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col quotes">
                                <div className="card">
                                    <div className="card-body card-quotes">
                                        <blockquote className="blockquote mb-0">
                                            <i>
                                                "Aplikasinya Ringan"
                                            </i><br /> - Angelina Alginawati
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="col quotes">
                                <div className="card">
                                    <div className="card-body card-quotes">
                                        <blockquote className="blockquote mb-0">
                                            <i>
                                                "Keselamatan terjamin"
                                            </i><br /> - Raihan Syeka Pramukastie
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="col quotes">
                                <div className="card">
                                    <div className="card-body card-quotes">
                                        <blockquote className="blockquote mb-0">
                                            <i>
                                                "Keamanan terjamin"
                                            </i><br /> - Arip Hidayat
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
            {/* Footer */}
            <center>
                <footer className="footer">
                    Terms of Service. Privacy Policy. Cookie Settings <br /> 2022 travel.id. All Rights Reserved.
                </footer>
            </center>
        </>
    );
}