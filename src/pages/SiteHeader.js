// src/pages/SiteBanner.js
import React from 'react'

const SiteBanner = () => {
	const siteName = "Movie Quotes"
	const siteMotto = "Sieze Life! Inspirational Movie Quotes React App"

  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{siteName}</h1>
            <h2 className="subtitle"> {siteMotto}</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default SiteBanner
