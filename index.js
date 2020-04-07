import functions from 'firebase-funcions';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Routes from './src/routes';
import {getVideo} from './src/helpers/db'
import express from 'express';

const app = express();

app.get('**', (req, res)=>{
    const html = renderToString(<Routes />);
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(html);
})

export let ssrApp = functions.https.onRequest(app);