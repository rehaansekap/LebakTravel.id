import React from 'react'
import kamarPreview from '../assets/img/bedroom-hijau.jpg'
import logoWhite from '../assets/img/logo-white.png'
import fotoProfile from '../assets/img/profile-default.png'
import { useParams } from 'react-router-dom'

export default function DaftarHotel() {
    let { id } = useParams();
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbir">
                <div className="container-fluid daftarpariwisata">
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
            <div className="container topsection" style={{ marginTop: "5%" }}>
                <form action="">
                    <div className="row">
                        <div className="col kartu-daftar-hotel-dicari">
                            <div className="row">
                                <b>Kemana ?</b>
                            </div>
                            <div className="row inputan-daftar-hotel">
                                <input type="text" placeholder="Kota, lingkungan, or alamat" />
                            </div>
                        </div>
                        <div className="col kartu-daftar-hotel-dicari">
                            <div className="row">
                                <b>Kapan ?</b>
                            </div>
                            <div className="row inputan-daftar-hotel">
                                <input
                                    type="date"
                                    placeholder="Tanggal untuk menginap"
                                />
                            </div>
                        </div>
                        <div className="col kartu-daftar-hotel-dicari">
                            <div className="row">
                                <b>Kamar yang Dicari ?</b>
                            </div>
                            <div className="row inputan-daftar-hotel">
                                <select name="" id="">
                                    <option value="">1 Kamar LUXE</option>
                                    <option value="">2 Kamar LUXE</option>
                                    <option value="">3 Kamar LUXE</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "5%" }}>
                    <div className="col">
                        <div className="row kartu-daftar-hotel">
                            <div className="row">
                                <div className="col">
                                    <img src={kamarPreview} alt="" />
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col p-edited">
                                            <p>LUXE</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-edited">
                                            <p>Dhiva Hotel</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-edited">
                                            <p style={{ fontSize: 15 }}>64% Sukajadi</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p style={{ fontSize: 15 }}>
                                                Hotel Indah di daerah sukajadi, memiliki pemandanganyang
                                                menarik{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href={"/detailhotel/" + id}>
                                <div className="row">
                                    <div className=" col p-edited kartu-harga">
                                        <center>
                                            <p>Rp54.000.000/Malam</p>
                                        </center>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="row kartu-daftar-hotel">
                            <div className="row">
                                <div className="col">
                                    <img src={kamarPreview} alt="" />
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col p-edited">
                                            <p>LUXE</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-edited">
                                            <p>Dhiva Hotel</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-edited">
                                            <p style={{ fontSize: 15 }}>64% Sukajadi</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p style={{ fontSize: 15 }}>
                                                Hotel Indah di daerah sukajadi, memiliki pemandanganyang
                                                menarik{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href={"/detailhotel/" + id}>
                                <div className="row">
                                    <div className=" col p-edited kartu-harga">
                                        <center>
                                            <p>Rp54.000.000/Malam</p>
                                        </center>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="row kartu-daftar-hotel">
                            <div className="row">
                                <div className="col">
                                    <img src={kamarPreview} alt="" />
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col p-edited">
                                            <p>LUXE</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-edited">
                                            <p>Dhiva Hotel</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-edited">
                                            <p style={{ fontSize: 15 }}>64% Sukajadi</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p style={{ fontSize: 15 }}>
                                                Hotel Indah di daerah sukajadi, memiliki pemandanganyang
                                                menarik{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href={"/detailhotel/" + id}>
                                <div className="row">
                                    <div className=" col p-edited kartu-harga">
                                        <center>
                                            <p>Rp54.000.000/Malam</p>
                                        </center>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <iframe width="500" height="800" frameborder="0"
                            src="https://www.bing.com/maps/embed?h=800&w=500&cp=-6.535330751364327~107.04527952678632&lvl=7.346830156691391&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                            scrolling="no">
                        </iframe>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <center>
                <footer style={{ paddingTop: "10%", paddingBottom: "2%" }}>
                    Terms of Service. Privacy Policy. Cookie Settings <br /> 2022 travel.id.
                    All Rights Reserved.
                </footer>
            </center>
        </>
    )
}
