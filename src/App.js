import React from 'react'
import Beranda from './components/Beranda'
import Login from './components/Login'
import Register from './components/Register'
import LupaSandi from './components/LupaSandi'
import UbahSandi from './components/UbahSandi'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import DaftarHotel from './components/DaftarHotel'
import DaftarPariwisata from './components/DaftarPariwisata'
import DetailHotel from './components/DetailHotel'
import DetailPariwisata from './components/DetailPariwisata'
import CheckOut from './components/CheckOut'
import Pembayaran from './components/Pembayaran'
import BerandaLogin from './components/BerandaLogin'
import NotFound from './components/NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda/:id" element={<BerandaLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lupasandi" element={<LupaSandi />} />
          <Route path="/ubahsandi/:id" element={<UbahSandi />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/editprofile/:id" element={<EditProfile />} />
          <Route path="/daftarhotel/:id" element={<DaftarHotel />} />
          <Route path="/daftarpariwisata/:id" element={<DaftarPariwisata />} />
          <Route path="/detailhotel/:id" element={<DetailHotel />} />
          <Route path="/detailpariwisata/:id" element={<DetailPariwisata />} />
          <Route path="/checkout/:id" element={<CheckOut />} />
          <Route path="/pembayaran/:id" element={<Pembayaran />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
