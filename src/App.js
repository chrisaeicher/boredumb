// Hooks
import { useState, useEffect } from 'react';
// Components
import Activity from './components/Activity';
//Styling
import './App.css';

var topColors = ['#A44200', '#E6AF2E', '#D90368', '#00A676'];
var botColors = ['#175676', '#922D50', '#99E1D9', '#1A535C'];
var diceColors = ['#800080', '#1446A0', '#FFBA08', '#93032E'];

function App() {
	const [loading, setLoading] = useState(true);
	const [activity, setActivity] = useState();
	const [topColor, setTopColor] = useState(topColors[0]);
	const [botColor, setBotColor] = useState(botColors[0]);
	const [diceColor, setDiceColor] = useState(diceColors[0]);
	const [activities, setActivities] = useState([
		{
			activity:
				'Welcome to Boredumb, your cure for boredom. Find something to do',
			type: '',
			participants: 1,
			price: 0.1,
			key: '3136036',
		},
	]);
	const [index, setIndex] = useState(0);

	const setColors = () => {
		let randIndex = Math.floor(Math.random() * diceColors.length + 1);
		while (topColor === topColors[randIndex]) {
			randIndex = Math.floor(Math.random() * diceColors.length + 1);
		}
		setTopColor(topColors[randIndex]);
		setBotColor(botColors[randIndex]);
		setDiceColor(diceColors[randIndex]);
	};

	const fetchRandActivity = () => {
		fetch('https://www.boredapi.com/api/activity/', {
			method: 'GET',
			mode: 'cors',
		})
			.then((res) => res.json())
			.then((data) => {
				setActivity(data);
				setLoading(false);
			})
			.catch((err) =>
				setActivity({
					activity:
						'Sorry, we were unable to retrieve an activity. Please try again later',
				})
			);
		setLoading(false);
	};

	useEffect(fetchRandActivity, []);

	const nextActivity = () => {
		setColors();
		return index === activities.length - 1
			? newActivity()
			: setIndex(index + 1);
	};

	const newActivity = () => {
		setActivities([...activities, activity]);
		setColors();
		setIndex(activities.length);
	};

	const prevActivity = () => {
		setColors();
		return index === 0 ? null : setIndex(index - 1);
	};

	return (
		<div className="container">
			<h1 id="title">BOREDUMB</h1>
			<div style={{ background: topColor }} className="clip-background-top" />
			<div
				style={{ background: botColor }}
				className="clip-background-bottom"
			/>
			<div className="activity-box" id="activity-box">
				{loading ? (
					<h1>Loading...</h1>
				) : (
					<Activity
						dice={diceColor}
						top={topColor}
						bot={botColor}
						back={prevActivity}
						newActivity={newActivity}
						forward={nextActivity}
						activity={activities.at(index)}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
