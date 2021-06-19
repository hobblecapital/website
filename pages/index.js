import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import Button from '../components/Button'
import Sample from '../components/Sample'
import Features from '../components/Features'
import Join from '../components/Join'
import Intercom from 'react-intercom';
import Examples from '../components/Examples'
import { useState, useEffect } from 'react'
import NewHero from '../components/NewHero'

export default function Home(props) {
  const user = {}

  return (
    <>
      <Head>
        <title>Atlas Finance</title>
        <meta property="og:title" content="Atlas Finance" key="title" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-HC8DP1RPHD`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HC8DP1RPHD', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>
      <Navbar />
      <Hero title = "Stock News, " titleBlue = 'The Moment It Hits' subtitle = "Atlas uses AI to detect and summarize stock news, getting it to you by SMS and email within 5 seconds of it coming out. " blueSubtitle = "Oh, and it's completely free." hidden = 'hidden'/>
      <About title = "What's the point?" explain  = "Unfortunately, retail is often the last to find out. Systems that alert you the moment news comes out costs upwards of $2000 per month, and require you to read 75-page filings. We're here to solve both of those issues." />
      <HowItWorks />
      <Sample title = 'Atlas uses AI to summarize any news that comes out' subtitle = "From FDA Drug Approval To Earnings Reports, You'll find out what actually happened - without the jargon."/>
      <Features title = "We're constantly adding new features" subtitle = "We love getting feature requests and are focused on adding new features as quickly as possible!" />
      <div hidden>
        <Examples title = 'Alerts That Perform.' subtitle = "Instead of guessing what's going to perform, we let data speak. Industrial grade tools for retail investors."/>
      </div>
      <Join title = "We'd love for you to join us" explain = "Atlas is a startup, and we're growing fast. We'd love to have you join us and give feedback on how to improve our system. Help us change investing.">
      </Join>
      <div className="app">
        <Intercom appID="mokppp47" { ...user } />
      </div>
    </>
  )
}

