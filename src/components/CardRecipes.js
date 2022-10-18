import Card from 'react-bootstrap/Card';
import { marked } from 'marked';
import { useEffect } from 'react';
import './CardRecipes.css';

const CardRecipes = recipe => {
	useEffect(() => {
		console.log('Receta: ', recipe.recipe);
	}, []);
	const { nombre, fotoPrincipal, descripcion } = recipe.recipe;
	const fixedDescription = marked(descripcion);
	return (
		<div className='cards'>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={fotoPrincipal.fields.file.url} />
				<Card.Body>
					<Card.Title>{nombre}</Card.Title>
					<Card.Text dangerouslySetInnerHTML={{ __html: fixedDescription }} />
				</Card.Body>
			</Card>
		</div>
	);
};

export default CardRecipes;
