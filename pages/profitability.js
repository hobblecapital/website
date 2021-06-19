import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/pricing/Hero'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import Button from '../components/Button'
import Sample from '../components/Sample'
import Features from '../components/Features'
import Join from '../components/Join'
import Intercom from 'react-intercom';
import Examples from '../components/Examples'
import { useState, useEffect } from 'react'

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
      <Hero title = "Alerts That " titleBlue = 'Perform.' subtitle = "Our alerts are only as useful as the amount of money they make you. Rest assured, our main priority is improving our system - and therefore making you money." />
      <div className = 'w-screen'>
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

