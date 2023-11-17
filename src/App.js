import logo from './logo.svg';
import './App.css';

function App() {
  const questions = [
    {

      questionText: 'What is the capital of Texas?',
      answerOptions: [
        {answerText: 'Dallas', isCorrect: false},
        {answerText: 'Austin', isCorrect: true},
        {answerText: 'Houston', isCorrect: false},
        {answerText: 'San Antonio', isCorrect: false}
      ],

    }
  ]
  return (
    <div className="App">

      {false ? (
        <div className='score-section'>You scored 1 out of {questions.length}</div>
      ) : (
            <>
            <div className='question-section'>
              <div className='question-count'></div>
            </div>

            </>

      )

      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
