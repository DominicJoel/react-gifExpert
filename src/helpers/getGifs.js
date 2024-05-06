// It's a js file because its pure js code
// This is like a service in angular

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iB6FambEtYjqirrwkAdxhMnqR8KuPhix&q=${category}&limit=20`;
 
    const resp = await fetch(url);
    const {data} = await resp.json(); // Desestructuramos la data
 
    const gifs = data.map(img => ({ // Maps only required data
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
    }))
   // console.log(gifs);
    return gifs;
 } //
 