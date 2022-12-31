import React from 'react'
import fotoProfile from '../assets/img/profile-default.png'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import logoWhite from '../assets/img/logo-white.png'

export default function EditProfile() {
    let { id } = useParams();

    const [data, setData] = useState([{}])
    console.log(data)
    useEffect(() => {
        Axios.get('http://localhost:9080/profile/' + id).then((response) => {
            setData(response.data);
        })
    }, [])

    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [tanggal_lahir, setTanggal_Lahir] = useState('');
    const [nomor_telepon, setNomor_Telepon] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:9080/editprofile/' + id).then((response) => {
            setNama(response.data.nama);
            setUsername(response.data.username);
            setTanggal_Lahir(response.data.tanggal_lahir);
            setNomor_Telepon(response.data.nomor_telepon);
            setEmail(response.data.email);
            setPassword(response.data.password);
        })
    }, [])

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            nama: nama,
            username: username,
            tanggal_lahir: tanggal_lahir,
            nomor_telepon: nomor_telepon,
            email: email,
            password: password
        };

        Axios.put(`http://localhost:9080/editprofile/` + id, user)
            .then(res => {
                window.location = "/profile/" + id
            })
    }


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
                </div>
            </div>
            <div className="container profile-identitas-box">
                <div className="profile-identitas">
                    <div className="row profile-identitas-title">
                        <div className="col">
                            <h3>Edit Data Pribadi</h3>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row profile-identitas-detail">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <h5>Nama Lengkap</h5>
                                            </div>
                                        </div>
                                        <div className="row inputan-edit-profile">
                                            <div className="col">
                                                <input type="text" placeholder={data.nama} value={nama} onChange={(event) => setNama(event.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <h5>Username</h5>
                                            </div>
                                        </div>
                                        <div className="row inputan-edit-profile">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    placeholder={data.username} value={username} onChange={(event) => setUsername(event.target.value)} required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <h5>Tanggal, Bulan, Tahun Lahir</h5>
                                            </div>
                                        </div>
                                        <div className="row inputan-edit-profile">
                                            <div className="col">
                                                <input
                                                    type="date"
                                                    placeholder={data.tanggal_lahir} value={tanggal_lahir} onChange={(event) => setTanggal_Lahir(event.target.value)} required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col">
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <h5>E-Mail</h5>
                                            </div>
                                        </div>
                                        <div className="row inputan-edit-profile">
                                            <div className="col">
                                                <input type="email" placeholder={data.email} value={email} onChange={(event) => setEmail(event.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <h5>Password</h5>
                                            </div>
                                        </div>
                                        <div className="row inputan-edit-profile">
                                            <div className="col">
                                                <input
                                                    type="password"
                                                    placeholder="Masukan Password Baru" value={password} onChange={(event) => setPassword(event.target.value)} required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <h5>Nomor Telepon</h5>
                                            </div>
                                        </div>
                                        <div className="row inputan-edit-profile">
                                            <div className="col">
                                                <input type="number" placeholder={data.nomor_telepon} value={nomor_telepon} onChange={(event) => setNomor_Telepon(event.target.value)} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row edit-profile-button">
                            <div className="col">
                                <center>
                                    <input type="submit" defaultValue="Edit Profile" />
                                </center>
                            </div>
                        </div>
                    </form>
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
