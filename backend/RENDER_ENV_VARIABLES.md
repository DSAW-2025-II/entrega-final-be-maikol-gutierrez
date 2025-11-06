# 🔧 Variables de Entorno para Render.com

## 📋 Lista Completa de Variables para Render

Cuando configures tu servicio en Render, agrega estas variables en la sección **"Environment Variables"**:

### ✅ Variables OBLIGATORIAS

```
NODE_ENV = production
```

```
JWT_SECRET = (genera una clave secreta larga y segura)
```
**Ejemplo**: `mi_clave_secreta_super_larga_y_segura_123456789_abcdefghijklmnop`
**Importante**: Render tiene un botón "Generate" para crear una clave segura automáticamente

```
FRONTEND_URL = https://tu-frontend.vercel.app
```
**Nota**: Reemplaza `tu-frontend.vercel.app` con la URL real de tu frontend desplegado (sin barra final `/`)

### ⚙️ Variables OPCIONALES (pero recomendadas)

```
PORT = 10000
```
**Nota**: Render usa el puerto `10000` de forma predeterminada. No necesitas configurarlo manualmente, pero puedes agregarlo si quieres ser explícito.

---

## 📝 Instrucciones Paso a Paso en Render

1. Ve a tu servicio en Render.com
2. Click en **"Environment"** en el menú lateral
3. En la sección **"Environment Variables"**, agrega cada variable:

### Variable 1: NODE_ENV
- **Key**: `NODE_ENV`
- **Value**: `production`

### Variable 2: JWT_SECRET
- **Key**: `JWT_SECRET`
- **Value**: Click en **"Generate"** o ingresa una clave larga y aleatoria
  - Mínimo 32 caracteres
  - Ejemplo: `wheells_jwt_secret_2024_ultra_seguro_xyz123abc456`

### Variable 3: FRONTEND_URL
- **Key**: `FRONTEND_URL`
- **Value**: `https://tu-frontend.vercel.app`
  - ⚠️ **IMPORTANTE**: Reemplaza con tu URL real del frontend
  - Debe empezar con `https://`
  - NO debe terminar con `/`
  - Ejemplo correcto: `https://wheells-frontend.vercel.app`
  - Ejemplo incorrecto: `https://wheells-frontend.vercel.app/` ❌

---

## 🎯 Configuración Mínima (Solo lo Esencial)

Si solo quieres lo mínimo para que funcione:

```
NODE_ENV = production
JWT_SECRET = (genera una clave segura)
FRONTEND_URL = https://tu-frontend.vercel.app
```

**Nota**: `PORT` no es necesario porque Render lo asigna automáticamente.

---

## ⚠️ Importante

1. **JWT_SECRET**: NUNCA uses el valor por defecto (`claveultrasegura`) en producción
2. **FRONTEND_URL**: Debe ser EXACTAMENTE la URL de tu frontend (sin `/` al final)
3. **Después de agregar variables**: Render reiniciará automáticamente tu servicio
4. **Si cambias FRONTEND_URL**: Reinicia el servicio manualmente desde el dashboard

---

## ✅ Verificación

Después de configurar las variables:

1. Ve a los **"Logs"** de tu servicio en Render
2. Verifica que no haya errores
3. Prueba tu endpoint: `https://tu-backend.onrender.com/api/test`
4. Deberías recibir una respuesta JSON exitosa

---

## 📸 Ejemplo Visual de Cómo Se Ve en Render

```
Environment Variables
┌─────────────────────────────────────────┐
│ Key              │ Value                │
├─────────────────────────────────────────┤
│ NODE_ENV         │ production           │
│ JWT_SECRET       │ [Generate] gk2j...   │
│ FRONTEND_URL     │ https://...vercel.app│
└─────────────────────────────────────────┘
```

---

## 🔄 Orden de Configuración Recomendado

1. **Primero**: Despliega el backend con solo `NODE_ENV` y `JWT_SECRET`
2. **Segundo**: Despliega el frontend y obtén su URL
3. **Tercero**: Actualiza `FRONTEND_URL` en el backend con la URL del frontend
4. **Cuarto**: Reinicia el servicio backend

