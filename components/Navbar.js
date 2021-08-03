import Link from 'next/link'
import Button from './Button'

export default function Navbar(props) {
  return (
  	<>
  		<header className = 'sm:hidden bg-white w-full'>
		  	<div className = 'sm:hidden flex items-center justify-between px-4 py-3'>
		  		<div>
		  			<img className = 'h-10' src = 'dark-logo.png' alt = 'Atlas Finance Logo' />
		  		</div>
		  		<div>
		  			<Button path = 'https://dashboard.atlasfinance.org/sign-up.php' body = 'Join'/>
		  		</div>
		  	</div>
		</header>
	    <nav className = 'hidden sm:block sm:max-w-7xl sm:mx-auto sm:px-2 sm:px-6 lg:px-8 sm:pt-8 sm:pb-8'>
	    	<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
		        <div className="hidden sm:block sm:ml-6 justify-center">
		          <div className="flex space-x-8">
	            	<a href = '/' className = {props.className}>Home</a>
			    	    <Link href = 'mailto:support@atlasfinance.org'><a className = {props.className}>Contact</a></Link>
			    	    <Link href = 'https://guides.atlasfinance.org'><a className = {props.className}>Guides</a></Link>
			    	    <Link className = 'text-blue-800' href = 'https://dashboard.atlasfinance.org/sign-up.php'><a className = {props.joinClass}>Join Free →</a></Link>
		          </div>
		        </div>
	      </div>
		</nav>
	</>
  )
}

Navbar.defaultProps = {
	'className': 'w-full sm:w-auto flex-none text-gray-800 hover:text-gray-400 font-medium leading-6 py-3 sm:px-6  flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200',
	'joinClass': 'w-full sm:w-auto flex-none text-blue-600 hover:text-blue-400 font-sans font-semibold leading-6 py-3 sm:px-6  flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200'
}
