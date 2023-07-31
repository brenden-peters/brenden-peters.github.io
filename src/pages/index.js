import * as React from "react"
import Collapsible from "react-collapsible";

import "../styles/styles.css"
import "../styles/_Collapsible.css"

const pageStyles = { // #BFFF96 base page color, -- maybe play with #002a15 and #FFF4DB as well
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
  marginBottom: 48,
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
  paddingLeft: -5,
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


const staticContent = {
	greeting: "Hi, I'm Brenden.",
	bio: "I build software, tinker with hardware, and enjoy growing (and cooking) tasty food.",
}

const expandableIndicators = {
	notOpen: "⌃",
	open: "⌄"
}

const expandableBlurbs = [
	{
		triggerText: "Interested in talking about native iOS development?",
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
			{staticContent.greeting}
		</h1>
	</div>
)

// MARK: Page content
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      	{greetingHeader}
      <p style={paragraphStyles}>
	  	{staticContent.bio} 
      </p>
	  <p>
		Are you...
		{expandableBlurbs.map(blurb=> (
			<Collapsible 
				transitionTime={200} 
				transitionCloseTime={200} 
				trigger={blurb.triggerText}>
				<p>
					{blurb.blurbText}
				</p>
			</Collapsible>
		))}
		{contact.cta} You can <a href="mailto:contact@bpeters.app">{contact.email}</a> or <a href="https://www.linkedin.com/in/brenden-peters/">{contact.linkedIn}</a> {/*expandable contact details section for screen readers? -- what's the most accessible way*/}
	  </p>
    </main>
  )
}

export default IndexPage

export const Head = () => (
	<title>Welcome!</title> 
)
