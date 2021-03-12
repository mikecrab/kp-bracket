import { getData } from 'node-kenpom';
import './App.css';
import Bracket from './components/Bracket';

function App() {
	getKP();
	return (
		<div className="App">
			<Bracket></Bracket>
		</div>
	);
}

async function getKP() {
//   const data = await getData();
//   console.log(data);
}

export default App;
