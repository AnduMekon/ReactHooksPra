import React ,{useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('')

  return (
    <div>
    <p> Here it is the {text || 'complite'} count: {count}</p>
    <button onClick={()=> setCount(count + 1)}>+1</button>
    <button onClick={()=>setCount(props.count)}>Reset</button>
    <button onClick={()=> setCount(count -1)}>-1</button>
    <input value={text} onChange={(e)=>setText(e.target.value)} />
    </div>
  )

}
 App.defaultProps = {
   count:0
 }
ReactDOM.render(<App />,document.getElementById('root'));


