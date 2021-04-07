import express from "express";
import path from "path";
import React from "react";
import App from './components/App/App';
import Helmet from "react-helmet";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import config from '../config/config';
import {store, persistor} from "./store";
import { Provider as ReduxProvider } from "react-redux";
import routes from './routes';
import { PersistGate } from 'redux-persist/integration/react'

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.set('view engine', 'ejs');

app.get( "/*", ( req, res ) => {
    const context = { };
    
    
    
    
    
    
    const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) )
             // filter matching paths
            .map( route => route.component ) // map to components
            .filter( comp => comp.serverFetch ) // check if components have data requirement
            .map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement
    
    Promise.all( dataRequirements ).then( ( ) => {
        const jsx = (
            <ReduxProvider store={ store }>
                <PersistGate loading={null} persistor={persistor}>
                    <StaticRouter context={ context } location={ req.url }>
                        <App />
                    </StaticRouter>
                </PersistGate>
            </ReduxProvider>
        );
        const reactDom = renderToString( jsx );
        const reduxState = store.getState( );
        const helmetData = Helmet.renderStatic( );
        res.render('index', {
            helmetData,
            reactDom,
            reduxState
        });
    } );
} );

app.listen( config.port );