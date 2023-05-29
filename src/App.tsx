<<<<<<< HEAD
import {useState} from 'react';
import Router from './Router';
import Header from './components/Header';
import './styles/global.css';

function App() {
	const [open, setOpen] = useState(false);

	return (
		<div className='App'>
			<Header open={open} setOpen={setOpen} />

			<Router />
		</div>
	);
=======
import Router from "./Router";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
>>>>>>> 8731914697e8ad52e780e20337c3e4696215323f
}

export default App;
