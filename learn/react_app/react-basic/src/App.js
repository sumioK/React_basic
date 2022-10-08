import logo from './logo.svg';
import './App.css';
import Article from './components/Article'

function App() {
  return (
    <div className="App">
      <Article
        title={"新・日本一わかりやすいReact入門基礎編"}
        content={"今日のトピックはpropsについてです"}
        />
    </div>
  );
}

export default App;