import Link from 'next/link'

export default function Tabs(props) {

	const className = 'p-4 bg-gray-50 mb-4 bg-dark rounded-lg border-2 hover:bg-gray-100 cursor-pointer ' + props.current

  	return (
		<div onClick = {props.func} className = {className} id = {props.id}>
	        {props.tabName}
	    </div>
  )
}
