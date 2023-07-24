import * as React from 'react'
import { Link } from 'gatsby'

const ContactPage = () => {
	return (
		<main>
			<h1>
				Let's chat!
			</h1>
			<p>
			Interested in learning more about my services? Curious about the secrets to making a perfect deli-style sandwich? Looking for talented folks with skills outside my wheelhouse? <br />Drop me a line!
			</p>
			<Link to="/">Home</Link>
			
		</main>
	)
}

export default ContactPage

export const Head = () => <title>Let's chat!'</title>