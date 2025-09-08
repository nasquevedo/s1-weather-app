# Weather App

App para obtener la hora y clima de una ciudad especifica, diseñada en ReactJS. La aplicación envia un request al api Open Weather para obtener la información. Se usan conceptos modernos como DDD para la app.
Se usan los siguientes endpoints para obtener la información en el api seleccionado:

Primeramente, se obtiene la latitud y longitud de la ciudad por medio de su nombre:
http://api.openweathermap.org/geo/1.0/direct?q={nombre ciudad}&limit=5&appid={API KEY}

Luego de obtener la longitud y latitud se procede a obtener la información climatica y de tiempo por medio del siguiente endpoint:
https://api.openweathermap.org/data/2.5/weather?lat={latitud}&lon=${longitud}&units=metric&exclude=hourly,daily&appid={API KEY}&lang=es

Este endpoint retorna toda la informacion del clima como Temperatura, temperatura minima y maxima, humedad y el timezone de la ciudad seleccionada.

Y con la siguiente ruta se obtiene el icono según clima:
https://openweathermap.org/img/wn/{icono}@2x.png

## Requerimientos
- NodeJS 22.14
- npm 11.3

## Configuración

Para configurar localmente la app seguir los siguientes pasos:

Clonar el repositorio:
```sh
git clone https://github.com/nasquevedo/s1-weather-app.git
```
Seguido de esto moverse a la carpeta del proyecto que se creo:

```sh
cd s1-weather-app
```

En el archivo .env.local incluir el API KEY enviado al correo en la variable {REACT_APP_API_KEY}.

nota: Sin el API KEY no se podra obtener la informacion del api. se puede dejar vacio para testear casos de error.

Crear el archivo .env con base en .env.local:
```sh
cp .env.local .env
```

instalar las dependencias:

```sh
npm install
```

Por ultimo, levantar el proyecto localmente:

 ```sh
npm start
```
