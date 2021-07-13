import 'reflect-metadata';

import { Backend } from './back-end';
import config from './config';

const backend = new Backend(config);

backend.start();
