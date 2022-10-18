import './App.css';
import { client } from './client';
import { useEffect, useState } from 'react';
import CardRecipes from './components/CardRecipes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
	const [entries, setEntries] = useState([]);

	const getEntries = async () => {
		try {
			const response = await client.getEntries({ content_type: 'recetas' });
			console.log(response.items);
			setEntries(response.items);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getEntries();
	}, []);

	return (
		<div className='App-header'>
			<Container>
				<Row>
					{entries.map(recipe => {
						return (
							<Col key={recipe.sys.id}>
								<CardRecipes recipe={recipe.fields} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}

export default App;
