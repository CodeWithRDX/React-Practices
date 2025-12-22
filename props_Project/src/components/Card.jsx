import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <>
    <div className="card">
        <div className="top">
            <img src={props.img} alt="logo" />
            <button>Save <Bookmark/></button>
        </div>
        <div className="center">
            <h4>{props.name} <span>5 days ago</span></h4>
            <h3>{props.position}</h3>
            <div>
                <h4>{props.type}</h4>
                <h4>{props.level}</h4>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>{props.price}</h4>
                <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
    </>
  )
}

export default Card