import Link from 'next/link'
import Button from './Button'
import ButtonSecondary from './ButtonSecondary'
import SampleAlert from './examples/SampleAlert'
import Tabs from './examples/Tabs'

export default function Examples(props) {

	const tabClick = (e) => {
		const id = e.target.id

		var Highlights = document.getElementById('Highlights')
		var DrugApproval = document.getElementById('DrugApproval')
		var Mergers = document.getElementById('Mergers')
		var Earnings = document.getElementById('Earnings')
		var Dilutions = document.getElementById('Dilutions')

		var HighlightsBlock = document.getElementById('HighlightsBlock')
		var DrugApprovalBlock = document.getElementById('DrugApprovalBlock')
		var MergersBlock = document.getElementById('MergersBlock')
		var EarningsBlock = document.getElementById('EarningsBlock')
		var DilutionsBlock = document.getElementById('DilutionsBlock')

		if (id == 'Highlights') {
			var element = document.getElementById(id)
			element.classList.add('border-blue-500')

			DrugApproval.classList.remove('border-blue-500')
			Mergers.classList.remove('border-blue-500')
			Earnings.classList.remove('border-blue-500')
			Dilutions.classList.remove('border-blue-500')

			HighlightsBlock.style.display = 'block'
			DrugApprovalBlock.style.display = 'none'
			MergersBlock.style.display = 'none'
			EarningsBlock.style.display = 'none'
			DilutionsBlock.style.display = 'none'

		} else if (id == 'DrugApproval') {
			var element = document.getElementById(id)
			element.classList.add('border-blue-500')

			Highlights.classList.remove('border-blue-500')
			Mergers.classList.remove('border-blue-500')
			Earnings.classList.remove('border-blue-500')
			Dilutions.classList.remove('border-blue-500')

			DrugApprovalBlock.style.display = 'block'
			HighlightsBlock.style.display = 'none'
			MergersBlock.style.display = 'none'
			EarningsBlock.style.display = 'none'
			DilutionsBlock.style.display = 'none'

		} else if (id == 'Mergers') {
			var element = document.getElementById(id)
			element.classList.add('border-blue-500')

			Highlights.classList.remove('border-blue-500')
			DrugApproval.classList.remove('border-blue-500')
			Earnings.classList.remove('border-blue-500')
			Dilutions.classList.remove('border-blue-500')

			MergersBlock.style.display = 'block'
			DrugApprovalBlock.style.display = 'none'
			HighlightsBlock.style.display = 'none'
			EarningsBlock.style.display = 'none'
			DilutionsBlock.style.display = 'none'

		} else if (id == 'Dilutions') {
			var element = document.getElementById(id)
			element.classList.add('border-blue-500')

			Highlights.classList.remove('border-blue-500')
			Mergers.classList.remove('border-blue-500')
			Earnings.classList.remove('border-blue-500')
			DrugApproval.classList.remove('border-blue-500')


			Dilutions.style.display = 'block'
			DrugApprovalBlock.style.display = 'none'
			MergersBlock.style.display = 'none'
			EarningsBlock.style.display = 'none'
			HighlightsBlock.style.display = 'none'

		} else if (id == 'Earnings') {
			var element = document.getElementById(id)
			element.classList.add('border-blue-500')

			Highlights.classList.remove('border-blue-500')
			Mergers.classList.remove('border-blue-500')
			Dilutions.classList.remove('border-blue-500')
			DrugApproval.classList.remove('border-blue-500')

			Earnings.style.display = 'block'
			DrugApprovalBlock.style.display = 'none'
			MergersBlock.style.display = 'none'
			HighlightsBlock.style.display = 'none'
			DilutionsBlock.style.display = 'none'
		}


	}

  	return (
		<div className = 'relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-16'>
	        <div className = 'px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8'>
	        	<h1 className = 'text-3xl sm:text-4xl lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 mt-4 mb-4 sm:mt-4'>{props.title}<span className = 'text-blue-600'>{props.titleBlue}</span></h1>
	        	<p className = 'max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-4 sm:mb-4'>{props.subtitle}
	        	</p>
	        	<button id = 'absd' onClick = {tabClick}>Helllo</button>
	        	<div className = 'flex'>
		        	<div className="mt-10 w-2/3">
				      <dl id = 'HighlightsBlock' className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				        <SampleAlert ticker = 'NSPR' alertType = 'Raised Capital' profit = '652.8%' timeframe = 'So Far'/>
				        <SampleAlert ticker = 'CHMA' alertType = 'Acquired' profit = '39.75%' timeframe = 'In One Day'/>
				        <SampleAlert ticker = 'SA' alertType = 'Reported Earnings' profit = '33.4%' timeframe = 'In One Hour'/>
				        <SampleAlert ticker = 'IMAB' alertType = 'FDA Drug Approval' profit = '32.83%' timeframe = 'So Far'/>			        
				      </dl>
				      <dl id = 'DrugApprovalBlock' className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				        <SampleAlert ticker = 'NSPR' alertType = 'Raised Capital' profit = '652.8%' timeframe = 'So Far'/>
				        <SampleAlert ticker = 'CHMA' alertType = 'Acquired' profit = '39.75%' timeframe = 'In One Day'/>
				        <SampleAlert ticker = 'ANPC' alertType = 'Reported Earnings' profit = '33.4%' timeframe = 'In One Hour'/>
				        <SampleAlert ticker = 'AS' alertType = 'FDA Drug Approval' profit = '32.83%' timeframe = 'So Far'/>			        
				      </dl>
				      <dl id = 'EarningsBlock' className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				        <SampleAlert ticker = 'NSPR' alertType = 'Raised Capital' profit = '652.8%' timeframe = 'So Far'/>
				        <SampleAlert ticker = 'CHMA' alertType = 'Acquired' profit = '39.75%' timeframe = 'In One Day'/>
				        <SampleAlert ticker = 'ANPC' alertType = 'Reported Earnings' profit = '33.4%' timeframe = 'In One Hour'/>
				        <SampleAlert ticker = 'fsdf' alertType = 'FDA Drug Approval' profit = '32.83%' timeframe = 'So Far'/>			        
				      </dl>
				      <dl id = 'MergersBlock' className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				        <SampleAlert ticker = 'NSPR' alertType = 'Raised Capital' profit = '652.8%' timeframe = 'So Far'/>
				        <SampleAlert ticker = 'CHMA' alertType = 'Acquired' profit = '39.75%' timeframe = 'In One Day'/>
				        <SampleAlert ticker = 'ANPC' alertType = 'Reported Earnings' profit = '33.4%' timeframe = 'In One Hour'/>
				        <SampleAlert ticker = 'IMAB' alertType = 'FDA Drug Approval' profit = '32.83%' timeframe = 'So Far'/>			        
				      </dl>
				      <dl id = 'DilutionsBlock' className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				        <SampleAlert ticker = 'M' alertType = 'Raised Capital' profit = '652.8%' timeframe = 'So Far'/>
				        <SampleAlert ticker = 'CHMA' alertType = 'Acquired' profit = '39.75%' timeframe = 'In One Day'/>
				        <SampleAlert ticker = 'ANPC' alertType = 'Reported Earnings' profit = '33.4%' timeframe = 'In One Hour'/>
				        <SampleAlert ticker = 'IMAB' alertType = 'FDA Drug Approval' profit = '32.83%' timeframe = 'So Far'/>			        
				      </dl>
				    </div>
				    <div className = 'w-1/3 pl-24 pr-24 mt-10'>
				    	<Tabs func = { tabClick } id = 'Highlights' tabName = 'Highlights' current = 'border-blue-500'/>
				    	<Tabs func = { tabClick } id = 'DrugApproval' tabName = 'FDA Drug Approvals'/>
				    	<Tabs func = { tabClick } id = 'Earnings' tabName = 'Earnings'/>
				    	<Tabs func = { tabClick } id = 'Mergers' tabName = 'Mergers'/>
				    	<Tabs func = { tabClick } id = 'Dilutions' tabName = 'Stock Dilutions'/>
				    </div>
			    </div>
	        </div>
	    </div>
  )
}
