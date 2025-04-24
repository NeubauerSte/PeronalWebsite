import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import "./i18n"
import { HelmetProvider } from 'react-helmet-async'
import React from 'react'


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>,
)
