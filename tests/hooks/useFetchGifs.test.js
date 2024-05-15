import { renderHook, waitFor} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


//Asi se evaluan los hooks.
describe('Tenst in the hook useFetchGifs', () => {
  
    test('should return the initial test', () => {
      
      const { result } = renderHook(() => useFetchGifs('One Punch'));// For rendering a hook
      const {images, isLoading} = result.current;
        
      expect(images.length).toBe(0);
      expect(isLoading).toBeTruthy();
    })

    test('should return an array of images and isLoading set in false', async() => {
      
        const { result } = renderHook(() => useFetchGifs('One Punch'));// For rendering a hook
        
         await waitFor( // Espera hasta obtener el resultado
             () => expect(result.current.images.length).toBeGreaterThan(0)
         ); 
       
       
        const {images, isLoading} = result.current;
          
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
      })
    
});
