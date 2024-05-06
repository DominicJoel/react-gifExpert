import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



// uSe Effect se usa para disparar efecto segundarios, osea cuando algo cambie estar atento y el efecto se dispara

export const GifGrid = ({category}) => {

   
   // use is a standard way to use hooks even when is a customized hooks
   const { images, isLoading } = useFetchGifs(category); //calling our customHook

   return (
       <>
          <h3>{category}</h3>
          {/* Conditional one way of doing it, null does not affect*/}
          {/* {
            isLoading ? (<h2> Loading.... </h2>) : null
          } */}

         {/* Another conditional way */}
          {
             isLoading && (<h2> Loading.... </h2>)
          }


          <div className='card-grid'>
            { images.map((image) =>  (
                  <GifItem key={image.id} title={image.title} url={image.url} />
                  
               )) }
          </div>
       </>
   )
}

//{...image} we send the object divided by items as prop
// In jsx we have to use className instead of class, because class it's already a reserved word
// No deberiamos nunca colocar la ejecucción de un componente dentro de un functional component, porque cada vez que el estado cambio hará la llamada
// Hay ciertas funciones que le podemos decir a react que solo ejectute una vez, osea no se llamará every moment when sometihng change : 