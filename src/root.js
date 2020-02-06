// @flow
import React from 'react';
import {Helmet} from 'fusion-plugin-react-helmet-async';
import Router from './router';
import {ThemeProvider, LightTheme} from './styles';

const root = (
  <ThemeProvider theme={LightTheme}>
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Public+Sans:400,500,700&display=swap"
        rel="stylesheet"
      />

      <style>
        {`
              html,body,#root{height:100%;}
              html {
                font-family: "Montserrat", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                -ms-text-size-adjust:100%;
                -webkit-text-size-adjust:100%;
                -webkit-tap-highlight-color:rgba(0,0,0,0);
              }
              body{margin:0;}
              a {text-decoration: none;}
              input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
            `}
      </style>
    </Helmet>
    <Router />
  </ThemeProvider>
);

export default root;
