import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import loginImage from '../../assets/images/login.svg';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State untuk "Remember Me"
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Cek jika pengguna sudah terautentikasi
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/dashboard'); // Redirect ke dashboard jika login
      }
    });

    return () => unsubscribe(); // Bersihkan langganan saat unmount
  }, [navigate]);

  // Ambil email dari localStorage jika ada
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true); // Centang checkbox "Remember Me"
    }
  }, []);

  const handleShowPasswordChange = (e) => {
    setShowPassword(e.target.checked); // Set showPassword sesuai dengan checkbox
    if (e.target.checked) {
      setRememberMe(true); // Centang rememberMe jika showPassword dicentang
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (rememberMe) {
        localStorage.setItem('email', email); // Simpan email ke localStorage
      } else {
        localStorage.removeItem('email'); // Hapus email dari localStorage
      }
      // Redirect ke dashboard akan ditangani di useEffect
    } catch (err) {
      setError(err.message); // Set pesan kesalahan
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral">
      <div className="mb-0 border-none shadow-none xl:w-2/3 card bg-white/70">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="!px-12 !py-12 card-body">
              <div className="text-center">
                <h4 className="mb-2 text-gray-700 font-bold">Welcome Back!</h4>
                <p className="text-slate-500">Sign in to continue.</p>
              </div>

              {error && (
                <div className="mb-3 px-4 py-3 text-sm text-red-500 border border-red-200 rounded-md bg-red-50">
                  {error} {/* Tampilkan pesan kesalahan */}
                </div>
              )}
              <form action="#!" className="mt-10" onSubmit={handleLogin}>
                <div className="mb-3">
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username or email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon="bx bx-envelope"
                    label="Username / Email ID"
                    variant="outlined"
                  />
                  <div id="username-error" className="hidden mt-1 text-sm text-red-500">Please enter a valid email address.</div>
                </div>

                <div className="mb-3">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"} // Tampilkan atau sembunyikan password
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon="bx bx-lock"
                    label="Password"
                    variant="outlined"
                  />
                  <div id="password-error" className="hidden mt-1 text-sm text-red-500">Password must be at least 8 characters long and contain both letters and numbers.</div>
                </div>

                <div className="flex justify-between mb-3">
                  <div className="flex flex-col space-y-2">
                    <Checkbox
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      label="Remember me"
                    />
                    <Checkbox
                      id="showPassword"
                      checked={showPassword}
                      onChange={handleShowPasswordChange}
                      label="Show Password"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <Button type="submit" label="Sign In" variant="primary" />
                </div>
              </form>
            </div>
          </div>

          <div className="mx-2 mt-2 mb-2 border-none shadow-none lg:col-span-7 card bg-white/60">
            <div className="!px-10 !pt-10 h-full !pb-0 card-body flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <div className="shrink-0"></div>
                <div className="mt-auto">
                  <img src={loginImage} alt="Login Illustration" className="md:max-w-[32rem] mx-auto w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
