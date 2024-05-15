import {getGifs} from '../../src/helpers/getGifs'

describe('Test in getGifs()', () => {
  test('should retrn an array of gifts', async () => {
    
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({id: expect.any(String), title: expect.any(String) , url: expect.any(String)});
  });
  
})
