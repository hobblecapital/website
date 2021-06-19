import Link from 'next/link'
import Button from './Button'
import ButtonSecondary from './ButtonSecondary'

export default function Features(props) {

  	return (
		<div className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-16'>
	        <div className = 'px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8'>
	        	<h1 className = 'text-3xl sm:text-4xl lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-4 mb-4 sm:mt-4'>{props.title}<span className = 'text-blue-600'>{props.titleBlue}</span></h1>
	        	<p className = 'max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-4 sm:mb-4'>{props.subtitle}
	        	</p>
	        	<div className="mt-10">
			      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
			        <div className="relative">
			          <dt>
			            <div class="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
			              	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
							</svg>
			            </div>
			            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">FDA Drug Approval And Rejection</p>
			          </dt>
			          <dd className="mt-2 ml-16 text-base text-gray-500">
			            Drug approvals and rejections are make or break for biotech companies. Find out about clinical trial results, final FDA approval/rejection results, ADCOM decisions, and more.
			          </dd>
			        </div>

			        <div className="relative">
			          <dt>
			            <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
			              	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
							  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
							</svg>
			            </div>
			            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Earnings Results</p>
			          </dt>
			          <dd className="mt-2 ml-16 text-base text-gray-500">
			            Find out about earnings the instant they become available. As of current we are also working on applying AI to summarize the key points of the earnings, and would love your feedback.
			          </dd>
			        </div>

			        <div className="relative">
			          <dt>
			            <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
			              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
			              </svg>
			            </div>
			            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Stock Dilutions</p>
			          </dt>
			          <dd className="mt-2 ml-16 text-base text-gray-500">
			            Find out about any stock dilutions, including shelves, warrents, ATM sells, and more.
			          </dd>
			        </div>

			        <div className="relative">
			          <dt>
			            <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
			              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
			              </svg>
			            </div>
			            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Mergers And Acquisitions</p>
			          </dt>
			          <dd className="mt-2 ml-16 text-base text-gray-500">
			            Get alerted if theres ever a merger or acquistion, including details about any companies involved directly in the email.
			          </dd>
			        </div>

			        <div className="relative">
			          <dt>
			            <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
			              	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
			            </div>
			            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">AI Powered Summaries</p>
			          </dt>
			          <dd className="mt-2 ml-16 text-base text-gray-500">
			            Our highlight feature is that you don't have to read through pages of jargon. Find out exactly what you need to know, immediately.
			          </dd>
			        </div>

			        <div className="relative">
			          <dt>
			            <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
			              	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
							</svg>
			            </div>
			            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Customize Alerts</p>
			          </dt>
			          <dd className="mt-2 ml-16 text-base text-gray-500">
			            You can use the Atlas dashboard to customize alerts. From simple customizations (like what events you want to be notified of) to complex ones (minimum or maximum drugs in development).
			          </dd>
			        </div>
			      </dl>
			    </div>
	        </div>
	    </div>
  )
}
