import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'

function App() {

const [entries, setEntries] = useState([{name: 'Andre Bennett', post: 'Hi'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />

    </div>
  );
}

export default App;
