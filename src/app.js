import * as dotenv  from 'dotenv';

import bodyParser from 'body-parser'
import express from 'express';
import { notFound, errorHandler } from './middleware/index.js';
import morgan from 'morgan';
import helmet  from 'helmet';
import  router from './route/index.route.js';
 
dotenv.config({path:'../.env'});

export default class App{
    
    constructor(){
        this.app =  express();
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(process.env.API_PREFIX || '/api',router);
        this.app.use(notFound);
        this.app.use(errorHandler);
    }
}