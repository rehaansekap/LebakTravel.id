import React from 'react'
import fotoProfile from '../assets/img/profile-default.png'
import editIcon from '../assets/img/edit.png'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import logoWhite from '../assets/img/logo-white.png'

export default function Profile() {
    let { id } = useParams();

    const [data, setData] = useState([{}])
    console.log(data)
    useEffect(() => {
        Axios.get('http://localhost:9080/profile/' + id).then((response) => {
            setData(response.data);
        })
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbir">
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
            <div className="container profile">
                <div className="row header-profile">
                    <div className="col-2 header-profile-image">
                        <img src={fotoProfile} alt="" width="100%" />
                    </div>
                    <div className="col header-profile-identitas">
                        <div className="row  header-profile-name">
                            <div className="col">
                                <p>{data.nama}</p>
                            </div>
                        </div>
                        <div className="row header-profile-email">
                            <div className="col">
                                <p>E-mail: {data.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 header-profile-edit-profile">
                        <a href={"/editprofile/" + id} className="header-profile-edit-profile-button">
                            <img src={editIcon} alt="" />  Edit Profile
                        </a>
                    </div>
                </div>
            </div>
            <div className="container profile-identitas-box">
                <div className="profile-identitas">
                    <div className="row profile-identitas-title">
                        <div className="col">
                            <h3>Data Pribadi</h3>
                        </div>
                    </div>
                    <div className="row profile-identitas-detail">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <h5>Nama Lengkap</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p>{data.nama}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h5>Username</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p>{data.username}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h5>Tanggal, Bulan, Tahun Lahir</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p>{data.tanggal_lahir}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <h5>E-Mail</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p>{data.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h5>Password</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p type="password">{data.password}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h5>Nomor Telepon</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p>{data.nomor_telepon}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <footer style={{ paddingTop: "10%", paddingBottom: "2%" }}>
                    Terms of Service. Privacy Policy. Cookie Settings <br /> 2022 travel.id.
                    All Rights Reserved.
                </footer>
            </center>
        </>
    )
}
