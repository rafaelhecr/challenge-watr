import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UniqueArrayComponent from './components/UniqueArrayComponent';
import ElementsTreeComponent from './components/ElementsTreeComponent';

function App() {

  const [challenge, setChallenge] = useState<number>(0);


  return (
    <main className="d-flex flex-column">
      <div className="d-flex justify-content-center">
        <div className="p-2 ">
          <h1>Hello WATR, Select the challenge to see!</h1>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="p-2">
          <button className="btn btn-primary" onClick={e => setChallenge(1)}>Unique array</button>
        </div>
        <div className="p-2">
          <button className="btn btn-primary" onClick={e => setChallenge(2)}>Category tree</button>
        </div>
      </div>

      {challenge === 1 && <UniqueArrayComponent />}
      {challenge === 2 && <ElementsTreeComponent />}

    </main>
  )
}

export default App
