import { Buffer } from 'buffer';
import { TcpSocket } from './tcp-socket';
export interface JsonSocketOptions {
    maxBufferSize?: number;
}
export declare class JsonSocket extends TcpSocket {
    private contentLength;
    private buffer;
    private readonly stringDecoder;
    private readonly delimiter;
    private readonly maxBufferSize;
    constructor(socket: any, options?: JsonSocketOptions);
    protected handleSend(message: any, callback?: (err?: any) => void): void;
    protected handleData(dataRaw: Buffer | string): void;
    private handleMessage;
    private formatMessageData;
}
