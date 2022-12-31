import React from 'react'
import backButton from '../assets/img/back.png'
import cariButton from '../assets/img/cari.png'
import carouselPariwisata1 from '../assets/img/carousel_pariwisata/1.jpg'
import carouselPariwisata2 from '../assets/img/carousel_pariwisata/2.jpg'
import carouselPariwisata3 from '../assets/img/carousel_pariwisata/3.jpg'
import carouselPariwisata4 from '../assets/img/carousel_pariwisata/4.jpg'
import carouselPariwisata5 from '../assets/img/carousel_pariwisata/5.jpg'
import logoWhite from '../assets/img/logo-white.png'
import fotoProfile from '../assets/img/profile-default.png'
import { useParams } from 'react-router-dom'

export default function DetailPariwisata() {
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
            <div className="container container-gambar-pariwisata" style={{ marginTop: "10%" }}>
                <div className="row deskripsi-pariwisata-back-button">
                    <div className="col-2">
                        <a href={"/daftarpariwisata/" + id}>
                            <img src={backButton} alt="" width="20%" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col deskripsi-pariwisata-title">
                        <div className="row">
                            <div className="col deskripsi-pariwisata-title-nama-tempat">
                                Pantai Karang Taraje
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">91% (Rating) | Bayah, Lebak</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "2%" }}>
                <div className="row">
                    <div className="col deskripsi-pariwisata">
                        <div className="row">
                            <div className="col title-deskripsi-pariwisata">
                                <h2>Deskripsi</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 detail-deskripsi-pariwisata">
                                <p>
                                    Pantai karang taraje merupakan salah satu pantai sawarna yang
                                    letaknya berada dekat dengan pantai lagon dan pantai karang
                                    beureum. Kondisi alam pantai ini di dominasi oleh bebatuan dengan
                                    beragam bentuk, yang paling mencolok yaitu batuan yang menyerupai
                                    benteng.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/* Carousel */}
                                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                                    {/* Indicators/dots */}
                                    <div className="carousel-indicators">
                                        <button
                                            type="button"
                                            data-bs-target="#demo"
                                            data-bs-slide-to={0}
                                            className="active"
                                        />
                                        <button
                                            type="button"
                                            data-bs-target="#demo"
                                            data-bs-slide-to={1}
                                        />
                                        <button
                                            type="button"
                                            data-bs-target="#demo"
                                            data-bs-slide-to={2}
                                        />
                                        <button
                                            type="button"
                                            data-bs-target="#demo"
                                            data-bs-slide-to={3}
                                        />
                                        <button
                                            type="button"
                                            data-bs-target="#demo"
                                            data-bs-slide-to={4}
                                        />
                                    </div>
                                    {/* The slideshow/carousel */}
                                    <div className="carousel-inner">
                                        <div className="carousel-item active image-carousel">
                                            <img
                                                src={carouselPariwisata1}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item image-carousel">
                                            <img
                                                src={carouselPariwisata2}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item image-carousel">
                                            <img
                                                src={carouselPariwisata3}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item image-carousel">
                                            <img
                                                src={carouselPariwisata4}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item image-carousel">
                                            <img
                                                src={carouselPariwisata5}
                                                className="d-block w-100"
                                            />
                                        </div>
                                    </div>
                                    {/* Left and right controls/icons */}
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#demo"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" />
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#demo"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row deskripsi-pariwisata-harga-title">
                            <div className="col">
                                <h2>Harga Tiket Masuk</h2>
                            </div>
                        </div>
                        <div className="row deskripsi-pariwisata-harga-detail">
                            <div className="col">
                                <div className="row">
                                    <p>
                                        Wisatawan akan dimintai biaya tiket masuk Rp5.000,-/orang di pos
                                        masuk, yang lokasinya setelah jembatan gantung. Harga tiket
                                        masuk tersebut termasuk untuk mengunjungi Pantai Lagon Pari
                                        Karang Beurum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row deskripsi-pariwisata-aktifitas-title">
                            <div className="col">
                                <h2>Aktivitas Pantai</h2>
                            </div>
                        </div>
                        <div className="row deskripsi-pariwisata-aktifitas-detail">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <h5>1. Camping di pinggir pantai</h5>
                                        <p>
                                            Camping adalah salah satu kegiatan seru yang bisa dilakukan di
                                            Pantai Karang Taraje. Namun disarankan melakukannya dalam
                                            bentuk komunitas yang memiliki pengalaman. Ada beberapa titik
                                            yang bisa dijadikan tempat mendirikan tenda, salah satunya
                                            yang lokasinya dekat gubung warung milik warga.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row deskripsi-pariwisata-aktifitas-detail">
                            <div className="col">
                                <div className="row">
                                    <div className="row">
                                        <h5>2. Piknik</h5>
                                        <p>
                                            Selain camping, Pantai Karang Taraje ini juga cocok dijadikan
                                            tempat piknik bersama keluarga. Terdapat area yang teduh yang
                                            bisa dijadikan tempat bersantai dan berkumpul. Sambil
                                            menikmati keindahan dan kesegaran pantai bisa sambil menikmati
                                            makanan yang dibawa dari rumah.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row deskripsi-pariwisata-aktifitas-detail">
                            <div className="col">
                                <div className="row">
                                    <div className="row">
                                        <h5>3. Menikmati Sunset dan Sunrise</h5>
                                        <p>
                                            Masih menyambung dengan kegiatan camping, pada pagi dan sore
                                            hari kita bisa menikmati pemandangan langit yang indah dari
                                            Pantai Karang Taraje ini. Momentum sunrise akan lebih menarik
                                            karena matahari terbit dari arah lautan sehingga membuat
                                            pemandangan jauh lebih indah.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row cari-hotel-box">
                    <div className="col">
                        <form action="">
                            <div className="row pariwisata-dicari-title">
                                <div className="col">
                                    <h4>
                                        <img src={cariButton} alt="" /> Search Penginapan
                                    </h4>
                                </div>
                            </div>
                            <div className="row pariwisata-dicari">
                                <div className="col kartu-daftar-hotel-dicari">
                                    <div className="row">
                                        <div className="col">
                                            <b>Kemana ?</b>
                                        </div>
                                    </div>
                                    <div className="row inputan-daftar-hotel">
                                        <div className="col">
                                            <input
                                                type="text"
                                                placeholder="Kota, lingkungan, or alamat"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col kartu-daftar-hotel-dicari">
                                    <div className="row">
                                        <div className="col">
                                            <b>Kapan ?</b>
                                        </div>
                                    </div>
                                    <div className="row inputan-daftar-hotel">
                                        <div className="col">
                                            <input
                                                type="date"
                                                placeholder="Tanggal untuk menginap"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col kartu-daftar-hotel-dicari">
                                    <div className="row">
                                        <div className="col">
                                            <b>Kamar yang Dicari ?</b>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col inputan-daftar-hotel">
                                            <select name="" id="">
                                                <option value="">1 Kamar LUXE</option>
                                                <option value="">2 Kamar LUXE</option>
                                                <option value="">3 Kamar LUXE</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <center>
                                <a href={"/daftarhotel/" + id}>
                                    <button className='button-search-pariwisata'> Cari Sekarang </button>
                                </a>
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
