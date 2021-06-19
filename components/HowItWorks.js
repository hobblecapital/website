export default function HowItWorks(props) {
  return (
    <section className = 'w-full relative text-center max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        <div className = 'w-full px-4 sm:px-6 md:px-8 pb-24'>
            <section className = 'flex flex-wrap -mx-3 sm:flex-rows'>
                <div className = 'flex-row w-full sm:w-2/6'>
                    <p className = 'text-blue-500 pb-4'>STEP ONE</p>
                    <h3 className = 'text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold text-gray-900 tracking-tight mb-4'>
                        Join Us
                    </h3>
                    <p className = 'max-w-4xl text-base sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-4'>
                        Sign up for Atlas and get a full month on us to test out our system.
                    </p>
                </div>
                <div className = 'flex-row w-full sm:w-2/6'>
                    <p className = 'text-blue-500 pb-4'>STEP TWO</p>
                    <h3 className = 'text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold text-gray-900 tracking-tight mb-4'>
                        Customize Alerts
                    </h3>
                    <p className = 'max-w-4xl text-base sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-4'>
                        Use the Atlas dashboard to watch certain companies, filter for certain alert types, and more.
                    </p>
                </div>
                <div className = 'flex-row w-full sm:w-2/6'>
                    <p className = 'text-blue-500 pb-4'>STEP THREE</p>
                    <h3 className = 'text-3xl sm:text-3xl lg:text-3xl leading-none font-extrabold text-gray-900 tracking-tight mb-4'>
                        Profit.
                    </h3>
                    <p className = 'max-w-4xl text-base sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-4'>
                        Get critical news delivered by SMS and email. Stop finding out too late.
                    </p>
                </div>
            </section>
        </div>
    </section>
    
  )
}
