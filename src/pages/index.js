import * as React from "react"
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

const greetingMessage = ( 
	<div>
		<h1 style={headingStyle}>
			Hi, I'm Brenden.
		</h1>
	</div>
)

// MARK: Page content
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      	{greetingMessage}
      <p style={paragraphStyles}>
	  	I build software, tinker with hardware, and enjoy growing (and cooking) tasty food. {/*'software' links to github?*/}
      </p>
	  <p>
		Are you...
		<ul style={listStyle}>
			<li style={listItemStyle}>Interested in talking about <code style={keywordStyle}>native iOS development</code> or <code style={keywordStyle}>virtual and augmented reality</code>?</li> {/*include link to small briefing about iOS app domains and expertise?*/}
			<li style={listItemStyle}>Curious about the secrets to making a <code style={keywordStyle}>perfect deli-style sandwich</code>?</li>
			<li style={listItemStyle}>Looking to connect with talented folks with skills and interests outside my wheelhouse?</li>
		</ul>
		Let's chat! You can <a href="mailto:contact@bpeters.app">send me an email</a> or <a href="https://www.linkedin.com/in/brenden-peters/">reach out on LinkedIn</a> {/*expandable contact details section for screen readers? -- what's the most accessible way*/}
	  </p>
    </main>
  )
}

export default IndexPage

export const Head = () => (
	<title>Welcome!</title> // parameterize -- possible to access other files? or define all params in this file 
)
