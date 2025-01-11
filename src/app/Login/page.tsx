"use client";
import React, { useState } from "react";
import "../globals.css";
import Link from "next/link";
import CustomButton from "../../../components/CustomButton";
import CustomInputField from "../../../components/CustomInputField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600">
      {/* Contenedor principal */}
      <div className="flex w-full max-w-6xl overflow-hidden rounded-xl shadow-lg">
        {/* Lado izquierdo - Iniciar sesión */}
        <div className="flex-1 bg-white p-12 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold text-primary-500 text-center mb-6">
              Iniciar Sesión
            </h1>

            {/* Redes sociales */}
            <div className="flex justify-center gap-4 mb-6">
              <img src="/whatsapp1.svg" alt="WhatsApp" className="w-10 h-10 cursor-pointer" />
              <img src="/instagram1.svg" alt="Instagram" className="w-10 h-10 cursor-pointer" />
              <img src="/facebook1.svg" alt="Facebook" className="w-10 h-10 cursor-pointer" />
            </div>

            <p className="text-center text-gray-500 text-sm mb-4">
              Usa tu correo y contraseña
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              {/* Input de Email */}
              <div className="flex flex-col">
                <label className="text-black mb-0">Correo Electrónico</label>
                <CustomInputField
                  label="Correo Electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Input de Contraseña */}
              <div className="flex flex-col">
                <label className="text-black mb-0">Contraseña</label>
                <CustomInputField
                  label="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <p className="text-sm text-gray-500 text-center mt-2">
                ¿Olvidaste tu contraseña?{" "}
                <a href="#" className="text-primary-500 hover:underline">
                  Recuperarla aquí
                </a>
              </p>

              <CustomButton
                title="Iniciar Sesión"
                btnType="submit"
                containerStyles="bg-primary-500 text-white rounded-lg w-full mt-6 py-2"
              />
            </form>
          </div>
        </div>

        {/* Lado derecho - Bienvenido */}
        <div className="flex-1 flex items-center justify-center relative bg-white">
          {/* Semicírculo extendido hacia la derecha */}
          <div className="absolute inset-0 w-[120%] h-full bg-primary-500 rounded-r-[290px] transform scale-x-[-1] -translate-x-[10%]"></div>
          <div className="relative flex flex-col items-center justify-center text-white p-12">
            <h1 className="text-5xl font-bold">¡Bienvenido!</h1>
            <p className="mt-4 text-center text-lg">
              Ingrese sus datos personales para utilizar todas las funciones del sitio
            </p>
            <Link href="/Register">
              <CustomButton
                title="Registrarse"
                btnType="button"
                containerStyles="mt-8 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-500 px-6 py-2 rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
