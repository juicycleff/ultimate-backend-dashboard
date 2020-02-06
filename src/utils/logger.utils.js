// @flow
import * as clc from 'cli-color';
import {isObject} from './types.utils';

const yellow = clc.xterm(3);
declare var process: any;
export type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'verbose';

export interface LoggerService {
  log(message: any, context?: string): void;
  error(message: any, trace?: string, context?: string): void;
  warn(message: any, context?: string): void;
  debug?: (message: any, context?: string) => void;
  verbose?: (message: any, context?: string) => void;
}

export class Logger implements LoggerService {
  static logLevels: LogLevel[] = ['log', 'error', 'warn', 'debug', 'verbose'];
  static lastTimestamp: number;
  static instance: typeof Logger | LoggerService = Logger;

  isTimestampEnabled: boolean;
  context: string;

  constructor(context?: string, isTimestampEnabled: boolean = false): any {
    this.isTimestampEnabled = isTimestampEnabled;
    this.context = context;
  }

  error(message: any, trace = '', context?: string) {
    const instance = this.getInstance();
    if (!this.isLogLevelEnabled('error')) {
      return;
    }
    instance &&
      instance.error.call(instance, message, trace, context || this.context);
  }

  log(message: any, context?: string) {
    this.callFunction('log', message, context);
  }

  warn(message: any, context?: string) {
    this.callFunction('warn', message, context);
  }

  debug(message: any, context?: string) {
    this.callFunction('debug', message, context);
  }

  verbose(message: any, context?: string) {
    this.callFunction('verbose', message, context);
  }

  setContext(context: string) {
    this.context = context;
  }

  static overrideLogger(logger: LoggerService | LogLevel[] | boolean) {
    if (Array.isArray(logger)) {
      this.logLevels = logger;
      return;
    }
    this.instance = isObject(logger) ? logger : undefined;
  }

  static log(message: any, context = '', isTimeDiffEnabled = true) {
    this.printMessage(message, clc.green, context, isTimeDiffEnabled);
  }

  static error(
    message: any,
    trace = '',
    context = '',
    isTimeDiffEnabled = true
  ) {
    this.printMessage(message, clc.red, context, isTimeDiffEnabled);
    this.printStackTrace(trace);
  }

  static warn(message: any, context = '', isTimeDiffEnabled = true) {
    this.printMessage(message, clc.yellow, context, isTimeDiffEnabled);
  }

  static debug(message: any, context = '', isTimeDiffEnabled = true) {
    this.printMessage(message, clc.magentaBright, context, isTimeDiffEnabled);
  }

  static verbose(message: any, context = '', isTimeDiffEnabled = true) {
    this.printMessage(message, clc.cyanBright, context, isTimeDiffEnabled);
  }

  callFunction(
    name: 'log' | 'warn' | 'debug' | 'verbose',
    message: any,
    context?: string
  ) {
    if (!this.isLogLevelEnabled(name)) {
      return;
    }
    const instance = this.getInstance();
    const func = instance && instance[name];
    func &&
      func.call(
        instance,
        message,
        context || this.context,
        this.isTimestampEnabled
      );
  }

  getInstance(): typeof Logger | LoggerService {
    const {instance} = Logger;
    return instance === this ? Logger : instance;
  }

  isLogLevelEnabled(level: LogLevel): boolean {
    return Logger.logLevels.includes(level);
  }

  static printMessage(
    message: any,
    color: (message: string) => string,
    context: string = '',
    isTimeDiffEnabled?: boolean
  ) {
    const output = isObject(message)
      ? `${color('Object:')}\n${JSON.stringify(message, null, 2)}\n`
      : color(message);

    const localeStringOptions = {
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: '2-digit',
      month: '2-digit',
    };
    const timestamp = new Date(Date.now()).toLocaleString(
      undefined,
      localeStringOptions
    );

    const pidMessage = color(`[Nest] ${process.pid}   - `);
    const contextMessage = context ? yellow(`[${context}] `) : '';
    const timestampDiff = this.updateAndGetTimestampDiff(isTimeDiffEnabled);

    process.stdout.write(
      `${pidMessage}${timestamp}   ${contextMessage}${output}${timestampDiff}\n`
    );
  }

  static updateAndGetTimestampDiff(isTimeDiffEnabled?: boolean): string {
    const includeTimestamp = Logger.lastTimestamp && isTimeDiffEnabled;
    const result = includeTimestamp
      ? yellow(` +${Date.now() - Logger.lastTimestamp}ms`)
      : '';
    Logger.lastTimestamp = Date.now();
    return result;
  }

  static printStackTrace(trace: string) {
    if (!trace) {
      return;
    }
    process.stdout.write(`${trace}\n`);
  }
}
