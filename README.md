# Aplicación básica para aprender docker

## Desplegar proyecto
### Requisitos
1. Tener Docker Desktop instalado
   
   [Página oficial de Docker Desktop para descargar]([https://nodejs.org/en](https://www.docker.com/products/docker-desktop/)https://www.docker.com/products/docker-desktop/)
   
## Levantar el proyecto

1. Descargar el archivo .zip del repositorio y extraerlo, o clonarlo utilizando el comando:
   
   `git clone https://github.com/cosmicalduck/basic-docker-app.git`

2. Abrir Docker Desktop
3. Abrir una terminar y posicionarse en la carpeta del repositorio.
4. Ejecutar Docker compose con el comando:
      `docker compose up`

## Probar el proyecto
1. Una vez levantado el proyecto, para poder ver todos los datos que se encuentran almacenados, diriguirse a `http://localhost:3000`
2. En caso de que no se posean datos, se debe de diriguir a `http://localhost:3000/create` para crear un nuevo animal.


