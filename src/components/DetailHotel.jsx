import React from 'react'
import backButton from '../assets/img/back.png'
import carouselImage1 from '../assets/img/carousel_hotel/1.jpg'
import carouselImage2 from '../assets/img/carousel_hotel/2.jpg'
import carouselImage3 from '../assets/img/carousel_hotel/3.jpg'
import carouselImage4 from '../assets/img/carousel_hotel/4.jpg'
import carouselImage5 from '../assets/img/carousel_hotel/5.jpg'
import restoranIcon from '../assets/img/fasilitas_img/restoran.png'
import wifiIcon from '../assets/img/fasilitas_img/wifi.png'
import renangIcon from '../assets/img/fasilitas_img/renang.png'
import resepsionIcon from '../assets/img/fasilitas_img/service.png'
import tiketCleaningIcon from '../assets/img/fasilitas_img/cuci.png'
import spaIcon from '../assets/img/fasilitas_img/spa.png'
import parkirIcon from '../assets/img/fasilitas_img/parkir.png'
import ruangRapatIcon from '../assets/img/fasilitas_img/meeting.png'
import logoWhite from '../assets/img/logo-white.png'
import fotoProfile from '../assets/img/profile-default.png'
import { useParams } from 'react-router-dom'

export default function DetailHotel() {
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
            <div className="container container-gambar-hotel">
                <div className="row deskripsi-hotel-back-button">
                    <div className="col-2">
                        <a href={"/daftarhotel/" + id}>
                            <img src={backButton} alt="" width="20%" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col deskripsi-hotel-title">
                        <div className="row">
                            <div className="col deskripsi-hotel-title-jenis">
                                <mark>LUKE</mark>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col deskripsi-hotel-title-nama-hotel">
                                Dhiva Hotel
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">91% (Rating) | Sukajadi</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "2%" }}>
                <div className="row">
                    <div className="col-7 deskripsi-hotel">
                        <div className="row">
                            <div className="col title-deskripsi-hotel">
                                <h2>Deskripsi</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col detail-deskripsi-hotel">
                                <p>
                                    Restoran yang berada dibilangan Rangkasbitung, berada ditengah -
                                    tengah kota menjadikan hotel dan restoran kami berada ditempat
                                    yang strategis untuk anda yang sedang berwisata atau mencari
                                    tempat beristirahat dan makan yang unik nan nikmat. Restoran kami
                                    bernuansa adat Baduy dan Lebak dengan makanan khasnya pula.
                                    Suasana yang nyaman yang aman untuk anak dan instagramable
                                    menjadikan tempat kami nyaman untuk bersantap dan berkumpul dengan
                                    rekan atau sanak keluarga.
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
                                                src={carouselImage1}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item image-carousel">
                                            <img
                                                src={carouselImage2}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item image-carousel">
                                            <img
                                                src={carouselImage3}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item image-carousel">
                                            <img
                                                src={carouselImage4}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item image-carousel">
                                            <img
                                                src={carouselImage5}
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
                        <div className="row deskripsi-hotel-fasilitas-title">
                            <div className="col">
                                <h2>Fasilitas</h2>
                            </div>
                        </div>
                        <div className="row deskripsi-hotel-fasilitas-detail">
                            <div className="col">
                                <div className="row">
                                    <p>
                                        <img src={restoranIcon} alt="" /> Restoran
                                    </p>
                                </div>
                                <div className="row">
                                    <p>
                                        <img src={wifiIcon} alt="" /> Wifi
                                    </p>
                                </div>
                                <div className="row">
                                    <p>
                                        <img src={renangIcon} alt="" /> Kolam Renang
                                    </p>
                                </div>
                                <div className="row">
                                    <p>
                                        <img src={resepsionIcon} alt="" /> Resepsionis 24 Jam
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <p>
                                        <img src={tiketCleaningIcon} alt="" />Ticket Cleaning
                                    </p>
                                </div>
                                <div className="row">
                                    <p>
                                        <img src={spaIcon} alt="" /> Spa
                                    </p>
                                </div>
                                <div className="row">
                                    <p>
                                        <img src={parkirIcon} alt="" /> Parkir
                                    </p>
                                </div>
                                <div className="row">
                                    <p>
                                        <img src={ruangRapatIcon} alt="" /> Ruang Rapat
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row deskripsi-hotel-maps">
                            <div className="col">
                                <iframe
                                    width={500}
                                    height={200}
                                    frameBorder={0}
                                    src="https://www.bing.com/maps/embed?h=200&w=500&cp=-6.535330751364327~107.04527952678632&lvl=7.346830156691391&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                                    scrolling="no"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col booking-section">
                        <div className="row booking-section-box">
                            <div className="col">
                                <div className="row booking-section-title">
                                    <div className="col">
                                        <h2>Booking</h2>
                                    </div>
                                </div>
                                <div className="row booking-date">
                                    <div className="col">
                                        <div className="container booking-date-box">
                                            <div className="row">
                                                <div className="col">
                                                    <p>Check-in</p>
                                                </div>
                                                <div className="col">
                                                    <p>Check-Out</p>
                                                </div>
                                            </div>
                                            <div className="row inputan-booking">
                                                <div className="col">
                                                    <form action="">
                                                        <input type="date" />
                                                    </form>
                                                </div>
                                                <div className="col">
                                                    <form action="">
                                                        <input type="date" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col booking-button">
                                        <center>
                                            <a href={"/checkout/" + id}>
                                                <button className='button-booking-hotel'> Booking </button>
                                            </a>
                                        </center>
                                    </div>
                                </div>
                            </div>
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
