import Link from 'next/link'
import Button from './Button'
import ButtonSecondary from './ButtonSecondary'

export default function Buttons(props) {
  return (
	<div className = 'flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center'>
		<Button path = 'https://dashboard.atlasfinance.org/sign-up.php' body = 'Join Free'/>
		<ButtonSecondary path = 'https://www.notion.so/shakeelhussein/Atlas-Finance-47d294a46cb94a85bd41e1e689f4699b' body = 'Read White Paper' />
	</div>

  )
}
