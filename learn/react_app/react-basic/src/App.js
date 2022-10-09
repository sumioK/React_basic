import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/ToggleButton';
import Counter from './components/counter';
import TextInput from './components/TextInput';
import CounterEffect from './components/counterEffect';
import React, {useEffect, useState} from 'react'

// function App() {
//   return (
//     <div className="App">
//       {/* <TextInput /> */}
//       {/* <ToggleButton /> */}
//       {/* <Counter /> */}
//       <CounterEffect />
//     </div>
//   );
// }
// export default App;

function App(){
  const [name, setName] = useState('')
  const [id, setId] = useState('deatiger')
  const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }
  
  useEffect(() =>{
    fetch(`https://api.github.com/users/${id}`)
    .then(res =>res.json())
    .then(data => {
      console.log(data)
      setName(data.name)
    })
    .catch(error => {
      console.error(error)
    })
  }, [id])

    return(
      <div>
        <p>{id}の、GitHub上の名前は{name}です。</p>
        <button onClick={getRandomId}>{id}からIDを変更</button>
      </div>
    );　
}
export default App;