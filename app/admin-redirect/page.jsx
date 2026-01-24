'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function AdminRedirect() {
  useEffect(() => {
    // Redirect to admin page after identity initialization
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (user) {
          window.location.href = '/admin/';
        }
      });
    }
  }, []);

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Completing your registration...</h1>
          <p>You will be redirected to the admin panel.</p>
        </div>
      </div>
    </>
  );
}
