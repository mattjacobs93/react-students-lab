const Score = (props) => {
  console.log('success', props)

  return (
    <div className="score">
        <p>Score: {props.score.score}</p>
        <p>Date: {props.score.date}</p>
    </div>
  
  )
}


export default Score