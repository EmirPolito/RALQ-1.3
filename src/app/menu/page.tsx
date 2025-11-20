"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  // Simulación de sesión
  const [userEmail, setUserEmail] = useState("usuario@ejemplo.com");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-md">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Image
            src="/img/logo_ralq_color-removebg-preview.png"
            alt="Logo RALQ"
            width={120}
            height={120}
            className="object-contain"
          />
          {/* Volver botón */}
          <Link href="/menu" className="volver-boton">
            {/* Puedes agregar icono aquí */}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <p>Bienvenido :)</p>

          {/* Redes */}
          <a href="https://www.facebook.com/share/1AnZW5VRF9/">
            <Image
              src="/img/contctos/logofacebook.png"
              alt="Facebook"
              width={32}
              height={32}
              className="icono-red"
            />
          </a>
          <a href="https://wa.me/message/ZB3EHUSWCMQFE1?src=qr">
            <Image
              src="/img/contctos/logowhats.png"
              alt="WhatsApp"
              width={32}
              height={32}
              className="icono-red"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=ralq.utsv@gmail.com&su=Consulta&body=Hola, quisiera más información."
            target="_blank"
          >
            <Image
              src="/img/contctos/logogmail.png"
              alt="Gmail"
              width={32}
              height={32}
              className="icono-red"
            />
          </a>

          {/* User Menu */}
          <div className="relative">
            <Image
              src="/img/user.jpg"
              alt="Usuario"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
              onClick={toggleMenu}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50 p-3">
                <p className="font-bold">{userEmail}</p>
                <Link href="/" className="block mt-2 text-blue-600 hover:underline">
                  Cerrar sesión
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ENCABEZADO */}
      <div className="bg-gray-100 py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">APRENDE Y ESTUDIA SOBRE...</h1>
      </div>

      {/* MAIN */}
      <main className="flex-1 px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {/* Estructuras Moleculares */}
          <Link href="/estructuras-mol" className="menu-item fade-in">
            <Image
              src="/img/img-menu/3 (2).png"
              alt="Estructuras Moleculares"
              width={200}
              height={200}
            />
          </Link>

          {/* Laboratorios */}
          <Link href="/laboratorios" className="menu-item fade-in">
            <Image src="/img/img-menu/tuslabs.png" alt="Instrumentaria de Laboratorio" width={200} height={200} />
          </Link>

          {/* Tabla periódica */}
          <Link href="/tabla-periodica" className="menu-item fade-in">
            <Image src="/img/img-menu/tablape.png" alt="Elementos Químicos" width={200} height={200} />
          </Link>

          {/* Otros */}
          <Link href="https://www.youtube.com/watch?v=cubEOJ_gz3w" className="menu-item fade-in">
            <Image src="/img/img-menu/4 (2).png" alt="Explora tu Laboratorio" width={200} height={200} />
          </Link>
          <Link
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__TR___tUOTI4WkFURU0yR1RZQkdLTFU4OFpZWjgyTS4u"
            className="menu-item fade-in"
          >
            <Image src="/img/img-menu/5.png" alt="Evalúate" width={200} height={200} />
          </Link>
          <Link href="https://wordwall.net/es/resource/13254497/elementos-de-laboratorio" className="menu-item fade-in">
            <Image src="/img/img-menu/6.png" alt="Nuevo botón" width={200} height={200} />
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#434e4e] text-white py-16 px-6 md:px-24 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Contacto */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-bold mb-6">Contacto</h4>
            <p className="text-lg leading-relaxed text-center md:text-left">
              Facebook: <a href="#" className="hover:underline">RALQ</a><br />
              Correo: <a href="mailto:ralq.utsv@mail.com" className="hover:underline">ralq.utsv@mail.com</a><br />
              Teléfono: <a href="tel:+123456789" className="hover:underline">+123 456 789</a>
            </p>
          </div>

          {/* Logo centrado */}
          <div className="flex justify-center items-center">
            <Image
              src="/img/utsv-log.png"
              alt="UTSV Logo"
              width={144}
              height={144}
              className="object-contain"
            />
          </div>

          {/* Creadores */}
          <div className="text-center md:text-right">
            <h4 className="text-3xl font-bold mb-6">Creadores</h4>
            <p className="text-lg leading-relaxed text-center md:text-right">
              Emir Polito Guevara<br />
              Irving Esteban Molina Méndez<br />
              Cristian Daniel Barraza Hernández
            </p>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-12"></div>
        <div className="mt-6 text-center text-lg text-gray-200">
          2024 &copy; Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
