"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  pregunta: string
  respuesta: string
}

interface FAQCategory {
  categoria: string
  items: FAQItem[]
}

/* ----------------------- DATA ----------------------- */

const faqData: FAQCategory[] = [
  {
    categoria: "General",
    items: [
      {
        pregunta: "¿Qué es RALQ?",
        respuesta:
          "RALQ es una plataforma de Realidad Aumentada que permite visualizar moléculas, laboratorios y modelos 3D de química de manera interactiva y educativa.",
      },
      {
        pregunta: "¿Cómo puedo usar RALQ en mis clases?",
        respuesta:
          "Solo necesitas un dispositivo compatible con RA (como tablet o smartphone) y acceder a nuestra plataforma web. Selecciona el modelo que quieras explorar y disfruta de la experiencia inmersiva.",
      },
      {
        pregunta: "¿Es necesario descargar algo?",
        respuesta:
          "No necesariamente. Muchos modelos se pueden visualizar directamente vía web.",
      },
    ],
  },
  {
    categoria: "Modelos y laboratorios",
    items: [
      {
        pregunta: "¿Qué tipo de moléculas puedo ver?",
        respuesta:
          "Desde moléculas simples como H2O hasta estructuras complejas como proteínas y compuestos orgánicos. Todos los modelos son interactivos.",
      },
      {
        pregunta: "¿Puedo manipular los modelos en 3D?",
        respuesta:
          "Sí. Puedes rotarlos, acercar, alejar animaciones que muestran.",
      },
      {
        pregunta: "¿Se pueden imprimir los modelos en 3D?",
        respuesta:
          "Algunos modelos están optimizados para impresión 3D. Revisamos cada caso y proporcionamos archivos descargables cuando es posible.",
      },
    ],
  },
  {
    categoria: "Cuenta y acceso",
    items: [
      {
        pregunta: "¿Cómo creo una cuenta en RALQ?",
        respuesta:
          "Haz clic en 'Registrarse', ingresa tus datos y confirma tu correo. Podrás empezar a explorar de inmediato con tu cuenta educativa.",
      },
      {
        pregunta: "¿Puedo usar RALQ sin registrarme?",
        respuesta:
          "No, algunos modelos están disponibles de forma pública en Demo, pero el registro permite acceder a contenidos exclusivos.",
      },
      {
        pregunta: "¿Cómo protegen mis datos?",
        respuesta:
          "Tus datos se almacenan cifrados y cumplimos con GDPR y regulaciones de privacidad educativa.",
      },
    ],
  },
  {
    categoria: "Soporte y consultas",
    items: [
      {
        pregunta: "¿Cómo puedo reportar un error o sugerencia?",
        respuesta:
          "Puedes escribirnos directamente desde el formulario de contacto, correo o chat dentro de la plataforma. Respondemos en menos de 24 horas.",
      },
      {
        pregunta: "¿RALQ ofrece tutoriales?",
        respuesta:
          "Sí. Tenemos guías interactivas, videos y documentación para profesores y estudiantes sobre cómo usar cada modelo y funcionalidad.",
      },
      {
        pregunta: "¿Puedo solicitar un modelo específico?",
        respuesta:
          "Claro, puedes solicitarnos la creación de nuevos modelos o laboratorios 3D y evaluaremos tu propuesta según viabilidad educativa.",
      },
    ],
  },
]


/* ----------------------- ACCORDION ITEM ----------------------- */

function AccordionItem({
  pregunta,
  respuesta,
  isOpen,
  onClick,
}: {
  pregunta: string
  respuesta: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="border-b border-border"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 px-6 text-left 
        transition-colors hover:text-primary" // <-- padding horizontal agregado
      >
        <span className="text-sm font-medium text-foreground">
          {pregunta}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-6 w-6 items-center justify-center text-muted-foreground"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 0V12M0 6H12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden px-6" // <-- padding horizontal para el contenido
          >
            <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
              {respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ----------------------- COMPONENTE PRINCIPAL ----------------------- */

export default function PreguntasFrecuentes({
  headerMarginTop = "mt-16",
}: {
  headerMarginTop?: string
}) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) =>
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-16 px-4 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl"> {/* <-- ancho de tarjetas aumentado */}
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${headerMarginTop} mb-12 text-center`}
        >


                <div className="text-center mb-25 mt-25">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3">
          Preguntas frecuentes
        </h1>

        <p className="text-lg text-muted-foreground max-w-1xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestros servicios.
        </p>
      </div>
          {/* <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Preguntas frecuentes
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Encuentra respuestas a las dudas más comunes sobre nuestros servicios.
          </p> */}
        </motion.div>

        {/* CATEGORÍAS */}
        <div className="space-y-13">
          {faqData.map((category) => (
            <motion.div
              key={category.categoria}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {category.categoria}
              </h2>

              <div className="rounded-lg border border-border bg-card shadow-sm">
                {category.items.map((item, index) => {
                  const key = `${category.categoria}-${index}`
                  return (
                    <AccordionItem
                      key={key}
                      pregunta={item.pregunta}
                      respuesta={item.respuesta}
                      isOpen={openItems[key] || false}
                      onClick={() => toggleItem(key)}
                    />
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 rounded-lg border border-border bg-card p-6 text-center shadow-sm"
        >
          <p className="text-sm text-muted-foreground">
            ¿No encontraste lo que buscabas?
          </p>

          <a
            href="/contacto"
            className="mt-2 inline-block text-sm font-medium text-primary 
            underline underline-offset-4 hover:text-primary-3 transition-colors"
          >
            Contáctanos directamente
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}