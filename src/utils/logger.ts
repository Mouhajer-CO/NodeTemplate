import { ApplicationLogger } from 'logging/dist/ApplicationLogger';
import { createLogger } from 'logging';

import { APPLICATION_NAME } from '../config';

let logger: ApplicationLogger | undefined = undefined;

export const log = (!logger) ? (logger = createLogger(APPLICATION_NAME)) : logger;
