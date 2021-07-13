import R from 'ramda';
import util from 'util';
import w from 'winston';
import {
  Logger as LoggerInterface,
  LogLevel,
} from '../../../core/ports/driven';

const formatErrors = w.format(info => {
  if (R.is(Error, info.message)) {
    const error = (info.message as unknown) as Error;
    info.message = Object.assign(
      {
        message: error.message,
        stack: error.stack,
      },
      info.message
    );
  }

  if (R.is(Error, info)) {
    return Object.assign(
      {
        message: info.message,
        stack: info.stack,
      },
      info
    );
  }

  return info;
});

export class StdoutLogger implements LoggerInterface {
  private _winston: w.Logger;

  constructor(public logLevel: LogLevel) {
    this._winston = w.createLogger({
      level: this.logLevel.valueOf(),
      transports: [
        new w.transports.Console({
          format: w.format.combine(
            w.format(info => {
              info.message = util.format(info.message);
              return info;
            })(),
            formatErrors(),
            w.format.colorize(),
            w.format.simple()
          ),
        }),
      ],
    });
  }

  public debug(message: any) {
    return this._winston.debug(message);
  }

  public error(message: any) {
    return this._winston.error({
      level: LogLevel.Error.valueOf(),
      message,
    });
  }

  public info(message: any) {
    return this._winston.info(message);
  }

  public warn(message: any) {
    return this._winston.warn(message);
  }
}
