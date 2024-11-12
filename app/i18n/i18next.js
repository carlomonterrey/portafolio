// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          SOFTWARE_DEV: "Software Developer",
          HELLO_I_AM: "Hello I am",
          NAME: "Carlos Monterrey",
          DESCRIPTION: "I am a dedicated web developer with a passion for crafting innovative tech solutions. I focus on creating high-quality products that not only meet rigorous standards but also push me to continuously improve my skills and knowledge. I’m driven by a desire to constantly learn and optimize both my work and the user experiences I help create.",
          DOWNLOAD_CV: "Download CV",
        },
      },
      es: {
        translation: {
          SOFTWARE_DEV: "Desarrollador de Software",
          HELLO_I_AM: "Hola, soy",
          NAME: "Carlos Monterrey",
          DESCRIPTION: "Soy un desarrollador web dedicado con pasión por crear soluciones tecnológicas innovadoras. Me enfoco en crear productos de alta calidad que no solo cumplen con estándares rigurosos, sino que también me impulsan a mejorar continuamente mis habilidades y conocimientos. Estoy motivado por el deseo de aprender constantemente y optimizar tanto mi trabajo como las experiencias de usuario que ayudo a crear.",
          DOWNLOAD_CV: "Descargar CV",
        },
      },
    },
    lng: "es", // Idioma por defecto
    fallbackLng: "en", // Idioma de reserva
    interpolation: {
      escapeValue: false, // React ya escapa valores
    },
  });

export default i18n;