import Score from "./Score.jsx"

const Student = (props) => {

  return (
    <div className="student">
      <h1 className="name">Name: {props.student.name}</h1>
      <h2 className="bio">Bio: {props.student.bio}</h2> 
      <div className="scores"> 
        {
          props.student.scores.map((score) => 
            <Score score={score}/>
          )
        }
      </div>
    </div>
  )
}

export default Student