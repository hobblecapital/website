import Button from '../components/Button'

export default function Join(props) {

  return (
    <section className = 'relative text-center max-w-screen-lg xl:max-w-screen-xl mx-auto'>
      <div className = 'sm:px-4 sm:px-6 md:px-8 pb-10 sm:pb-24 p-6'>
        <h3 className = 'text-3xl sm:text-4xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-8'>
          {props.title}
        </h3>
        <figure>
          <blockquote>
            <p className = 'max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6'>
              {props.explain}
            </p>
          </blockquote>
        </figure>
      </div>
      <div className = 'px-4 sm:px-6 md:px-8 pt-0 pb-24 sm:-m-20'>
        <Button path = 'https://dashboard.atlasfinance.org/sign-up.php' body = 'Join Free' />
      </div>
    </section>
  )
}

