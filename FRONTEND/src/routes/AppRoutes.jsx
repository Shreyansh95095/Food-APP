import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister';
import ChooseRegister from '../pages/auth/ChooseRegister';
import ChooseLogin from '../pages/auth/ChooseLogin';
import UserLogin from '../pages/auth/UserLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
import Home from '../pages/general/Home';
import CreateFood from '../pages/food-partner/CreateFood';
import ChooseAuth from '../pages/auth/ChooseAuth';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ChooseAuth />} />
        <Route path="/login" element={<ChooseLogin />} />
        <Route path="/register" element={<ChooseRegister />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path='/create-food' element={<CreateFood />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes