// import logo from './logo.svg';
import './App.css';
import Func_JSX_dat from './components/Func_JSX_dat';

function App() {
  return (
      <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo */}
        <Func_JSX_dat />
        <Func_JSX_dat fullName="Lam Viet Dat 2" age="20" />
      </section>
  );
}

export default App;