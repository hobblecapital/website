import Link from 'next/link'

export default function Hero(props) {
  return (
    <header className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-8'>
        <div className = 'px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8'>
        	<h1 className = 'text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10'>{props.title} <span className = 'text-blue-700'>{props.titleBlue}</span></h1>
        	<p className = 'max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-4 sm:mb-4'>{props.subtitle}
        	</p>
        </div>
    </header>
  )
}
