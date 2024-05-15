
import PropTypes from 'prop-types';


export default function GifItem({title, url}) {

  return (
    <div className='card'>
       <img src={url} alt={title} />
       <p>{title}</p>
    </div>
  )
}


// To force type's of properties
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url  :  PropTypes.string.isRequired
}


