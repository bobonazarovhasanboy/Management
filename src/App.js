import React from 'react'
import { Container } from'react-bootstrap';
import ManagementCard from './ManagementCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {


	return (
		<Container className='mt-5'>
			<div className='card-container'>
				<ManagementCard/>
			</div>
		</Container>
	)
}

export default App
