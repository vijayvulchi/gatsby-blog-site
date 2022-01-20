import * as React from 'react'
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

// ReactGA.initialize('G-C33ZXP1VNP');


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  const handleGitHub = () => {
    ReactGA.event({
      category: 'Links',
      action: 'GitHub',
      label: 'GitHub button clicked!',
      value: 1
    });
  }
 
  // handle StackBlitz button click
  const handleStackBlitz = () => {
    ReactGA.event({
      category: 'Links',
      action: 'StackBlitz',
      label: 'StackBlitz button clicked!',
      value: 1
    });
  }

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <div style={{ marginTop: 15, marginBottom: 15 }}>
        <input type="button" value="Download GitHub Source" onClick={handleGitHub}></input>
        <input type="button" value="StackBlitz Project" onClick={handleStackBlitz} style={{ marginLeft: 15 }}></input>
      </div>
    </div>
  )
}

export default Layout