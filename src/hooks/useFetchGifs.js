import  { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
// custom hooks o hooks customizable

// Algo interesante con los hooks que cuando tienen un cambio se vuelve a reenderizar

export const useFetchGifs = (category) => { //A hook is a function that return something

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
          const newImages = await getGifs(category); //GETgIFS is a promise
          setImages(newImages);
          setIsLoading(false);
    }

    useEffect( () => { // Eventos secundarios
        getImages();
   
        // getGifs(category)
         //   .then(data => setImages(data));
    }, [])
//El useEffect lleva un callback (funcion) y unas dependecias 
//si dejamos las dependencias del useEffect vacía ([]) solo lo va a ejecutar una sola vez el hook

    // Ir order to be a hook
    return {
        images,
        isLoading
    }
} 


// uSe Effect se usa para disparar efecto segundarios, osea cuando algo cambie estar atento y el efecto se dispara
// No deberiamos nunca colocar la ejecucción de un componente dentro de un functional component, porque cada vez que el estado cambio hará la llamada
// Hay ciertas funciones que le podemos decir a react que solo ejectute una vez, osea no se llamará every moment when sometihng change : 
// 