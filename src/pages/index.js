import * as React from "react"
import Collapsible from "react-collapsible";
import "../styles/styles.css"

const pageStyles = { // #bfff96 base page color, #002a15 base text color -- maybe try #FFF4DB as well
	color: "#002a15", 
	padding: 96,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
	
const headingStyle = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
}

const paragraphStyles = {
	marginBottom: 32,
}

const codeStyles = {
	color: "#8A6534",
	padding: 4,
	backgroundColor: "#FFF4DB",
	fontSize: "1.25rem",
	borderRadius: 4,
}

const listStyle = {
	marginBottom: 16,
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: -5,
	paddingRight: 15,
	backgroundColor: "#FFFBF1",
	borderRadius: 10,
}

const listItemStyle = {
	fontSize: 16,
	verticalAlign: "5%",
}

const keywordStyle = {
	fontSize: 16,
	fontWeight: "semiBold",
	color: "#03592e",
}


const greeting = {
	message: "Hi, I'm Brenden.",
	
}

const expandableBlurbs = [
	{
		triggerText: "Interested in talking about native iOS development?",
		blurbText: "Lorem ipsum dolor emmett otter",
	},
	{
		triggerText: "Looking for help creating readable documentation or technical writing ?",
		blurbText: "Lorem ipsum dolor emmett otter",
	},
	{
		triggerText: "Seeking early career mentorship?",
		blurbText: "Lorem ipsum dolor emmett otter",
	},
	{
		triggerText: "Curious about the secrets to making a perfect deli-style sandwich?",
		blurbText: "Lorem ipsum dolor emmett otter",
	},
	{
		triggerText: "Looking to connect with talented folks with skills and interests outside my wheelhouse?",
		blurbText: "Lorem ipsum dolor emmett otter",
	},
]

const contact = { /*break out contact blurb into own component for reuse across other pages*/
	cta: "Then let's chat!",
	email: "send me an email",
	linkedIn: "reach out on LinkedIn",
}

const greetingHeader = ( 
	<div>
		<h1 style={headingStyle}>
			{greeting.message}
		</h1>
	</div>
)

// MARK: Page content
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      	{greetingHeader}
      <p style={paragraphStyles}>
	  	I build software, tinker with hardware, and enjoy growing (and cooking) tasty food. {/*'software' links to github?*/}
      </p>
	  <p style={paragraphStyles}>
		Are you...
		<ul style={listStyle}>
			{expandableBlurbs.map(blurb=> (
				<li style={listItemStyle}>
					<p>
						{blurb.triggerText}
					</p>
				</li>
			))}
		</ul>
		{contact.cta} You can <a href="mailto:contact@bpeters.app">{contact.email}</a> or <a href="https://www.linkedin.com/in/brenden-peters/">{contact.linkedIn}</a> {/*expandable contact details section for screen readers? -- what's the most accessible way*/}
	  </p>
    </main>
  )
}

export default IndexPage

export const Head = () => (
	<title>Welcome!</title> 
)
