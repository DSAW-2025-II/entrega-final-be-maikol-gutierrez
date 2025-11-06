# Guía de Despliegue - Backend

Esta guía te ayudará a desplegar el backend de Wheells en diferentes plataformas.

## 📋 Requisitos Previos

- Node.js 18+ instalado
- Cuenta en una plataforma de despliegue (Render, Railway, Vercel, etc.)
- Git configurado

## 🔧 Variables de Entorno

Antes de desplegar, configura las siguientes variables de entorno:

```
PORT=5000 (o el puerto que asigne tu plataforma)
NODE_ENV=production
JWT_SECRET=tu_clave_secreta_super_segura_aqui
FRONTEND_URL=https://tu-frontend.com
```

## 🚀 Opciones de Despliegue

### 1. Render.com (Recomendado)

1. Ve a [Render.com](https://render.com) y crea una cuenta
2. Crea un nuevo "Web Service"
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
5. Agrega las variables de entorno en la sección "Environment"
6. Deploy!

El archivo `render.yaml` ya está configurado para facilitar el despliegue.

### 2. Railway

1. Ve a [Railway.app](https://railway.app) y crea una cuenta
2. Click en "New Project" → "Deploy from GitHub repo"
3. Selecciona tu repositorio
4. Railway detectará automáticamente Node.js
5. Agrega las variables de entorno en la pestaña "Variables"
6. El archivo `railway.json` ya está configurado

### 3. Vercel

1. Ve a [Vercel.com](https://vercel.com) y crea una cuenta
2. Importa tu proyecto desde GitHub
3. Configura:
   - **Framework Preset**: Other
   - **Root Directory**: `Wheells-Backend/backend`
   - **Build Command**: `npm install`
   - **Output Directory**: (vacío)
4. Agrega las variables de entorno
5. Deploy!

El archivo `vercel.json` ya está configurado.

### 4. Heroku

1. Instala Heroku CLI: `npm install -g heroku`
2. Login: `heroku login`
3. Crea la app: `heroku create tu-app-backend`
4. Configura variables:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set JWT_SECRET=tu_clave_secreta
   heroku config:set FRONTEND_URL=https://tu-frontend.com
   ```
5. Deploy: `git push heroku main`

## 📝 Notas Importantes

- **JWT_SECRET**: Usa una clave segura y única en producción
- **FRONTEND_URL**: Debe coincidir exactamente con la URL de tu frontend desplegado
- **CORS**: El backend ya está configurado para aceptar múltiples orígenes
- **Base de Datos**: Actualmente usa base de datos en memoria. Para producción, considera usar MongoDB Atlas

## 🔍 Verificación Post-Despliegue

Prueba tu backend desplegado con:

```bash
curl https://tu-backend.com/api/test
```

Deberías recibir una respuesta JSON con el mensaje de éxito.

## 🐛 Troubleshooting

- **Error de puerto**: Asegúrate de usar `process.env.PORT` (ya configurado)
- **Error de CORS**: Verifica que `FRONTEND_URL` esté correctamente configurado
- **Error de módulos**: Asegúrate de que `"type": "module"` esté en package.json (ya configurado)

