import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('test in AddCategory', () => {
  test('should test the value of the text input whwn change', () => {
    
     render( <AddCategory onNewCategory={() => {}}/> )
      const input = screen.getByRole('textbox');

      fireEvent.input(input, {target: {value:'Naruto'}}) // Para disparar un evento

      expect(input.value).toBe('Naruto');
     // screen.debug();
  });

  test('should call onNewCategory if input has a value', () => {
      
    const inputValue = 'Naruto';
    const onNewCategory = jest.fn(); // To simulate a mock

    // render( <AddCategory onNewCategory={() => {}}/> );
    render( <AddCategory onNewCategory={onNewCategory}/> );
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');// We get it because of the area label

    fireEvent.input(input, {target: {value: inputValue}})
    fireEvent.submit(form);
    // After submit the value should be empty

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();// Validate the function to know if it's been called
    expect(onNewCategory).toHaveBeenCalledTimes(1);// Validate the function to know if it's been called just once
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);// Validate the function to know if it's been called and use the input value

  });
  
  
  test('should not call onNewCategory if inputValue is empty', () => {

    const onNewCategory = jest.fn(); // To simulate a mock
    render( <AddCategory onNewCategory={onNewCategory}/> );

    const form = screen.getByRole('form');
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  })
  
})
