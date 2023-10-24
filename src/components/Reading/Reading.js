
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import './ListReading.scss'
function Reading(props) {
  const data = props.data
  return (
    <div className="reading-card">
      <div className="reading-card__img-wrap">
        {data.imageCover ? <img src={data.imageCover} alt="" /> : <Skeleton width={32} height={43}/>}
      </div>
      <div className="reading-card__content">
        {
          data.title
        }
      </div>
    </div>
  )
}

export default Reading