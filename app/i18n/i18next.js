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
          HOME: "Home",
          SERVICES: "Services",
          RESUME: "Resume",
          WORK: "Work",
          CONTACT: "Contact",
          PHONE: "Phone",
          EMAIL: "Email",
          ADDRESS: "Address",
          LETS_WORK_TOGETHER: "Let’s work together",
          FIRST_NAME: "First name",
          LAST_NAME: "Last name",
          EMAIL_LABEL: "Email",
          PHONE_LABEL: "Phone",
          SELECT_SERVICE: "Select a service",
          FULL_STACK_DEVELOPER: "Full Stack Developer",
          WEB_DESIGNER: "Web Designer",
          API_DEVELOPMENT: "API Development",
          DATABASE_MANAGEMENT: "Database Management",
          RESPONSIVE_WEB_DESIGN: "Responsive Web Design",
          ECOMMERCE_SOLUTIONS: "E-commerce Solutions",
          PERFORMANCE_OPTIMIZATION: "Performance Optimization",
          TYPE_YOUR_MESSAGE: "Type your message here.",
          SEND_MESSAGE: "Send Message",
          EMAIL_SUCCESS: "Email successfully sent!",
          EMAIL_ERROR: "Failed to send email. Error:",
          ABOUT_ME: "About Me",
          ABOUT_DESCRIPTION: "I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. I thrive in collaborative environments and am dedicated to creating efficient and user-friendly applications.",
          NAME: "Carlos Monterrey",
          PHONE: "Phone",
          EXPERIENCE: "Experience",
          SKYPE: "Skype",
          NATIONALITY: "Nationality",
          FREELANCER: "Freelancer",
          LANGUAGES: "Languages",
          MY_EXPERIENCE: "My Experience",
          EXPERIENCE_DESCRIPTION: "I have gained valuable experience working in various roles that have honed my skills in software development.",
          MY_EDUCATION: "My Education",
          EDUCATION_DESCRIPTION: "I have a solid educational background in computer science, complemented by practical experience through internships.",
          MY_SKILLS: "My skills",
          SKILLS_DESCRIPTION: "",
          SEND_MESSAGE: "Send Message",
          MY_EXPERIENCE: "My Experience",
          EXPERIENCE_DESCRIPTION: "I have gained valuable experience working in various roles that have honed my skills in software development.",
          MY_EDUCATION: "My Education",
          EDUCATION_DESCRIPTION: "I have a solid educational background in computer science, complemented by practical experience through internships.",
          DEGREE:"Bachelor’s Degree in Computer Science",
          UPR:"University of Pinar del Río, Cuba",
          FULL_STACK_DEVELOPER: "Full Stack Developer",
          WEB_DESIGNER: "Web Designer",
          API_DEVELOPMENT: "API Development",
          DATABASE_MANAGEMENT: "Database Management",
          RESPONSIVE_WEB_DESIGN: "Responsive Web Design",
          ECOMMERCE_SOLUTIONS: "E-commerce Solutions",
          PERFORMANCE_OPTIMIZATION: "Performance Optimization",
          SERVICE_DESCRIPTION_1: "Expert in building scalable web applications using modern technologies such as Angular, Node.js, and MongoDB.",
          SERVICE_DESCRIPTION_2: "Creating visually appealing and user-friendly designs tailored to client needs, ensuring a seamless user experience.",
          SERVICE_DESCRIPTION_3: "Designing and developing RESTful APIs to enable smooth communication between front-end and back-end systems.",
          SERVICE_DESCRIPTION_4: "Expertise in database design, optimization, and management using SQL and NoSQL databases.",
          SERVICE_DESCRIPTION_5: "Building responsive websites that provide an optimal viewing experience across a wide range of devices.",
          SERVICE_DESCRIPTION_6: "Developing robust e-commerce platforms with secure payment gateways and user-friendly interfaces.",
          SERVICE_DESCRIPTION_7: "Analyzing and optimizing web applications for improved speed and performance.",
          PROJECT_1_TITLE: "Sceiba",
          PROJECT_1_DESCRIPTION: "I successfully migrated a system from Angular version 8 to version 17, with a strong emphasis on reducing production bundle sizes and enhancing loading times. This migration involved replacing outdated libraries that were incompatible with Angular 17 with modern, up-to-date alternatives. Conducted comprehensive quality assurance tests that enabled me to identify and rectify software errors, significantly improving overall quality and optimizing performance. Enhanced search functionalities and interoperability between various systems at the University of Pinar del Río by developing a property graph, facilitating better data management and retrieval.",
          PROJECT_2_TITLE: "Senfima Produkto",
          PROJECT_2_DESCRIPTION: "I led the development of a business management system from scratch, specifically designed to optimize operations for a warehouse and point of sale. This software enables efficient tracking of inventory and sales processes, facilitating the daily management of the business.",
          PROJECT_3_TITLE: "RDF Graph for Sceiba",
          PROJECT_3_DESCRIPTION: "I developed a comprehensive RDF knowledge graph using data from Sceiba, which significantly enhanced interoperability and facilitated more semantic information retrieval. This graph not only streamlined data access but also enabled the integration of advanced artificial intelligence tasks, allowing for more intelligent data processing and analysis. By leveraging the semantic capabilities of the RDF model, users can now perform complex queries and gain deeper insights from the data, fostering a more intuitive and efficient approach to information discovery.",
          LIVE_PROJECT: "Live project",
          GITHUB_REPOSITORY: "Github repository",
          HIREME:"Hire me",
          YEARS_OF_EXPERIENCE: "Years of experience",
          TECHNOLOGIES_MASTERED: "Technologies mastered",
          PROJECTS: "Projects",
          CODE_COMMITS: "Code commits in the last year",
          

        },
      },
      es: {
        translation: {
          SOFTWARE_DEV: "Desarrollador de Software",
          HELLO_I_AM: "Hola, soy",
          NAME: "Carlos Monterrey",
          DESCRIPTION: "Soy un desarrollador web dedicado con pasión por crear soluciones tecnológicas innovadoras. Me enfoco en crear productos de alta calidad que no solo cumplen con estándares rigurosos, sino que también me impulsan a mejorar continuamente mis habilidades y conocimientos. Estoy motivado por el deseo de aprender constantemente y optimizar tanto mi trabajo como las experiencias de usuario que ayudo a crear.",
          DOWNLOAD_CV: "Descargar CV",
          HOME: "Inicio",
          SERVICES: "Servicios",
          RESUME: "Currículum",
          WORK: "Trabajo",
          CONTACT: "Contacto",
          PHONE: "Teléfono",
          EMAIL: "Correo electrónico",
          ADDRESS: "Dirección",
          LETS_WORK_TOGETHER: "Trabajemos juntos",
          FIRST_NAME: "Nombre",
          LAST_NAME: "Apellido",
          EMAIL_LABEL: "Correo electrónico",
          PHONE_LABEL: "Teléfono",
          SELECT_SERVICE: "Selecciona un servicio",
          FULL_STACK_DEVELOPER: "Desarrollador Full Stack",
          WEB_DESIGNER: "Diseñador Web",
          API_DEVELOPMENT: "Desarrollo de API",
          DATABASE_MANAGEMENT: "Gestión de Base de Datos",
          RESPONSIVE_WEB_DESIGN: "Diseño Web Responsivo",
          ECOMMERCE_SOLUTIONS: "Soluciones de Comercio Electrónico",
          PERFORMANCE_OPTIMIZATION: "Optimización de Rendimiento",
          TYPE_YOUR_MESSAGE: "Escribe tu mensaje aquí.",
          SEND_MESSAGE: "Enviar Mensaje",
          EMAIL_SUCCESS: "¡Correo electrónico enviado con éxito!",
          EMAIL_ERROR: "Error al enviar el correo electrónico:",
          ABOUT_ME: "Sobre mí",
          ABOUT_DESCRIPTION: "Soy un apasionado desarrollador Full Stack con una sólida base en tecnologías tanto de front-end como de back-end. Me destaco en entornos colaborativos y estoy dedicado a crear aplicaciones eficientes y fáciles de usar.",
          NAME: "Carlos Monterrey",
          PHONE: "Teléfono",
          EXPERIENCE: "Experiencia",
          SKYPE: "Skype",
          NATIONALITY: "Nacionalidad",
          FREELANCER: "Freelancer",
          LANGUAGES: "Idiomas",
          MY_EXPERIENCE: "Mi Experiencia",
          EXPERIENCE_DESCRIPTION: "He adquirido valiosa experiencia trabajando en varios roles que han perfeccionado mis habilidades en desarrollo de software.",
          MY_EDUCATION: "Mi Educación",
          EDUCATION_DESCRIPTION: "Tengo una sólida formación educativa en informática, complementada con experiencia práctica a través de pasantías.",
          MY_SKILLS: "Mis habilidades",
          SKILLS_DESCRIPTION: "",
          MY_EXPERIENCE: "Mi Experiencia",
          EXPERIENCE_DESCRIPTION: "He adquirido valiosa experiencia trabajando en varios roles que han perfeccionado mis habilidades en desarrollo de software.",
          MY_EDUCATION: "Mi Educación",
          EDUCATION_DESCRIPTION: "Tengo una sólida formación educativa en informática, complementada con experiencia práctica a través de pasantías.",
          DEGREE:"Ingeniería en Informática",
          UPR:"Univeridad de Pinar del Río, Cuba",
          FULL_STACK_DEVELOPER: "Desarrollador Full Stack",
          WEB_DESIGNER: "Diseñador Web",
          API_DEVELOPMENT: "Desarrollo de API",
          DATABASE_MANAGEMENT: "Gestión de Base de Datos",
          RESPONSIVE_WEB_DESIGN: "Diseño Web Responsivo",
          ECOMMERCE_SOLUTIONS: "Soluciones de Comercio Electrónico",
          PERFORMANCE_OPTIMIZATION: "Optimización de Rendimiento",
          SERVICE_DESCRIPTION_1: "Experto en la construcción de aplicaciones web escalables utilizando tecnologías modernas como Angular, Node.js y MongoDB.",
          SERVICE_DESCRIPTION_2: "Creando diseños visualmente atractivos y fáciles de usar adaptados a las necesidades del cliente, asegurando una experiencia de usuario sin interrupciones.",
          SERVICE_DESCRIPTION_3: "Diseño y desarrollo de  APIs RESTful para permitir una comunicación fluida entre los sistemas de front-end y back-end.",
          SERVICE_DESCRIPTION_4: "Experiencia en diseño, optimización y gestión de bases de datos utilizando bases de datos SQL y NoSQL.",
          SERVICE_DESCRIPTION_5: "Construyendo sitios web responsivos que proporcionan una experiencia de visualización óptima en una amplia gama de dispositivos.",
          SERVICE_DESCRIPTION_6: "Desarrollo de  plataformas de comercio electrónico robustas con pasarelas de pago seguras e interfaces fáciles de usar.",
          PROJECT_1_TITLE: "Sceiba",
          PROJECT_1_DESCRIPTION: "Migré exitosamente un sistema de Angular versión 8 a versión 17, con un fuerte énfasis en reducir el tamaño de los paquetes de producción y mejorar los tiempos de carga. Esta migración involucró reemplazar bibliotecas obsoletas que eran incompatibles con Angular 17 por alternativas modernas y actualizadas. Realicé pruebas de aseguramiento de calidad que me permitieron identificar y corregir errores de software, mejorando significativamente la calidad general y optimizando el rendimiento. Mejoré las funcionalidades de búsqueda y la interoperabilidad entre varios sistemas en la Universidad de Pinar del Río al desarrollar un grafo de propiedades, facilitando una mejor gestión y recuperación de datos.",
          PROJECT_2_TITLE: "Senfima Produkto",
          PROJECT_2_DESCRIPTION: "Lideré el desarrollo de un sistema de gestión empresarial desde cero, diseñado específicamente para optimizar las operaciones de un almacén y punto de venta. Este software permite un seguimiento eficiente de los procesos de inventario y ventas, facilitando la gestión diaria del negocio.",
          PROJECT_3_TITLE: "Grafo RDF para Sceiba",
          PROJECT_3_DESCRIPTION: "Desarrollé un grafo de conocimiento RDF integral utilizando datos de Sceiba, lo que mejoró significativamente la interoperabilidad y facilitó una recuperación de información más semántica. Este grafo optimizó el acceso a los datos,  también permitió la integración de tareas avanzadas de inteligencia artificial, permitiendo un procesamiento y análisis de datos más inteligentes. Al aprovechar las capacidades semánticas del modelo RDF, los usuarios ahora pueden realizar consultas complejas y obtener información más profunda de los datos, fomentando un enfoque más intuitivo y eficiente para el descubrimiento de información.",
          LIVE_PROJECT: "Proyecto en vivo",
          GITHUB_REPOSITORY: "Repositorio de Github",
          HIREME:"Contáctame", 
          YEARS_OF_EXPERIENCE: "Años de experiencia",
          TECHNOLOGIES_MASTERED: "Tecnologías dominadas",
          PROJECTS: "Proyectos",
          CODE_COMMITS: "Commits de código en el último año",

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