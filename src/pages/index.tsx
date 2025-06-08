import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Ajout du Background Gradient */}
      <div className="background-gradient"></div>
      <div className="background-gradient-extra"></div>

      <header className="hero">
        <div className="container">
          <h1 className="hero__title">EasyWallet Documentation</h1>
          <p className="hero__subtitle">
            Onboard your users in minutes with Web3 Authentication, Token Gating, and NFTs.
          </p>
          <div className="buttons">
            <Link className="button" to="/docs/quickstart">
              🚀 Get Started
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}