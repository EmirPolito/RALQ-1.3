"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.footer
      className="bg-muted/30 border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* NUEVA ESTRUCTURA — 4 columnas balanceadas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Logo y descripción */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-foreground mb-3">RALQ</h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Plataforma educativa que enseña química mediante modelos 3D 
              y experiencias en Realidad Aumentada.
            </p>

            {/* Redes sociales */}
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="mailto:emirpolitog@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://github.com/EmirPolito?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/emir-polito-g"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://twitter.com/arcomsedu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Empresa */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><Link href="/sobre-nosotros" className="text-sm text-muted-foreground hover:text-foreground">Sobre Nosotros</Link></li>
              <li><Link href="/tecnologia" className="text-sm text-muted-foreground hover:text-foreground">Tecnología</Link></li>
              <li><Link href="/educacion" className="text-sm text-muted-foreground hover:text-foreground">Educación</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contacto</Link></li>
            </ul>
          </motion.div>

          {/* Fundadores */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Fundadores</h3>
            <ul className="space-y-3">
              <li><Link href="/productos" className="text-sm text-muted-foreground hover:text-foreground">Emir Polito Guevara</Link></li>
              <li><Link href="/productos" className="text-sm text-muted-foreground hover:text-foreground">Irving Esteban Molina Méndez</Link></li>
              <li><Link href="/productos" className="text-sm text-muted-foreground hover:text-foreground">Cristian Daniel Barraza Hernández</Link></li>
              <li><Link href="/productos" className="text-sm text-muted-foreground hover:text-foreground">Plataforma Educativa</Link></li>
            </ul>
          </motion.div>

          {/* Recursos */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">Documentación</Link></li>
            </ul>
          </motion.div>

        </div>

        {/* Línea inferior */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 RALQ. Todos los derechos reservados.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-foreground">Privacidad</Link>
              <Link href="/terminos" className="text-sm text-muted-foreground hover:text-foreground">Términos</Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">Cookies</Link>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;
