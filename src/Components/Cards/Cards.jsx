import './Cards.scss';  
import notFound from '../../Assets/Images/not-found.png'


function Cards(props){
  const {postImg, postName, postAuthor, type, date, userJob, id} = props

    return(
        <li className="card__item" data-id={id}>
            <h2 className="card__title">{postName}</h2>
            <div className="card__header">
            <div className="card__info">
                <span className="card__author">{postAuthor}</span>
                <span className="card__job">{userJob}</span>
            </div>
            <div className="card__details">
                <span className="card__date">{date}</span>
                <span className="card__type">{type==1?'online':'offline'}</span>
            </div>
            </div>
            <img src={postImg?`https://doubleressabaza.herokuapp.com${postImg}`:notFound} alt="img type is not suppored" className="card__img" />
        </li>
    )
}

export default Cards;