import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js';
import { auth } from '../../services/firebase'; // Make sure to adjust the path to your firebase configuration
import Button from '../../components/Button'; // Import your button component

const Landing = () => {
  const typedElement = useRef(null);
  const navigate = useNavigate();
  const [isUserLogin, setIsUserLogin] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Balita', 'Ibu Hamil', 'Ibu Nifas', 'Remaja', 'Lansia'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });

    auth.onAuthStateChanged((user) => {
      setIsUserLogin(!!user);
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const goToLogin = () => navigate('/login');
  const goToDashboard = () => navigate('/dashboard');

  return (
    <section className="flex flex-col md:flex-row justify-center md:items-center h-screen bg-neutral p-4">
      <div className="text-center md:text-left md:w-1/2 md:pl-12 md:items-start">
        <h3 className="text-2xl md:text-3xl font-semibold leading-relaxed">Selamat datang</h3>
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">Integrasi Layanan Primer</h1>
        <h3 className="text-2xl md:text-3xl font-semibold leading-relaxed">
          Program Pendataan <span className="text-primary" ref={typedElement}></span>
        </h3>
        <p className="mt-4 text-lg md:text-xl leading-normal">
          &copy; {currentYear} <a href="https://github.com/will2469" className="text-secondary">willEga</a>. All rights reserved.
        </p>
        <div className="mt-4">
          {isUserLogin ? (
            <Button onClick={goToDashboard} label="Dashboard" variant="primary" />
          ) : (
            <Button onClick={goToLogin} label="Login" variant="primary" />
          )}
        </div>
      </div>

      {/* Image section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={require('../../assets/images/home.svg').default}
          alt="Home Illustration"
          className="w-full h-auto max-w-md mx-auto" // Adjusted class for responsiveness
        />
      </div>
    </section>

  );
};

export default Landing;
