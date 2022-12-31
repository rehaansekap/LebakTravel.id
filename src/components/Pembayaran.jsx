import React from 'react'
import backButton from '../assets/img/back.png'
import vectorPembayaran from '../assets/img/pembayaran.png'
import logoWhite from '../assets/img/logo-white.png'
import fotoProfile from '../assets/img/profile-default.png'
import { useParams } from 'react-router-dom'


export default function Pembayaran() {
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
            <div className="container check-out-box" style={{ marginTop: "10%" }}>
                <div className="row check-out-back-button">
                    <div className="col">
                        <a href={"/checkout/" + id}>
                            <img src={backButton} alt="" width={30} />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col check-out" style={{ borderRight: "none" }}>
                        <div className="row check-out-title">
                            <div className="col">
                                <h3>Metode Pembayaran</h3>
                            </div>
                        </div>
                        <form action="">
                            <div className="row tipe-pembayaran">
                                <div className="col">
                                    <p>VA Bank Negara Indonesia</p>
                                </div>
                                <div className="col pembayaran-radio">
                                    <input type="radio" name="metode_pembayaran" />
                                </div>
                            </div>
                            <div className="row tipe-pembayaran">
                                <div className="col">
                                    <p>VA Bank Central Asia</p>
                                </div>
                                <div className="col pembayaran-radio">
                                    <input type="radio" name="metode_pembayaran" />
                                </div>
                            </div>
                            <div className="row tipe-pembayaran">
                                <div className="col">
                                    <p>VA Bank Tabungan Negara</p>
                                </div>
                                <div className="col pembayaran-radio">
                                    <input type="radio" name="metode_pembayaran" />
                                </div>
                            </div>
                            <div className="row tipe-pembayaran">
                                <div className="col">
                                    <p>VA Mandiri</p>
                                </div>
                                <div className="col pembayaran-radio">
                                    <input type="radio" name="metode_pembayaran" />
                                </div>
                            </div>
                            <div className="row tipe-pembayaran">
                                <div className="col">
                                    <p>VA Danamon</p>
                                </div>
                                <div className="col pembayaran-radio">
                                    <input type="radio" name="metode_pembayaran" />
                                </div>
                            </div>
                            <div
                                className="row tipe-pembayaran"
                                style={{ borderBottom: "1px solid rgba(255, 251, 251, 0.212)" }}
                            >
                                <div className="col">
                                    <p>VA BRI</p>
                                </div>
                                <div className="col pembayaran-radio">
                                    <input type="radio" name="metode_pembayaran" />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col button-checkout">
                                    <a href={"/beranda/" + id}>
                                        <center>Bayar Sekarang</center>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <div className="row" style={{ marginTop: "10%" }}>
                            <center>
                                <img src={vectorPembayaran} alt="" style={{ width: "80%" }} />
                            </center>
                        </div>
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
