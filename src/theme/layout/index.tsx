import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <>
      {/* 👇 Ceci ajoute ton background flou sur TOUTES les pages */}
      <div className="background-gradient"></div>
      <Layout {...props} />
    </>
  );
}