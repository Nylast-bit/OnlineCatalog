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

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Lado izquierdo - Semi-círculo */}
        <div className="flex-1 relative p-8 flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-[120%] h-full bg-primary-500 rounded-l-full transform scale-x-[-1] -translate-x-[10%]"></div>
          <div className="relative flex flex-col items-center justify-center text-white p-12">
            <h1 className="text-5xl font-bold">¡Hola!</h1>
            <p className="mt-4 text-center text-lg">
              Registrese con sus datos personales para utilizar todas las funciones del sitio
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
            Use su correo electronico para registrarse
          </p>

          <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full max-w-sm">
            {/* Input de Nombre */}
            <div className="flex flex-col">
              <label className="text-black mb-1">Nombre</label>
              <CustomInputField
                label="Nombre"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Input de Email */}
            <div className="flex flex-col">
              <label className="text-black mb-1">Correo Electrónico</label>
              <CustomInputField
                label="Correo Electrónico"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Input de Contraseña */}
            <div className="flex flex-col">
              <label className="text-black mb-1">Contraseña</label>
              <CustomInputField
                label="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
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
    </main>
  );
};

export default Register;
