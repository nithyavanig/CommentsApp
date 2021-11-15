import './App.css';
import { initialData } from "./data";
import CommentContainer from './CommentContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Comments App
      </header>
      <CommentContainer data={initialData}/>
    </div>
  );
}

export default App;
