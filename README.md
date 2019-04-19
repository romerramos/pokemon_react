# Pokedex web

Listado de pokemon utilizando el API https://pokeapi.co/

![Pokedex](https://i.ibb.co/jzp6HNt/Pokemon-React.png)

## Instrucciones

- Clonar el repositorio
- Instalar dependencias mediante `yarn install`
- Iniciar el servidor de desarrollo `yarn start`

## Stack de desarrollo

- React
- Sass

## Distribución de directorios

Los componentes en la aplicación se dividen en dos directorios: **components** y **containers** los cuales contienen componentes basándose en su complejidad. Para crear un componente nuevo es necesario agregar un directorio que contenga la lógica en jsx, los estilos, imágenes y resources.

Para agregar reglas de negocio o consultas de APIs y poder reutilizarlo en la aplicación existe el directorio services.

### Components

En este directorio se agregan los componentes stateless (funcionales).

### Containers

En este directorio se agregan los componentes que controlan el state mediante el ciclo de vida de React (clases).

### Services

En este directorio se agrega la lógica o reglas de negocio en funciones o clases que pueden ser reutilizadas en el resto de la aplicación.

## Estilos

La aplicación utiliza [BEM](http://getbem.com/) como metodología para nombrar y organizar los estilos de la aplicación, evitando selectores anidados al aplanar todos los estilos en una nomenclatura estandarizada. 

Implementarla usando un preprocesador permite aprovechar las anidaciones propias de en nuestro caso Sass sin perder el performance ni los beneficios de la metodología. Ejemplo:

Este código en scss
```scss
.frame {
  position: absolute;
  &__circle {
    width: 20px;
    height: 20px;
    &--left {
      left: 0;
      border-radius: 0 20px 0 0;
    }
    &--right {
      right: 0;
      border-radius: 20px 0 0 0;
    }
  }
}
```
Se convierte en este código en css

```css
.frame {
  position: absolute;
}
.frame__circle {
  width: 20px;
  height: 20px;
}
.frame__circle--left {
  left: 0;
  border-radius: 0 20px 0 0;
}
.frame__circle--right {
  right: 0;
  border-radius: 20px 0 0 0;
}
```
[Más información y dudas del uso de BEM](http://getbem.com/faq/)

## Contribuir

Cualquier sugerencia, fallo o mejora se pueden hacer directamente mediante issues de este repositorio o escribiendo directamente a romerramos@gmail.com :)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).