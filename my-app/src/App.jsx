import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [butchCount, setButchCount] = useState(0) // State for Butch votes
  const [tomCount, setTomCount] = useState(0) // State for Tom votes
  const [jerryCount, setJerryCount] = useState(0) // State for Jerry votes

  // Function to determine who has the highest votes
  const getLeader = () => {
    const votes = [
      { name: 'Butch', count: butchCount },
      { name: 'Tom', count: tomCount },
      { name: 'Jerry', count: jerryCount },
    ]
    const leader = votes.reduce((max, vote) => (vote.count > max.count ? vote : max), votes[0])
    return leader.count > 0 ? leader.name : 'No votes yet'
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setButchCount((butchCount) => butchCount + 1)}
          style={{ backgroundColor: 'gray', color: 'white' }}
        >
          Butch {butchCount}
        </button>
      
        <button
          onClick={() => setTomCount((tomCount) => tomCount + 1)}
          style={{ backgroundColor: 'blue', color: 'white' }}
        >
          Tom {tomCount}
        </button>

        <button
          onClick={() => setJerryCount((jerryCount) => jerryCount + 1)}
          style={{ backgroundColor: 'brown', color: 'white' }}
        >
          Jerry {jerryCount}
        </button>

        <p>
          Current Leader: <strong>{getLeader()}</strong>
        </p>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App