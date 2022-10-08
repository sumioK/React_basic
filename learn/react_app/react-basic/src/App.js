import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Article
        title={"新・日本一わかりやすいReact入門基礎編"}
        content={"今日のトピックはpropsについてです"}
        />
      <Article
        title={"新・日本一わかりやすいReact入門基礎編その2"}
        content={"今日のトピックはhooksについてです"}
        />
      <Article
        title={"新・日本一わかりやすいReact入門基礎編その3"}
        content={"今日のトピックはこれまでの総まとめです"}
      />
    </div>
  );
}

export default App;