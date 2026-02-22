# Portafolio - Sebastian Camero

Un portafolio profesional moderno construido con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- Diseño moderno y responsivo
- Animaciones suaves
- Modo oscuro por defecto
- Secciones: Hero, Sobre Mí, Habilidades, Proyectos, Contacto
- Navegación fluida con scroll suave
- Optimizado para SEO

## 🛠️ Tecnologías

- [Next.js 14](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework de estilos
- [Lucide Icons](https://lucide.dev/) - Iconos

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio-sebastian.git

# Entrar al directorio
cd portfolio-sebastian

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🎨 Personalización

### Información Personal
Actualiza los siguientes archivos con tu información:

1. **`src/components/Hero.tsx`** - Nombre, título y redes sociales
2. **`src/components/About.tsx`** - Descripción personal
3. **`src/components/Skills.tsx`** - Tus habilidades y tecnologías
4. **`src/components/Projects.tsx`** - Tus proyectos
5. **`src/components/Contact.tsx`** - Email y links de contacto
6. **`src/components/Footer.tsx`** - Links de redes sociales
7. **`src/app/layout.tsx`** - Metadatos SEO

### Colores
Modifica la paleta de colores en `tailwind.config.ts`

### Imágenes
- Agrega tu foto en la sección About
- Agrega capturas de tus proyectos en la sección Projects

## 🌐 Despliegue

### Vercel (Recomendado)
1. Sube tu código a GitHub
2. Conecta tu repositorio a [Vercel](https://vercel.com)
3. Despliega automáticamente

### Netlify
```bash
npm run build
# Sube la carpeta .next a Netlify
```

## 📝 Formulario de Contacto

El formulario actualmente simula el envío. Para hacerlo funcional, puedes usar:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- Tu propio backend

## 📄 Licencia

MIT License - Siéntete libre de usar este código para tu propio portafolio.

---

Hecho con ❤️ por Sebastian Camero
