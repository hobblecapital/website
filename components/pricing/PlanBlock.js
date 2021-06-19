import Link from 'next/link'
import Check from '../Check'
import Button from '../Button'

export default function PlanBlock(props) {
  return (
    <div className = 'shadow-lg rounded-lg p-8 uppercase text-blue-600'>
        <p className = 'mb-4 font-bold text-lg t'>One Month Free Trial</p>
    	<div className = 'text-gray-600 font-bold text-xl pb-6'>
        	<span className = 'text-gray-800 text-4xl font-bold'>${props.price}</span> {props.interval}
        </div>
        <Check content = 'AI Powered News Summaries'/>
        <Check content = 'FDA Drug Approvals/Rejections'/>
        <Check content = 'Stock Dilutions'/>
        <Check content = 'Mergers And Acquisitions'/>
        <Check content = 'Earnings Results'/>
        <Check content = 'Customize Alerts'/>
        <Check content = '24 Hour Support'/>
        <div className = 'mt-8'>
        	<Button path = {props.path} body = {props.buttonBody} arr = {props.arr} />
        </div>
    </div>
  )
}
