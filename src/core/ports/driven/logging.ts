export enum LogLevel {
  Debug = 'debug',
  Error = 'error',
  Info = 'info',
  Warn = 'warn',
}

export interface Logger {
  debug(message: any): void;
  error(message: any): void;
  info(message: any): void;
  warn(message: any): void;
}
