import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody]= useState('')

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes, {title, body}
    ]) 
    setTitle('');
    setBody('');
   
    

  }

  return (
    <div>
      <h1>Note</h1>
      <p>Add Notes</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <textarea value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
        <button>Add note</button>
      </form>
      

    
    </div>
  )
}

// const App = (props) => {
//   const [count, setCount] = useState(props.count)
//   const [text, setText] = useState('')

//   return (
//     <div>
//     <p> Here it is the {text || 'complite'} count: {count}</p>
//     <button onClick={()=> setCount(count + 1)}>+1</button>
//     <button onClick={()=>setCount(props.count)}>Reset</button>
//     <button onClick={()=> setCount(count -1)}>-1</button>
//     <input value={text} onChange={(e)=>setText(e.target.value)} />
//     </div>
//   )

// }
//  App.defaultProps = {
//    count:0
//  }
ReactDOM.render(<NoteApp />,document.getElementById('root'));


