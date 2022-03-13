function App() {

    const [state, setState] = React.useState({
        num1: Math.ceil(Math.random() * 100),
        num2: Math.ceil(Math.random() * 100),
        response: '', 
        score: 0
    })


    function updateResponse(event) {
        setState({
            ...state,
            response: event.target.value
        })
    }

    function rightAnswer() {
        setState({
            ...state,
            response: '',
            num1: Math.ceil(Math.random() * 100),
            num2: Math.ceil(Math.random() * 100),
            score: state.score + 1
        })
    }

    function wrongAnswer() {
        setState({
            ...state,
            response: '',
            num1: Math.ceil(Math.random() * 100),
            num2: Math.ceil(Math.random() * 100),
            score: state.score - 1
        })
    }


    function keyPress(event) {
        if (event.key === 'Enter'){
            const answer = parseInt(state.response)
            if (answer === state.num1 + state.num2) {
                rightAnswer()
            } else {
                wrongAnswer()
            }
        }
    }

    if (state.score === 10) {
        return (
            <div className='won'>You Won!</div>
        )
    }

    return (
        <div>
            <div className="question">{state.num1} + {state.num2}</div>
            <input autoFocus={true} className="answerBox" value={state.response} onChange={updateResponse} 
            onKeyPress={keyPress} placeholder='Write your Answer here...'/>
            <div id="score">Score: {state.score}</div>
        </div>
    )
 
}
ReactDOM.render(<App />, document.querySelector('.container'))