import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import UnicornIcon from '@site/static/img/unicorn.svg'; // <-- Ajoute ton SVG ici

export default function Home() {
  return (
    <Layout>
      <header className="hero">
        <div className="container">
          {/* 🦄 Titre + Licorne en flex */}
          <div className="hero-title">
            <img src="/img/unicorn.png" alt="Unicorn" className="hero-unicorn" />
            <h1 className="hero__title">EasyWallet Documentation</h1>
          </div>
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