import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');// To mock a process in this case a hook

describe('Test <GifGrid />', () => {
  
    const category = 'One Punch';

  test('should show the loading at the beginning', () => {
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    })

    render(<GifGrid category={category}/>)
    
    expect(screen.getByText('Loading....'))
    expect(screen.getByText(category))
  })

  test('should show items when imgs are loaded', () => {
    
    const gifs = [
        {
            id:'abc',
            title: 'Saitama',
            url: 'Https://testSaitama/saitama.jpg'
        },
        {
            id:'123',
            title: 'Goku',
            url: 'Https://testSaitama/goku.jpg'
        }
    ]
    useFetchGifs.mockReturnValue({ // Mocking the hook
        images: gifs,
        isLoading: false
    })

    render(<GifGrid category={category}/>);

    expect(screen.getAllByRole('img').length).toBe(2);
  })
  
  
})


// Una vez moqueamos un servicio o un hook automaticamente jest comenzara a usar el del mock en vez del original