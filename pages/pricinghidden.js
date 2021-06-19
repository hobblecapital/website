import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/pricing/Hero'
import Button from '../components/Button'
import PlanBlock from '../components/pricing/PlanBlock'
import Intercom from 'react-intercom';
import { IntercomAPI } from 'react-intercom';

export default function Home(props) {

  const user = {
    apples: 2
  }

  IntercomAPI('update', { user });
 
  return (
    <>
      <Head>
        <title>Pricing | Atlas Finance</title>
        <meta property="og:title" content="Atlas Finance" key="title" />
      </Head>
      <Navbar />
        <Hero title = 'Pricing. ' titleBlue = 'Get A Month On Us.' subtitle = 'Pay by month or the year, and cancel at any time. All plans come with a full month free trial.'/>
        <section className = 'relative max-w-screen-lg xl:max-w-screen-xl mx-auto sm:pb-16'>
          <div className = 'px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8'>
            <div className = 'grid grid-rows-2 sm:grid-cols-2 gap-x-8'>
              <PlanBlock price = '12' interval = 'Monthly' buttonBody = 'Sign Up' arr = '→' path = 'https://dashboard.atlasfinance.org/sign-up.php'/>
              <PlanBlock price = '99' interval = 'Yearly' buttonBody = 'Coming Soon...' arr = '' path = '/pricing'/>
            </div>
        </div>
      </section>
      <div className="app">
        <Intercom appID="mokppp47" { ...user } />
      </div>
    </>
  )
}

