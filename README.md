# My Urban Scoot - Prueba Técnica

## 📦 Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- `pruebaTecnicaMyUrbanScoot/`: Backend 
- `prueba-tecnica-my-urban-scoot-storefront/`: Frontend 

## 🛠️ Configuración y Ejecución

### Backend

1. Navega al directorio del backend:
```bash
cd pruebaTecnicaMyUrbanScoot
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura la base de datos PostgreSQL:
- Crea una base de datos llamada `pruebaTecnicaMyUrbanScoot`
- Asegúrate de que PostgreSQL esté corriendo en el puerto por defecto

4. Inicia Redis:
```bash
redis-server
```

5. Inicia el servidor de desarrollo:
```bash
yarn start
# o
npm run start
```

El backend estará disponible en `http://localhost:9000`

### Frontend 

1. Navega al directorio del frontend:
```bash
cd prueba-tecnica-my-urban-scoot-storefront
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:3000`

## 👤 Panel de Administración

El panel de administración está disponible en `http://localhost:9000/app`

Sin querer me he registrado con mi crreo y contraseña importantes entonces me da un poco de respeto compartir la contraseña
Puedo volver a hacer en otro momento la parte del backend otra vez con esto en cuenta si lo necesitas

## 🎥 Demo del Proyecto

[Enlace al video de demostración](https://drive.google.com/file/d/146XuLsocIRDHQrIt8L3gOFWyQaK-cMBx/view)

## Conclusiones
El proyecto se ha podido realizar en casi todos los aspectos, excepto en la visualización del precio. No estoy seguro de si falta algo más. Es posible que haya mejores prácticas para su implementación, pero en general, se han cumplido casi todos los requisitos.

En primer lugar, quise estructurar bien el backend y utilizar nombres adecuados, lo que me llevó a repetir varias veces el proceso de desarrollo. Además, no tenía claro si la mejor forma de construir el backend era directamente desde el dashboard o mediante código. Para asegurarme, decidí implementarlo todo con código.

Por otro lado, en el frontend, al visualizar los patinetes, pensaba que la configuración en el backend era correcta, pero me faltaba cambiar el estado de los productos para que se mostraran públicamente. Esto me hizo perder bastante tiempo, ya que no era consciente de que solo necesitaba modificar ese detalle. Afortunadamente, la integración del frontend con el backend, incluyendo aspectos como CORS, no me ha generado demasiados problemas.

En resumen, ha sido un proyecto que he disfrutado desarrollar, a pesar de algunos momentos de frustración. No conocía este framework hasta que vi la oferta de vuestra empresa, y me ha parecido una herramienta muy interesante. Con tan solo unos pocos días de trabajo, parece que se pueden lograr grandes cosas con él.

