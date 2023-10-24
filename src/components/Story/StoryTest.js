import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import './Story.scss'
function Story(props) {
  const data = props.data;
  return (
    <>
      <div className='story-card'>
        <div className='story-card__img-wrap'>
          {data.imageCover ? <img src={data.imageCover} alt="" /> : <Skeleton height={96} width={72} />}
        </div>
        <div className='story-card__content'><h2 className='story-card__tilte'>
             {data.title}
            </h2>    
          <div className='story-card__description text-secondary'>{data.description || <Skeleton count={2} />}</div>
                 
        </div>
      </div>
    </>
  )
}

export default Story