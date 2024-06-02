// import logo from './logo.svg';
import './App.css';
import Class_Lvd from './Component/Class_Lvd';
import Func_JSX_Lvd from './Component/Func_JSX_Lvd';

function App() {
  return (
    <section className = "app">
        <h1> demo JSX</h1>
        {/* function Component demo */}

        <Func_JSX_Lvd />
        <Func_JSX_Lvd fullName = "Lam Viet Dat" age = "20" />

        <Class_Lvd />
        <hr />
        <Class_Lvd info = "Học ReactJS" time ="11 buổi" />
    </section>
  );
}

export default App;