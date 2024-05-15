import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

  
   const [input, setInput] = useState('');
   const onInputChange = ( {target}) => {
       //Asi el valor del imput cambia y se almacena en el estadp
       setInput(target.value);
   }
   
   const onSubmit = () => {
      event.preventDefault();//Avoid reload the page when clicking enter with the form
      if(input.trim().length <= 1) return;
      // use callback to get all categories
      //setCategories( categories => [input, ...categories]);

      // Para emitir el evento al padre
      onNewCategory(input.trim());
      setInput(''); // Reset the input
   }

    return (
        // In this case form is only elemet being returned
        <form onSubmit={onSubmit} aria-label="form">
        <input
         type="text"
         placeholder="Buscar gifs"
         value={input}
         onChange={onInputChange}
        />
        </form>

    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}