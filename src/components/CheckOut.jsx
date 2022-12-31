import React from 'react'
import backButton from '../assets/img/back.png'
import hotelPreview from '../assets/img/bedroom-hijau.jpg'
import logoWhite from '../assets/img/logo-white.png'
import fotoProfile from '../assets/img/profile-default.png'
import { useParams } from 'react-router-dom'

export default function CheckOut() {
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
                        <a href={"/beranda/" + id}>
                            <img src={backButton} alt="" width={30} />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col check-out">
                        <div className="row check-out-title">
                            <div className="col">
                                <h3>Kamar yang dipesan</h3>
                            </div>
                        </div>
                        <div className="row detail-check-out">
                            <div className="col">
                                <p>Hotel : </p>
                            </div>
                            <div className="col check-out-deskripsi">
                                <p>Dhiva Hotel</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Kamar : </p>
                            </div>
                            <div className="col check-out-deskripsi">
                                <p>1</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Tipe Kamar :</p>
                            </div>
                            <div className="col check-out-deskripsi">
                                <p>Regular</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Pada :</p>
                            </div>
                            <div className="col check-out-deskripsi">
                                <p>Rabu, 30 Nov - 1 Des 2022</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col">
                                <p>Kamar (1 Malam) : </p>
                            </div>
                            <div className="col check-out-deskripsi">
                                <p>Rp540.000</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Pajak : </p>
                            </div>
                            <div className="col check-out-deskripsi">
                                <p>Rp50.000</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Diskon : </p>
                            </div>
                            <div className="col check-out-deskripsi">
                                <p>-</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Total : </p>
                            </div>
                            <div className="col check-out-deskripsi">
                                <p>Rp590.000</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row check-out-button">
                            <center>
                                <a href={"/pembayaran/" + id}>
                                    <button className='button-checkout'> Check Out </button>
                                </a>
                            </center>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img
                                src={hotelPreview}
                                alt=""
                                style={{ width: "80%", height: 220 }}
                            />
                        </div>
                        <div className="row">
                            <div className="col check-out-deskripsi-hotel-title">
                                <div className="row">
                                    <div className="col check-out-deskripsi-hotel-title-jenis">
                                        <mark>LUKE</mark>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col check-out-deskripsi-hotel-title-nama-hotel">
                                        Dhiva Hotel
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">91% (Rating) | Sukajadi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
