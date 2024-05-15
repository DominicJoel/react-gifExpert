import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe('Test of GifItem', () => {
      
  const title = 'Saitama';
  const  url = 'https://onepunch.com/saitama.jpg';

  test('should match the snapshot', () => {


    const {container} = render(<GifItem title={title} url={url} />)
    
    expect(container).toMatchSnapshot();

  });

  test('should show the correct img and alt', () => {
    
    const {container} = render(<GifItem title={title} url={url} />);
     
   // screen.debug(); // To show everything rendered


   // expect(screen.getByRole('img').src).toBe(url); // Esto se puede hacer con getById etc
    //expect(screen.getByRole('img').alt).toBe(title); // Esto se puede hacer con getById etc


    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  
  test('should show the test of the document', () => {
    const {container} = render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  })
  
})

// u - to update the snaphot