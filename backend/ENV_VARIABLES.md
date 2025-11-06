# 📋 Variables de Entorno - Backend

## Variables Mínimas Necesarias

### Para Desarrollo Local (opcional)
```env
PORT=5000
JWT_SECRET=claveultrasegura
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

### Para Producción (necesarias)
```env
PORT=5000
JWT_SECRET=tu_clave_secreta_muy_larga_y_segura_aqui
FRONTEND_URL=https://tu-frontend.vercel.app
NODE_ENV=production
```

## 🔍 Detalles de Cada Variable

### `PORT` (Opcional)
- **Default**: `5000`
- **Descripción**: Puerto donde corre el servidor
- **Cuándo necesaria**: Solo si quieres cambiar el puerto o tu plataforma lo requiere (ej: Render usa 10000)

### `JWT_SECRET` (Recomendado)
- **Default**: `"claveultrasegura"`
- **Descripción**: Clave secreta para firmar tokens JWT
- **⚠️ IMPORTANTE**: En producción, DEBES cambiar esto por una clave segura
- **Cómo generar**: Usa una cadena larga y aleatoria (mínimo 32 caracteres)

### `FRONTEND_URL` (Necesario en Producción)
- **Default**: No tiene (CORS falla en producción)
- **Descripción**: URL completa de tu frontend desplegado
- **Formato**: `https://tu-frontend.vercel.app` (sin barra final)
- **Cuándo necesaria**: En producción para que CORS funcione correctamente

### `NODE_ENV` (Recomendado)
- **Default**: No tiene (se comporta como desarrollo)
- **Valores**: `development` o `production`
- **Descripción**: Define el entorno de ejecución
- **Cuándo necesaria**: Recomendado en producción para activar optimizaciones

## ✅ Configuración Mínima para Producción

**Solo necesitas estas 2 variables como mínimo:**

```env
JWT_SECRET=tu_clave_secreta_super_segura_minimo_32_caracteres
FRONTEND_URL=https://tu-frontend.vercel.app
```

Las otras tienen valores por defecto que funcionan.

## 📝 Ejemplo de `.env` para Producción

```env
# Mínimo necesario
JWT_SECRET=mi_clave_secreta_super_larga_y_segura_123456789
FRONTEND_URL=https://wheells-frontend.vercel.app

# Opcionales (pero recomendados)
NODE_ENV=production
PORT=5000
```

## 🚨 Importante para Despliegue

1. **JWT_SECRET**: NUNCA uses el valor por defecto en producción
2. **FRONTEND_URL**: Debe ser exactamente la URL de tu frontend (sin `/` al final)
3. **PORT**: Algunas plataformas (como Render) lo asignan automáticamente, verifica cuál necesitas

