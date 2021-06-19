import Link from 'next/link'

export default function Check(props) {
  return (
    <dd className="text-lg sm:text-xl font-medium text-gray-700 rounded-full py-1 pl-2 pr-4 flex items-center mb-2">
        <svg width="20" height="20" fill="currentColor" class="hidden sm:block text-green-500 mr-2">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
        </svg>
        {props.content}
    </dd>
  )
}
