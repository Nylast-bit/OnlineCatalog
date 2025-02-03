"use client";
import React, { useState } from "react";
import Link from "next/link";
import CustomButton from "../../../components/CustomButton";
import CustomInputField from "../../../components/CustomInputField";
import "../globals.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: name ? "" : "Obligatorio llenar",
      email: email ? (validateEmail(email) ? "" : "Introducir un email válido") : "Obligatorio llenar",
      password: password ? "" : "Obligatorio llenar",
      confirmPassword: confirmPassword
        ? confirmPassword === password
          ? ""
          : "Contraseñas no son iguales"
        : "Obligatorio llenar",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) return;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("ConfirmPassword:", confirmPassword);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
      <a className="absolute mt-[-120px] left-5 text-white text-2xl z-10" href="/">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-9">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
</a>

        <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden mt-[-150px]">
          {/* Lado izquierdo - Semi-círculo */}
          <div className="flex-1 relative p-8 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-[120%] h-full bg-primary-500 rounded-l-full transform scale-x-[-1] -translate-x-[10%]"></div>
            <div className="relative flex flex-col items-center justify-center text-white p-12">
              <h1 className="text-5xl font-bold">¡Hola!</h1>
              <p className="mt-4 text-center text-lg">
                Regístrese con sus datos personales para utilizar todas las funciones del sitio
              </p>
              <Link href="/Login">
                <CustomButton
                  title="Iniciar Sesión"
                  btnType="button"
                  containerStyles="mt-8 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-500 px-6 py-2 rounded-lg"
                />
              </Link>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="flex-1 p-12 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-primary-500 mb-6 text-center">
              Registrarse
            </h1>

            {/* Redes sociales */}
            <div className="flex justify-center gap-4 mb-6">
              <img src="/whatsapp1.svg" alt="WhatsApp" className="w-10 h-10 cursor-pointer" />
              <img src="/instagram1.svg" alt="Instagram" className="w-10 h-10 cursor-pointer" />
              <img src="/facebook1.svg" alt="Facebook" className="w-10 h-10 cursor-pointer" />
            </div>

            <p className="text-center text-gray-500 text-sm mb-4">
              Use su correo electrónico para registrarse
            </p>

            <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full max-w-sm">
            {/* Input de Nombre */}
              <div className="flex flex-col">
                <label className="text-black mb-[-20px]">Nombre</label> {/* Ajusta el margen aquí */}
                <div className={`custom-input-wrapper ${errors.name ? "border-red-500" : ""}`}>
                  <CustomInputField
                    label="Nombre"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>

              {/* Input de Email */}
              <div className="flex flex-col">
                <label className="text-black mb-[-20px]">Correo Electrónico</label> {/* Ajusta el margen aquí */}
                <div className={`custom-input-wrapper ${errors.email ? "border-red-500" : ""}`}>
                  <CustomInputField
                    label="Correo Electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              {/* Input de Contraseña */}
              <div className="flex flex-col">
                <label className="text-black mb-[-20px]">Contraseña</label> {/* Ajusta el margen aquí */}
                <div className={`custom-input-wrapper ${errors.password ? "border-red-500" : ""}`}>
                  <CustomInputField
                    label="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
              </div>

              {/* Input de Confirmar Contraseña */}
              <div className="flex flex-col">
                <label className="text-black mb-[-20px]">Confirmar Contraseña</label> {/* Ajusta el margen aquí */}
                <div className={`custom-input-wrapper ${errors.confirmPassword ? "border-red-500" : ""}`}>
                  <CustomInputField
                    label="Confirmar Contraseña"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
              </div>

              {/* Botón de Registrarse */}
              <CustomButton
                title="Registrarse"
                btnType="submit"
                containerStyles="bg-primary-500 text-white rounded-lg w-full mt-6 py-2"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
