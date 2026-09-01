# TransformarParaEducar Web

## Descripción

Plataforma web escolar desarrollada para la institución **TransformarParaEducar**. Permite a autoridades, docentes, padres y alumnos acceder a información institucional, eventos, noticias y gestión de usuarios desde un único sitio centralizado.

## ¿Cómo ejecutar el proyecto?

### Requisitos previos
- Node.js instalado (versión 18 o superior recomendada)
- npm (viene incluido con Node.js)

### Pasos

1. Clonar el repositorio o descomprimir el proyecto
2. Abrir una terminal en la carpeta `EducarParaTransformar-main`
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir el navegador en la dirección que muestra la terminal (generalmente `http://localhost:5173`)

> **Nota:** el backend también debe estar corriendo. Ejecutar en otra terminal desde la carpeta `/backend`: `node server.js`

## Funcionalidades principales

- **Inicio (Home):** presentación de la institución con secciones de bienvenida, niveles educativos y eventos destacados.
- **Noticias:** listado y detalle de noticias institucionales.
- **Eventos:** calendario de eventos escolares con fecha, lugar y categoría.
- **Niveles educativos:** información sobre los niveles (Inicial, Primaria, Secundaria).
- **Bienestar:** sección de salud y bienestar estudiantil.
- **Trabajo:** bolsa de empleos institucional.
- **Dashboard (admin):** panel de administración con gestión de usuarios y eventos escolares (solo para autoridades y docentes).
- **Login / Registro:** autenticación de usuarios con roles diferenciados (alumno, padre, docente, autoridad).

## Integrantes

| Rol                      | Nombre                  |
|--------------------------|-------------------------|
| Backend                  | Miceli, Maximiliano     |
| Diseño y Frontend        | Rodriguez, Augusto      |
| Base de Datos            | Blanco, Horacio         |
| Gestión y QA             | Esquivel, Marcelo       |