
export type MessageHandler = (callback: CallbackFunction, ...params: any[]) => Promise<any>;

export interface MessageSource {
  addListener(messageType: string, messageHandler: MessageHandler): void;
  removeListener(messageType: string, messageHandler: MessageHandler): void;
}

export interface ExecutorConstructor {
  new (messageSource: MessageSource) : Executor;
}

export abstract class Executor {
  protected constructor(messageSource: MessageSource) { }
}