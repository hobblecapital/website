import Link from 'next/link'

export default function Features(props) {

  	return (
		<div className="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
              	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
				</svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">${props.ticker} {props.alertType} • <span className = 'text-blue-600 font-bold'>{props.profit} Gain {props.timeframe}</span></p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            What happened details. What happened details. What happened details. What happened details. What happened details. What happened details. 
          </dd>
        </div>
  )
}
