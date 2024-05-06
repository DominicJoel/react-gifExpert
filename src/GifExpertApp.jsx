// Functional component rafc

import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

  //  Hook de react to keep the state
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
    // Validate if the array already includes the category
    if (categories.includes(newCategory)) return;
    //No usamos el push porqu react trata de evitar mutar el estado y es lo que hace el push, usamos el state para crear un nuevo state
    setCategories([...categories, newCategory])
  }
  
  return (
   <>
   {/* Title */}
   <h1>Gif expert app</h1>
  
   {/* Input */}
   <AddCategory 
      //  setCategories= {setCategories}
     // onNewCategory= {event => onAddCategory(event)}
      onNewCategory= {onAddCategory}
    />

   <button onClick={onAddCategory}>Add</button>
   {/* List of gifs */}

     { categories.map(category =>  (
        // <div key={category}>
        //   <h3> {category} </h3>
        //   <li > {category} </li>
        // </div>
        <GifGrid key={category} category={category}/>
      )) }

   {/* Gif Item */}
   </>
   
  )
}

export default GifExpertApp


// Cuando trabajaos con una lista de li debe tener un key unico debemos tomar en cuenta eso al momento de trabajarlo
// etCategories= {setCategories} podemos mandar funciones como props
// Por semantica cuando usa (on) es porque está emitiendo algo onChange, onValue, etc.
// onNewCategory lo vamos a crear in order to emit a value to the parent
// In a list the key goes in the one we're iterating