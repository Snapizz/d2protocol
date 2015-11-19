// Type definitions for Node.js v4.x
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <http://typescriptlang.org>, DefinitelyTyped <https://github.com/borisyankov/DefinitelyTyped>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/************************************************
*                                               *
*               Node.js v4.x API                *
*                                               *
************************************************/

interface Error {
    stack?: string;
}


// compat for TypeScript 1.5.3
// if you use with --target es3 or --target es5 and use below definitions,
// use the lib.es6.d.ts that is bundled with TypeScript 1.5.3.
interface MapConstructor {}
interface WeakMapConstructor {}
interface SetConstructor {}
interface WeakSetConstructor {}

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: NodeJS.Process;
declare var global: NodeJS.Global;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearTimeout(timeoutId: NodeJS.Timer): void;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearInterval(intervalId: NodeJS.Timer): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
declare function clearImmediate(immediateId: any): void;

interface NodeRequireFunction {
    (id: string): any;
}

interface NodeRequire extends NodeRequireFunction {
    resolve(id:string): string;
    cache: any;
    extensions: any;
    main: any;
}

declare var require: NodeRequire;

interface NodeModule {
    exports: any;
    require: NodeRequireFunction;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
}

declare var module: NodeModule;

// Same as module.exports
declare var exports: any;
declare var SlowBuffer: {
    new (str: string, encoding?: string): Buffer;
    new (size: number): Buffer;
    new (size: Uint8Array): Buffer;
    new (array: any[]): Buffer;
    prototype: Buffer;
    isBuffer(obj: any): boolean;
    byteLength(string: string, encoding?: string): number;
    concat(list: Buffer[], totalLength?: number): Buffer;
};


// Buffer class
interface Buffer extends NodeBuffer {}

/**
 * Raw data is stored in instances of the Buffer class.
 * A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
 * Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
 */
declare var Buffer: {
    /**
     * Allocates a new buffer containing the given {str}.
     *
     * @param str String to store in buffer.
     * @param encoding encoding to use, optional.  Default is 'utf8'
     */
    new (str: string, encoding?: string): Buffer;
    /**
     * Allocates a new buffer of {size} octets.
     *
     * @param size count of octets to allocate.
     */
    new (size: number): Buffer;
    /**
     * Allocates a new buffer containing the given {array} of octets.
     *
     * @param array The octets to store.
     */
    new (array: Uint8Array): Buffer;
    /**
     * Allocates a new buffer containing the given {array} of octets.
     *
     * @param array The octets to store.
     */
    new (array: any[]): Buffer;
    prototype: Buffer;
    /**
     * Returns true if {obj} is a Buffer
     *
     * @param obj object to test.
     */
    isBuffer(obj: any): boolean;
    /**
     * Returns true if {encoding} is a valid encoding argument.
     * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
     *
     * @param encoding string to test.
     */
    isEncoding(encoding: string): boolean;
    /**
     * Gives the actual byte length of a string. encoding defaults to 'utf8'.
     * This is not the same as String.prototype.length since that returns the number of characters in a string.
     *
     * @param string string to test.
     * @param encoding encoding used to evaluate (defaults to 'utf8')
     */
    byteLength(string: string, encoding?: string): number;
    /**
     * Returns a buffer which is the result of concatenating all the buffers in the list together.
     *
     * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
     * If the list has exactly one item, then the first item of the list is returned.
     * If the list has more than one item, then a new Buffer is created.
     *
     * @param list An array of Buffer objects to concatenate
     * @param totalLength Total length of the buffers when concatenated.
     *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
     */
    concat(list: Buffer[], totalLength?: number): Buffer;
    /**
     * The same as buf1.compare(buf2).
     */
    compare(buf1: Buffer, buf2: Buffer): number;
};

/************************************************
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
************************************************/
declare module NodeJS {
    export interface ErrnoException extends Error {
        errno?: number;
        code?: string;
        path?: string;
        syscall?: string;
        stack?: string;
    }

    export interface EventEmitter {
        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }

    export interface ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): string|Buffer;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): void;
        unshift(chunk: string): void;
        unshift(chunk: Buffer): void;
        wrap(oldStream: ReadableStream): ReadableStream;
    }

    export interface WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer: Buffer|string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    export interface ReadWriteStream extends ReadableStream, WritableStream {}

    export interface Process extends EventEmitter {
        stdout: WritableStream;
        stderr: WritableStream;
        stdin: ReadableStream;
        argv: string[];
        execPath: string;
        abort(): void;
        chdir(directory: string): void;
        cwd(): string;
        env: any;
        exit(code?: number): void;
        getgid(): number;
        setgid(id: number): void;
        setgid(id: string): void;
        getuid(): number;
        setuid(id: number): void;
        setuid(id: string): void;
        version: string;
        versions: {
            http_parser: string;
            node: string;
            v8: string;
            ares: string;
            uv: string;
            zlib: string;
            openssl: string;
        };
        config: {
            target_defaults: {
                cflags: any[];
                default_configuration: string;
                defines: string[];
                include_dirs: string[];
                libraries: string[];
            };
            variables: {
                clang: number;
                host_arch: string;
                node_install_npm: boolean;
                node_install_waf: boolean;
                node_prefix: string;
                node_shared_openssl: boolean;
                node_shared_v8: boolean;
                node_shared_zlib: boolean;
                node_use_dtrace: boolean;
                node_use_etw: boolean;
                node_use_openssl: boolean;
                target_arch: string;
                v8_no_strict_aliasing: number;
                v8_use_snapshot: boolean;
                visibility: string;
            };
        };
        kill(pid: number, signal?: string): void;
        pid: number;
        title: string;
        arch: string;
        platform: string;
        memoryUsage(): { rss: number; heapTotal: number; heapUsed: number; };
        nextTick(callback: Function): void;
        umask(mask?: number): number;
        uptime(): number;
        hrtime(time?:number[]): number[];

        // Worker
        send?(message: any, sendHandle?: any): void;
    }

    export interface Global {
        Array: typeof Array;
        ArrayBuffer: typeof ArrayBuffer;
        Boolean: typeof Boolean;
        Buffer: typeof Buffer;
        DataView: typeof DataView;
        Date: typeof Date;
        Error: typeof Error;
        EvalError: typeof EvalError;
        Float32Array: typeof Float32Array;
        Float64Array: typeof Float64Array;
        Function: typeof Function;
        GLOBAL: Global;
        Infinity: typeof Infinity;
        Int16Array: typeof Int16Array;
        Int32Array: typeof Int32Array;
        Int8Array: typeof Int8Array;
        Intl: typeof Intl;
        JSON: typeof JSON;
        Map: MapConstructor;
        Math: typeof Math;
        NaN: typeof NaN;
        Number: typeof Number;
        Object: typeof Object;
        Promise: Function;
        RangeError: typeof RangeError;
        ReferenceError: typeof ReferenceError;
        RegExp: typeof RegExp;
        Set: SetConstructor;
        String: typeof String;
        Symbol: Function;
        SyntaxError: typeof SyntaxError;
        TypeError: typeof TypeError;
        URIError: typeof URIError;
        Uint16Array: typeof Uint16Array;
        Uint32Array: typeof Uint32Array;
        Uint8Array: typeof Uint8Array;
        Uint8ClampedArray: Function;
        WeakMap: WeakMapConstructor;
        WeakSet: WeakSetConstructor;
        clearImmediate: (immediateId: any) => void;
        clearInterval: (intervalId: NodeJS.Timer) => void;
        clearTimeout: (timeoutId: NodeJS.Timer) => void;
        console: typeof console;
        decodeURI: typeof decodeURI;
        decodeURIComponent: typeof decodeURIComponent;
        encodeURI: typeof encodeURI;
        encodeURIComponent: typeof encodeURIComponent;
        escape: (str: string) => string;
        eval: typeof eval;
        global: Global;
        isFinite: typeof isFinite;
        isNaN: typeof isNaN;
        parseFloat: typeof parseFloat;
        parseInt: typeof parseInt;
        process: Process;
        root: Global;
        setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => any;
        setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
        setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
        undefined: typeof undefined;
        unescape: (str: string) => string;
        gc: () => void;
        v8debug?: any;
    }

    export interface Timer {
        ref() : void;
        unref() : void;
    }
}

/**
 * @deprecated
 */
interface NodeBuffer {
    [index: number]: number;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
    toJSON(): any;
    length: number;
    equals(otherBuffer: Buffer): boolean;
    compare(otherBuffer: Buffer): number;
    copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    slice(start?: number, end?: number): Buffer;
    writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
    readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
    readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
    readIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
    readIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
    readUInt8(offset: number, noAsset?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    writeUInt8(value: number, offset: number, noAssert?: boolean): number;
    writeUInt16LE(value: number, offset: number, noAssert?: boolean): number;
    writeUInt16BE(value: number, offset: number, noAssert?: boolean): number;
    writeUInt32LE(value: number, offset: number, noAssert?: boolean): number;
    writeUInt32BE(value: number, offset: number, noAssert?: boolean): number;
    writeInt8(value: number, offset: number, noAssert?: boolean): number;
    writeInt16LE(value: number, offset: number, noAssert?: boolean): number;
    writeInt16BE(value: number, offset: number, noAssert?: boolean): number;
    writeInt32LE(value: number, offset: number, noAssert?: boolean): number;
    writeInt32BE(value: number, offset: number, noAssert?: boolean): number;
    writeFloatLE(value: number, offset: number, noAssert?: boolean): number;
    writeFloatBE(value: number, offset: number, noAssert?: boolean): number;
    writeDoubleLE(value: number, offset: number, noAssert?: boolean): number;
    writeDoubleBE(value: number, offset: number, noAssert?: boolean): number;
    fill(value: any, offset?: number, end?: number): Buffer;
}

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "buffer" {
    export var INSPECT_MAX_BYTES: number;
}

declare module "querystring" {
    export function stringify(obj: any, sep?: string, eq?: string): string;
    export function parse(str: string, sep?: string, eq?: string, options?: { maxKeys?: number; }): any;
    export function escape(str: string): string;
    export function unescape(str: string): string;
}

declare module "events" {
    export class EventEmitter implements NodeJS.EventEmitter {
        static listenerCount(emitter: EventEmitter, event: string): number;

        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
   }
}

declare module "http" {
    import * as events from "events";
    import * as net from "net";
    import * as stream from "stream";
    
    export interface RequestOptions {
        protocol?: string;
        host?: string;
        hostname?: string;
        family?: number;
        port?: number
        localAddress?: string;
        socketPath?: string;
        method?: string;
        path?: string;
        headers?: { [key: string]: any };
        auth?: string;
        agent?: Agent;
    }

    export interface Server extends events.EventEmitter {
        listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server;
        listen(port: number, hostname?: string, callback?: Function): Server;
        listen(path: string, callback?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(cb?: any): Server;
        address(): { port: number; family: string; address: string; };
        maxHeadersCount: number;
    }
    /**
     * @deprecated Use IncomingMessage
     */
    export interface ServerRequest extends IncomingMessage {
        connection: net.Socket;
    }
    export interface ServerResponse extends events.EventEmitter, stream.Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        writeContinue(): void;
        writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void;
        writeHead(statusCode: number, headers?: any): void;
        statusCode: number;
        statusMessage: string;
        setHeader(name: string, value: string): void;
        sendDate: boolean;
        getHeader(name: string): string;
        removeHeader(name: string): void;
        write(chunk: any, encoding?: string): any;
        addTrailers(headers: any): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    export interface ClientRequest extends events.EventEmitter, stream.Writable {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        write(chunk: any, encoding?: string): void;
        abort(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }
    export interface IncomingMessage extends events.EventEmitter, stream.Readable {
        httpVersion: string;
        headers: any;
        rawHeaders: string[];
        trailers: any;
        rawTrailers: any;
        setTimeout(msecs: number, callback: Function): NodeJS.Timer;
        /**
         * Only valid for request obtained from http.Server.
         */
        method?: string;
        /**
         * Only valid for request obtained from http.Server.
         */
        url?: string;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusCode?: number;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusMessage?: string;
        socket: net.Socket;
    }
    /**
     * @deprecated Use IncomingMessage
     */
    export interface ClientResponse extends IncomingMessage { }

	export interface AgentOptions {
		/**
		 * Keep sockets around in a pool to be used by other requests in the future. Default = false
		 */
		keepAlive?: boolean;
		/**
		 * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
		 * Only relevant if keepAlive is set to true.
		 */
		keepAliveMsecs?: number;
		/**
		 * Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
		 */
		maxSockets?: number;
		/**
		 * Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
		 */
		maxFreeSockets?: number;
	}

    export class Agent {
		maxSockets: number;
		sockets: any;
		requests: any;

		constructor(opts?: AgentOptions);

		/**
		 * Destroy any sockets that are currently in use by the agent.
		 * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
		 * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
		 * sockets may hang open for quite a long time before the server terminates them.
		 */
		destroy(): void;
	}

    export var METHODS: string[];

    export var STATUS_CODES: {
        [errorCode: number]: string;
        [errorCode: string]: string;
    };
    export function createServer(requestListener?: (request: IncomingMessage, response: ServerResponse) =>void ): Server;
    export function createClient(port?: number, host?: string): any;
    export function request(options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
    export function get(options: any, callback?: (res: IncomingMessage) => void): ClientRequest;
    export var globalAgent: Agent;
}

declare module "cluster" {
    import * as child from "child_process";
    import * as events from "events";

    export interface ClusterSettings {
        exec?: string;
        args?: string[];
        silent?: boolean;
    }

    export class Worker extends events.EventEmitter {
        id: string;
        process: child.ChildProcess;
        suicide: boolean;
        send(message: any, sendHandle?: any): void;
        kill(signal?: string): void;
        destroy(signal?: string): void;
        disconnect(): void;
    }

    export var settings: ClusterSettings;
    export var isMaster: boolean;
    export var isWorker: boolean;
    export function setupMaster(settings?: ClusterSettings): void;
    export function fork(env?: any): Worker;
    export function disconnect(callback?: Function): void;
    export var worker: Worker;
    export var workers: Worker[];

    // Event emitter
    export function addListener(event: string, listener: Function): void;
    export function on(event: string, listener: Function): any;
    export function once(event: string, listener: Function): void;
    export function removeListener(event: string, listener: Function): void;
    export function removeAllListeners(event?: string): void;
    export function setMaxListeners(n: number): void;
    export function listeners(event: string): Function[];
    export function emit(event: string, ...args: any[]): boolean;
}

declare module "zlib" {
    import * as stream from "stream";
    export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

    export interface Gzip extends stream.Transform { }
    export interface Gunzip extends stream.Transform { }
    export interface Deflate extends stream.Transform { }
    export interface Inflate extends stream.Transform { }
    export interface DeflateRaw extends stream.Transform { }
    export interface InflateRaw extends stream.Transform { }
    export interface Unzip extends stream.Transform { }

    export function createGzip(options?: ZlibOptions): Gzip;
    export function createGunzip(options?: ZlibOptions): Gunzip;
    export function createDeflate(options?: ZlibOptions): Deflate;
    export function createInflate(options?: ZlibOptions): Inflate;
    export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    export function createInflateRaw(options?: ZlibOptions): InflateRaw;
    export function createUnzip(options?: ZlibOptions): Unzip;

    export function deflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function deflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function gzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function gunzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gunzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function unzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function unzipSync(buf: Buffer, options?: ZlibOptions): any;

    // Constants
    export var Z_NO_FLUSH: number;
    export var Z_PARTIAL_FLUSH: number;
    export var Z_SYNC_FLUSH: number;
    export var Z_FULL_FLUSH: number;
    export var Z_FINISH: number;
    export var Z_BLOCK: number;
    export var Z_TREES: number;
    export var Z_OK: number;
    export var Z_STREAM_END: number;
    export var Z_NEED_DICT: number;
    export var Z_ERRNO: number;
    export var Z_STREAM_ERROR: number;
    export var Z_DATA_ERROR: number;
    export var Z_MEM_ERROR: number;
    export var Z_BUF_ERROR: number;
    export var Z_VERSION_ERROR: number;
    export var Z_NO_COMPRESSION: number;
    export var Z_BEST_SPEED: number;
    export var Z_BEST_COMPRESSION: number;
    export var Z_DEFAULT_COMPRESSION: number;
    export var Z_FILTERED: number;
    export var Z_HUFFMAN_ONLY: number;
    export var Z_RLE: number;
    export var Z_FIXED: number;
    export var Z_DEFAULT_STRATEGY: number;
    export var Z_BINARY: number;
    export var Z_TEXT: number;
    export var Z_ASCII: number;
    export var Z_UNKNOWN: number;
    export var Z_DEFLATED: number;
    export var Z_NULL: number;
}

declare module "os" {
    export function tmpdir(): string;
    export function hostname(): string;
    export function type(): string;
    export function platform(): string;
    export function arch(): string;
    export function release(): string;
    export function uptime(): number;
    export function loadavg(): number[];
    export function totalmem(): number;
    export function freemem(): number;
    export function cpus(): { model: string; speed: number; times: { user: number; nice: number; sys: number; idle: number; irq: number; }; }[];
    export function networkInterfaces(): any;
    export var EOL: string;
}

declare module "https" {
    import * as tls from "tls";
    import * as events from "events";
    import * as http from "http";

    export interface ServerOptions {
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        crl?: any;
        ciphers?: string;
        honorCipherOrder?: boolean;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;
        SNICallback?: (servername: string) => any;
    }

    export interface RequestOptions extends http.RequestOptions{
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        ciphers?: string;
        rejectUnauthorized?: boolean;
        secureProtocol?: string;
    }

    export interface Agent {
        maxSockets: number;
        sockets: any;
        requests: any;
    }
    export var Agent: {
        new (options?: RequestOptions): Agent;
    };
    export interface Server extends tls.Server { }
    export function createServer(options: ServerOptions, requestListener?: Function): Server;
    export function request(options: RequestOptions, callback?: (res: http.IncomingMessage) =>void ): http.ClientRequest;
    export function get(options: RequestOptions, callback?: (res: http.IncomingMessage) =>void ): http.ClientRequest;
    export var globalAgent: Agent;
}

declare module "punycode" {
    export function decode(string: string): string;
    export function encode(string: string): string;
    export function toUnicode(domain: string): string;
    export function toASCII(domain: string): string;
    export var ucs2: ucs2;
    interface ucs2 {
        decode(string: string): number[];
        encode(codePoints: number[]): string;
    }
    export var version: any;
}

declare module "repl" {
    import * as stream from "stream";
    import * as events from "events";

    export interface ReplOptions {
        prompt?: string;
        input?: NodeJS.ReadableStream;
        output?: NodeJS.WritableStream;
        terminal?: boolean;
        eval?: Function;
        useColors?: boolean;
        useGlobal?: boolean;
        ignoreUndefined?: boolean;
        writer?: Function;
    }
    export function start(options: ReplOptions): events.EventEmitter;
}

declare module "readline" {
    import * as events from "events";
    import * as stream from "stream";

    export interface ReadLine extends events.EventEmitter {
        setPrompt(prompt: string): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, callback: Function): void;
        pause(): void;
        resume(): void;
        close(): void;
        write(data: any, key?: any): void;
    }
    export interface ReadLineOptions {
        input: NodeJS.ReadableStream;
        output: NodeJS.WritableStream;
        completer?: Function;
        terminal?: boolean;
    }
    export function createInterface(options: ReadLineOptions): ReadLine;
}

declare module "vm" {
    export interface Context { }
    export interface Script {
        runInThisContext(): void;
        runInNewContext(sandbox?: Context): void;
    }
    export function runInThisContext(code: string, filename?: string): void;
    export function runInNewContext(code: string, sandbox?: Context, filename?: string): void;
    export function runInContext(code: string, context: Context, filename?: string): void;
    export function createContext(initSandbox?: Context): Context;
    export function createScript(code: string, filename?: string): Script;
}

declare module "child_process" {
    import * as events from "events";
    import * as stream from "stream";

    export interface ChildProcess extends events.EventEmitter {
        stdin:  stream.Writable;
        stdout: stream.Readable;
        stderr: stream.Readable;
        pid: number;
        kill(signal?: string): void;
        send(message: any, sendHandle?: any): void;
        disconnect(): void;
        unref(): void;
    }

    export function spawn(command: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        custom?: any;
        env?: any;
        detached?: boolean;
    }): ChildProcess;
    export function exec(command: string, options: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function exec(command: string, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string,
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string, args?: string[],
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function fork(modulePath: string, args?: string[], options?: {
        cwd?: string;
        env?: any;
        encoding?: string;
    }): ChildProcess;
    export function spawnSync(command: string, args?: string[], options?: {
        cwd?: string;
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): {
        pid: number;
        output: string[];
        stdout: string | Buffer;
        stderr: string | Buffer;
        status: number;
        signal: string;
        error: Error;
    };
    export function execSync(command: string, options?: {
        cwd?: string;
        input?: string|Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): string | Buffer;
    export function execFileSync(command: string, args?: string[], options?: {
        cwd?: string;
        input?: string|Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): string | Buffer;
}

declare module "url" {
    export interface Url {
        href?: string;
        protocol?: string;
        auth?: string;
        hostname?: string;
        port?: string;
        host?: string;
        pathname?: string;
        search?: string;
        query?: any; // string | Object
        slashes?: boolean;
        hash?: string;
        path?: string;
    }

    export function parse(urlStr: string, parseQueryString?: boolean , slashesDenoteHost?: boolean ): Url;
    export function format(url: Url): string;
    export function resolve(from: string, to: string): string;
}

declare module "dns" {
    export function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) =>void ): string;
    export function lookup(domain: string, callback: (err: Error, address: string, family: number) =>void ): string;
    export function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve4(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve6(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveMx(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function reverse(ip: string, callback: (err: Error, domains: string[]) =>void ): string[];
}

declare module "net" {
    import * as stream from "stream";

    export interface Socket extends stream.Duplex {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;
        bufferSize: number;
        setEncoding(encoding?: string): void;
        write(data: any, encoding?: string, callback?: Function): void;
        destroy(): void;
        pause(): void;
        resume(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setKeepAlive(enable?: boolean, initialDelay?: number): void;
        address(): { port: number; family: string; address: string; };
        unref(): void;
        ref(): void;

        remoteAddress: string;
        remoteFamily: string;
        remotePort: number;
        localAddress: string;
        localPort: number;
        bytesRead: number;
        bytesWritten: number;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;
    }

    export var Socket: {
        new (options?: { fd?: string; type?: string; allowHalfOpen?: boolean; }): Socket;
    };

    export interface Server extends Socket {
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(callback?: Function): Server;
        address(): { port: number; family: string; address: string; };
        maxConnections: number;
        connections: number;
    }
    export function createServer(connectionListener?: (socket: Socket) =>void ): Server;
    export function createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: Socket) =>void ): Server;
    export function connect(options: { port: number, host?: string, localAddress? : string, localPort? : string, family? : number, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    export function connect(port: number, host?: string, connectionListener?: Function): Socket;
    export function connect(path: string, connectionListener?: Function): Socket;
    export function createConnection(options: { port: number, host?: string, localAddress? : string, localPort? : string, family? : number, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    export function createConnection(port: number, host?: string, connectionListener?: Function): Socket;
    export function createConnection(path: string, connectionListener?: Function): Socket;
    export function isIP(input: string): number;
    export function isIPv4(input: string): boolean;
    export function isIPv6(input: string): boolean;
}

declare module "dgram" {
    import * as events from "events";

    interface RemoteInfo {
        address: string;
        port: number;
        size: number;
    }

    interface AddressInfo {
        address: string;
        family: string;
        port: number;
    }

    export function createSocket(type: string, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

    interface Socket extends events.EventEmitter {
        send(buf: Buffer, offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number) => void): void;
        bind(port: number, address?: string, callback?: () => void): void;
        close(): void;
        address(): AddressInfo;
        setBroadcast(flag: boolean): void;
        setMulticastTTL(ttl: number): void;
        setMulticastLoopback(flag: boolean): void;
        addMembership(multicastAddress: string, multicastInterface?: string): void;
        dropMembership(multicastAddress: string, multicastInterface?: string): void;
    }
}

declare module "fs" {
    import * as stream from "stream";
    import * as events from "events";

    interface Stats {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
        birthtime: Date;
    }

    interface FSWatcher extends events.EventEmitter {
        close(): void;
    }

    export interface ReadStream extends stream.Readable {
        close(): void;
    }
    export interface WriteStream extends stream.Writable {
        close(): void;
        bytesWritten: number;
    }

    /**
     * Asynchronous rename.
     * @param oldPath
     * @param newPath
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Synchronous rename
     * @param oldPath
     * @param newPath
     */
    export function renameSync(oldPath: string, newPath: string): void;
    export function truncate(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncate(path: string, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncateSync(path: string, len?: number): void;
    export function ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncate(fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncateSync(fd: number, len?: number): void;
    export function chown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chownSync(path: string, uid: number, gid: number): void;
    export function fchown(fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchownSync(fd: number, uid: number, gid: number): void;
    export function lchown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchownSync(path: string, uid: number, gid: number): void;
    export function chmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmodSync(path: string, mode: number): void;
    export function chmodSync(path: string, mode: string): void;
    export function fchmod(fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmod(fd: number, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmodSync(fd: number, mode: number): void;
    export function fchmodSync(fd: number, mode: string): void;
    export function lchmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmodSync(path: string, mode: number): void;
    export function lchmodSync(path: string, mode: string): void;
    export function stat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function lstat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function statSync(path: string): Stats;
    export function lstatSync(path: string): Stats;
    export function fstatSync(fd: number): Stats;
    export function link(srcpath: string, dstpath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function linkSync(srcpath: string, dstpath: string): void;
    export function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
    export function readlink(path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any): void;
    export function readlinkSync(path: string): string;
    export function realpath(path: string, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
    export function realpath(path: string, cache: {[path: string]: string}, callback: (err: NodeJS.ErrnoException, resolvedPath: string) =>any): void;
    export function realpathSync(path: string, cache?: { [path: string]: string }): string;
    /*
     * Asynchronous unlink - deletes the file specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function unlink(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous unlink - deletes the file specified in {path}
     *
     * @param path
     */
    export function unlinkSync(path: string): void;
    /*
     * Asynchronous rmdir - removes the directory specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rmdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous rmdir - removes the directory specified in {path}
     *
     * @param path
     */
    export function rmdirSync(path: string): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string, mode?: number): void;
    /*
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string, mode?: string): void;
    export function readdir(path: string, callback?: (err: NodeJS.ErrnoException, files: string[]) => void): void;
    export function readdirSync(path: string): string[];
    export function close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function closeSync(fd: number): void;
    export function open(path: string, flags: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: number, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function openSync(path: string, flags: string, mode?: number): number;
    export function openSync(path: string, flags: string, mode?: string): number;
    export function utimes(path: string, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimes(path: string, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimesSync(path: string, atime: number, mtime: number): void;
    export function utimesSync(path: string, atime: Date, mtime: Date): void;
    export function futimes(fd: number, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimesSync(fd: number, atime: number, mtime: number): void;
    export function futimesSync(fd: number, atime: Date, mtime: Date): void;
    export function fsync(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fsyncSync(fd: number): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, data: any, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, encoding: string, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function writeSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
    export function readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param encoding
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param encoding
     */
    export function readFileSync(filename: string, encoding: string): string;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options?: { flag?: string; }): Buffer;
    export function writeFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Stats, prev: Stats) => void): void;
    export function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
    export function watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;
    export function watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
    export function exists(path: string, callback?: (exists: boolean) => void): void;
    export function existsSync(path: string): boolean;
    /** Constant for fs.access(). File is visible to the calling process. */
    export var F_OK: number;
    /** Constant for fs.access(). File can be read by the calling process. */
    export var R_OK: number;
    /** Constant for fs.access(). File can be written by the calling process. */
    export var W_OK: number;
    /** Constant for fs.access(). File can be executed by the calling process. */
    export var X_OK: number;
    /** Tests a user's permissions for the file specified by path. */
    export function access(path: string, callback: (err: NodeJS.ErrnoException) => void): void;
    export function access(path: string, mode: number, callback: (err: NodeJS.ErrnoException) => void): void;
    /** Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise. */
    export function accessSync(path: string, mode ?: number): void;
    export function createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
    }): ReadStream;
    export function createWriteStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
    }): WriteStream;
}

declare module "path" {

    /**
     * A parsed path object generated by path.parse() or consumed by path.format().
     */
    export interface ParsedPath {
        /**
         * The root of the path such as '/' or 'c:\'
         */
        root: string;
        /**
         * The full directory path such as '/home/user/dir' or 'c:\path\dir'
         */
        dir: string;
        /**
         * The file name including extension (if any) such as 'index.html'
         */
        base: string;
        /**
         * The file extension (if any) such as '.html'
         */
        ext: string;
        /**
         * The file name without extension (if any) such as 'index'
         */
        name: string;
    }

    /**
     * Normalize a string path, reducing '..' and '.' parts.
     * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
     *
     * @param p string path to normalize.
     */
    export function normalize(p: string): string;
    /**
     * Join all arguments together and normalize the resulting path.
     * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
     *
     * @param paths string paths to join.
     */
    export function join(...paths: any[]): string;
    /**
     * Join all arguments together and normalize the resulting path.
     * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
     *
     * @param paths string paths to join.
     */
    export function join(...paths: string[]): string;
    /**
     * The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.
     *
     * Starting from leftmost {from} paramter, resolves {to} to an absolute path.
     *
     * If {to} isn't already absolute, {from} arguments are prepended in right to left order, until an absolute path is found. If after using all {from} paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.
     *
     * @param pathSegments string paths to join.  Non-string arguments are ignored.
     */
    export function resolve(...pathSegments: any[]): string;
    /**
     * Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
     *
     * @param path path to test.
     */
    export function isAbsolute(path: string): boolean;
    /**
     * Solve the relative path from {from} to {to}.
     * At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.
     *
     * @param from
     * @param to
     */
    export function relative(from: string, to: string): string;
    /**
     * Return the directory name of a path. Similar to the Unix dirname command.
     *
     * @param p the path to evaluate.
     */
    export function dirname(p: string): string;
    /**
     * Return the last portion of a path. Similar to the Unix basename command.
     * Often used to extract the file name from a fully qualified path.
     *
     * @param p the path to evaluate.
     * @param ext optionally, an extension to remove from the result.
     */
    export function basename(p: string, ext?: string): string;
    /**
     * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
     * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
     *
     * @param p the path to evaluate.
     */
    export function extname(p: string): string;
    /**
     * The platform-specific file separator. '\\' or '/'.
     */
    export var sep: string;
    /**
     * The platform-specific file delimiter. ';' or ':'.
     */
    export var delimiter: string;
    /**
     * Returns an object from a path string - the opposite of format().
     *
     * @param pathString path to evaluate.
     */
    export function parse(pathString: string): ParsedPath;
    /**
     * Returns a path string from an object - the opposite of parse().
     *
     * @param pathString path to evaluate.
     */
    export function format(pathObject: ParsedPath): string;

    export module posix {
      export function normalize(p: string): string;
      export function join(...paths: any[]): string;
      export function resolve(...pathSegments: any[]): string;
      export function isAbsolute(p: string): boolean;
      export function relative(from: string, to: string): string;
      export function dirname(p: string): string;
      export function basename(p: string, ext?: string): string;
      export function extname(p: string): string;
      export var sep: string;
      export var delimiter: string;
      export function parse(p: string): ParsedPath;
      export function format(pP: ParsedPath): string;
    }

    export module win32 {
      export function normalize(p: string): string;
      export function join(...paths: any[]): string;
      export function resolve(...pathSegments: any[]): string;
      export function isAbsolute(p: string): boolean;
      export function relative(from: string, to: string): string;
      export function dirname(p: string): string;
      export function basename(p: string, ext?: string): string;
      export function extname(p: string): string;
      export var sep: string;
      export var delimiter: string;
      export function parse(p: string): ParsedPath;
      export function format(pP: ParsedPath): string;
    }
}

declare module "string_decoder" {
    export interface NodeStringDecoder {
        write(buffer: Buffer): string;
        detectIncompleteChar(buffer: Buffer): number;
    }
    export var StringDecoder: {
        new (encoding: string): NodeStringDecoder;
    };
}

declare module "tls" {
    import * as crypto from "crypto";
    import * as net from "net";
    import * as stream from "stream";

    var CLIENT_RENEG_LIMIT: number;
    var CLIENT_RENEG_WINDOW: number;

    export interface TlsOptions {
        pfx?: any;   //string or buffer
        key?: any;   //string or buffer
        passphrase?: string;
        cert?: any;
        ca?: any;    //string or buffer
        crl?: any;   //string or string array
        ciphers?: string;
        honorCipherOrder?: any;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //array or Buffer;
        SNICallback?: (servername: string) => any;
    }

    export interface ConnectionOptions {
        host?: string;
        port?: number;
        socket?: net.Socket;
        pfx?: any;   //string | Buffer
        key?: any;   //string | Buffer
        passphrase?: string;
        cert?: any;  //string | Buffer
        ca?: any;    //Array of string | Buffer
        rejectUnauthorized?: boolean;
        NPNProtocols?: any;  //Array of string | Buffer
        servername?: string;
    }

    export interface Server extends net.Server {
        // Extended base methods
        listen(port: number, host?: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;

        listen(port: number, host?: string, callback?: Function): Server;
        close(): Server;
        address(): { port: number; family: string; address: string; };
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;
        maxConnections: number;
        connections: number;
    }

    export interface ClearTextStream extends stream.Duplex {
        authorized: boolean;
        authorizationError: Error;
        getPeerCertificate(): any;
        getCipher: {
            name: string;
            version: string;
        };
        address: {
            port: number;
            family: string;
            address: string;
        };
        remoteAddress: string;
        remotePort: number;
    }

    export interface SecurePair {
        encrypted: any;
        cleartext: any;
    }

    export interface SecureContextOptions {
        pfx?: any;   //string | buffer
        key?: any;   //string | buffer
        passphrase?: string;
        cert?: any;  // string | buffer
        ca?: any;    // string | buffer
        crl?: any;   // string | string[]
        ciphers?: string;
        honorCipherOrder?: boolean;
    }

    export interface SecureContext {
        context: any;
    }

    export function createServer(options: TlsOptions, secureConnectionListener?: (cleartextStream: ClearTextStream) =>void ): Server;
    export function connect(options: TlsOptions, secureConnectionListener?: () =>void ): ClearTextStream;
    export function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
    export function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () =>void ): ClearTextStream;
    export function createSecurePair(credentials?: crypto.Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
    export function createSecureContext(details: SecureContextOptions): SecureContext;
}

declare module "crypto" {
    export interface CredentialDetails {
        pfx: string;
        key: string;
        passphrase: string;
        cert: string;
        ca: any;    //string | string array
        crl: any;   //string | string array
        ciphers: string;
    }
    export interface Credentials { context?: any; }
    export function createCredentials(details: CredentialDetails): Credentials;
    export function createHash(algorithm: string): Hash;
    export function createHmac(algorithm: string, key: string): Hmac;
    export function createHmac(algorithm: string, key: Buffer): Hmac;
    interface Hash {
        update(data: any, input_encoding?: string): Hash;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    interface Hmac {
        update(data: any, input_encoding?: string): Hmac;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    export function createCipher(algorithm: string, password: any): Cipher;
    export function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
    interface Cipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    export function createDecipher(algorithm: string, password: any): Decipher;
    export function createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
    interface Decipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    export function createSign(algorithm: string): Signer;
    interface Signer extends NodeJS.WritableStream {
        update(data: any): void;
        sign(private_key: string, output_format: string): string;
    }
    export function createVerify(algorith: string): Verify;
    interface Verify extends NodeJS.WritableStream {
        update(data: any): void;
        verify(object: string, signature: string, signature_format?: string): boolean;
    }
    export function createDiffieHellman(prime_length: number): DiffieHellman;
    export function createDiffieHellman(prime: number, encoding?: string): DiffieHellman;
    interface DiffieHellman {
        generateKeys(encoding?: string): string;
        computeSecret(other_public_key: string, input_encoding?: string, output_encoding?: string): string;
        getPrime(encoding?: string): string;
        getGenerator(encoding: string): string;
        getPublicKey(encoding?: string): string;
        getPrivateKey(encoding?: string): string;
        setPublicKey(public_key: string, encoding?: string): void;
        setPrivateKey(public_key: string, encoding?: string): void;
    }
    export function getDiffieHellman(group_name: string): DiffieHellman;
    export function pbkdf2(password: string, salt: string, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2(password: string, salt: string, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2Sync(password: string, salt: string, iterations: number, keylen: number) : Buffer;
    export function pbkdf2Sync(password: string, salt: string, iterations: number, keylen: number, digest: string) : Buffer;
    export function randomBytes(size: number): Buffer;
    export function randomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
    export function pseudoRandomBytes(size: number): Buffer;
    export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
}

declare module "stream" {
    import * as events from "events";

    export interface Stream extends events.EventEmitter {
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    }

    export interface ReadableOptions {
        highWaterMark?: number;
        encoding?: string;
        objectMode?: boolean;
    }

    export class Readable extends events.EventEmitter implements NodeJS.ReadableStream {
        readable: boolean;
        constructor(opts?: ReadableOptions);
        _read(size: number): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
        unshift(chunk: any): void;
        wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
    }

    export interface WritableOptions {
        highWaterMark?: number;
        decodeStrings?: boolean;
        objectMode?: boolean;
    }

    export class Writable extends events.EventEmitter implements NodeJS.WritableStream {
        writable: boolean;
        constructor(opts?: WritableOptions);
        _write(chunk: any, encoding: string, callback: Function): void;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export interface DuplexOptions extends ReadableOptions, WritableOptions {
        allowHalfOpen?: boolean;
    }

    // Note: Duplex extends both Readable and Writable.
    export class Duplex extends Readable implements NodeJS.ReadWriteStream {
        writable: boolean;
        constructor(opts?: DuplexOptions);
        _write(chunk: any, encoding: string, callback: Function): void;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export interface TransformOptions extends ReadableOptions, WritableOptions {}

    // Note: Transform lacks the _read and _write methods of Readable/Writable.
    export class Transform extends events.EventEmitter implements NodeJS.ReadWriteStream {
        readable: boolean;
        writable: boolean;
        constructor(opts?: TransformOptions);
        _transform(chunk: any, encoding: string, callback: Function): void;
        _flush(callback: Function): void;
        read(size?: number): any;
        setEncoding(encoding: string): void;
        pause(): void;
        resume(): void;
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
        unshift(chunk: any): void;
        wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
        push(chunk: any, encoding?: string): boolean;
        write(chunk: any, cb?: Function): boolean;
        write(chunk: any, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(chunk: any, cb?: Function): void;
        end(chunk: any, encoding?: string, cb?: Function): void;
    }

    export class PassThrough extends Transform {}
}

declare module "util" {
    export interface InspectOptions {
        showHidden?: boolean;
        depth?: number;
        colors?: boolean;
        customInspect?: boolean;
    }

    export function format(format: any, ...param: any[]): string;
    export function debug(string: string): void;
    export function error(...param: any[]): void;
    export function puts(...param: any[]): void;
    export function print(...param: any[]): void;
    export function log(string: string): void;
    export function inspect(object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
    export function inspect(object: any, options: InspectOptions): string;
    export function isArray(object: any): boolean;
    export function isRegExp(object: any): boolean;
    export function isDate(object: any): boolean;
    export function isError(object: any): boolean;
    export function inherits(constructor: any, superConstructor: any): void;
    export function debuglog(key:string): (msg:string,...param: any[])=>void;
}

declare module "assert" {
    function internal (value: any, message?: string): void;
    module internal {
        export class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;

            constructor(options?: {message?: string; actual?: any; expected?: any;
                                  operator?: string; stackStartFunction?: Function});
        }

        export function fail(actual?: any, expected?: any, message?: string, operator?: string): void;
        export function ok(value: any, message?: string): void;
        export function equal(actual: any, expected: any, message?: string): void;
        export function notEqual(actual: any, expected: any, message?: string): void;
        export function deepEqual(actual: any, expected: any, message?: string): void;
        export function notDeepEqual(acutal: any, expected: any, message?: string): void;
        export function strictEqual(actual: any, expected: any, message?: string): void;
        export function notStrictEqual(actual: any, expected: any, message?: string): void;
        export var throws: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        export var doesNotThrow: {
            (block: Function, message?: string): void;
            (block: Function, error: Function, message?: string): void;
            (block: Function, error: RegExp, message?: string): void;
            (block: Function, error: (err: any) => boolean, message?: string): void;
        };

        export function ifError(value: any): void;
    }

    export = internal;
}

declare module "tty" {
    import * as net from "net";

    export function isatty(fd: number): boolean;
    export interface ReadStream extends net.Socket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
    }
    export interface WriteStream extends net.Socket {
        columns: number;
        rows: number;
    }
}

declare module "domain" {
    import * as events from "events";

    export class Domain extends events.EventEmitter {
        run(fn: Function): void;
        add(emitter: events.EventEmitter): void;
        remove(emitter: events.EventEmitter): void;
        bind(cb: (err: Error, data: any) => any): any;
        intercept(cb: (data: any) => any): any;
        dispose(): void;

        addListener(event: string, listener: Function): Domain;
        on(event: string, listener: Function): Domain;
        once(event: string, listener: Function): Domain;
        removeListener(event: string, listener: Function): Domain;
        removeAllListeners(event?: string): Domain;
    }

    export function create(): Domain;
}

declare module "constants" {
    export var E2BIG: number;
    export var EACCES: number;
    export var EADDRINUSE: number;
    export var EADDRNOTAVAIL: number;
    export var EAFNOSUPPORT: number;
    export var EAGAIN: number;
    export var EALREADY: number;
    export var EBADF: number;
    export var EBADMSG: number;
    export var EBUSY: number;
    export var ECANCELED: number;
    export var ECHILD: number;
    export var ECONNABORTED: number;
    export var ECONNREFUSED: number;
    export var ECONNRESET: number;
    export var EDEADLK: number;
    export var EDESTADDRREQ: number;
    export var EDOM: number;
    export var EEXIST: number;
    export var EFAULT: number;
    export var EFBIG: number;
    export var EHOSTUNREACH: number;
    export var EIDRM: number;
    export var EILSEQ: number;
    export var EINPROGRESS: number;
    export var EINTR: number;
    export var EINVAL: number;
    export var EIO: number;
    export var EISCONN: number;
    export var EISDIR: number;
    export var ELOOP: number;
    export var EMFILE: number;
    export var EMLINK: number;
    export var EMSGSIZE: number;
    export var ENAMETOOLONG: number;
    export var ENETDOWN: number;
    export var ENETRESET: number;
    export var ENETUNREACH: number;
    export var ENFILE: number;
    export var ENOBUFS: number;
    export var ENODATA: number;
    export var ENODEV: number;
    export var ENOENT: number;
    export var ENOEXEC: number;
    export var ENOLCK: number;
    export var ENOLINK: number;
    export var ENOMEM: number;
    export var ENOMSG: number;
    export var ENOPROTOOPT: number;
    export var ENOSPC: number;
    export var ENOSR: number;
    export var ENOSTR: number;
    export var ENOSYS: number;
    export var ENOTCONN: number;
    export var ENOTDIR: number;
    export var ENOTEMPTY: number;
    export var ENOTSOCK: number;
    export var ENOTSUP: number;
    export var ENOTTY: number;
    export var ENXIO: number;
    export var EOPNOTSUPP: number;
    export var EOVERFLOW: number;
    export var EPERM: number;
    export var EPIPE: number;
    export var EPROTO: number;
    export var EPROTONOSUPPORT: number;
    export var EPROTOTYPE: number;
    export var ERANGE: number;
    export var EROFS: number;
    export var ESPIPE: number;
    export var ESRCH: number;
    export var ETIME: number;
    export var ETIMEDOUT: number;
    export var ETXTBSY: number;
    export var EWOULDBLOCK: number;
    export var EXDEV: number;
    export var WSAEINTR: number;
    export var WSAEBADF: number;
    export var WSAEACCES: number;
    export var WSAEFAULT: number;
    export var WSAEINVAL: number;
    export var WSAEMFILE: number;
    export var WSAEWOULDBLOCK: number;
    export var WSAEINPROGRESS: number;
    export var WSAEALREADY: number;
    export var WSAENOTSOCK: number;
    export var WSAEDESTADDRREQ: number;
    export var WSAEMSGSIZE: number;
    export var WSAEPROTOTYPE: number;
    export var WSAENOPROTOOPT: number;
    export var WSAEPROTONOSUPPORT: number;
    export var WSAESOCKTNOSUPPORT: number;
    export var WSAEOPNOTSUPP: number;
    export var WSAEPFNOSUPPORT: number;
    export var WSAEAFNOSUPPORT: number;
    export var WSAEADDRINUSE: number;
    export var WSAEADDRNOTAVAIL: number;
    export var WSAENETDOWN: number;
    export var WSAENETUNREACH: number;
    export var WSAENETRESET: number;
    export var WSAECONNABORTED: number;
    export var WSAECONNRESET: number;
    export var WSAENOBUFS: number;
    export var WSAEISCONN: number;
    export var WSAENOTCONN: number;
    export var WSAESHUTDOWN: number;
    export var WSAETOOMANYREFS: number;
    export var WSAETIMEDOUT: number;
    export var WSAECONNREFUSED: number;
    export var WSAELOOP: number;
    export var WSAENAMETOOLONG: number;
    export var WSAEHOSTDOWN: number;
    export var WSAEHOSTUNREACH: number;
    export var WSAENOTEMPTY: number;
    export var WSAEPROCLIM: number;
    export var WSAEUSERS: number;
    export var WSAEDQUOT: number;
    export var WSAESTALE: number;
    export var WSAEREMOTE: number;
    export var WSASYSNOTREADY: number;
    export var WSAVERNOTSUPPORTED: number;
    export var WSANOTINITIALISED: number;
    export var WSAEDISCON: number;
    export var WSAENOMORE: number;
    export var WSAECANCELLED: number;
    export var WSAEINVALIDPROCTABLE: number;
    export var WSAEINVALIDPROVIDER: number;
    export var WSAEPROVIDERFAILEDINIT: number;
    export var WSASYSCALLFAILURE: number;
    export var WSASERVICE_NOT_FOUND: number;
    export var WSATYPE_NOT_FOUND: number;
    export var WSA_E_NO_MORE: number;
    export var WSA_E_CANCELLED: number;
    export var WSAEREFUSED: number;
    export var SIGHUP: number;
    export var SIGINT: number;
    export var SIGILL: number;
    export var SIGABRT: number;
    export var SIGFPE: number;
    export var SIGKILL: number;
    export var SIGSEGV: number;
    export var SIGTERM: number;
    export var SIGBREAK: number;
    export var SIGWINCH: number;
    export var SSL_OP_ALL: number;
    export var SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
    export var SSL_OP_CIPHER_SERVER_PREFERENCE: number;
    export var SSL_OP_CISCO_ANYCONNECT: number;
    export var SSL_OP_COOKIE_EXCHANGE: number;
    export var SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
    export var SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
    export var SSL_OP_EPHEMERAL_RSA: number;
    export var SSL_OP_LEGACY_SERVER_CONNECT: number;
    export var SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
    export var SSL_OP_MICROSOFT_SESS_ID_BUG: number;
    export var SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
    export var SSL_OP_NETSCAPE_CA_DN_BUG: number;
    export var SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
    export var SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
    export var SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
    export var SSL_OP_NO_COMPRESSION: number;
    export var SSL_OP_NO_QUERY_MTU: number;
    export var SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
    export var SSL_OP_NO_SSLv2: number;
    export var SSL_OP_NO_SSLv3: number;
    export var SSL_OP_NO_TICKET: number;
    export var SSL_OP_NO_TLSv1: number;
    export var SSL_OP_NO_TLSv1_1: number;
    export var SSL_OP_NO_TLSv1_2: number;
    export var SSL_OP_PKCS1_CHECK_1: number;
    export var SSL_OP_PKCS1_CHECK_2: number;
    export var SSL_OP_SINGLE_DH_USE: number;
    export var SSL_OP_SINGLE_ECDH_USE: number;
    export var SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
    export var SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
    export var SSL_OP_TLS_BLOCK_PADDING_BUG: number;
    export var SSL_OP_TLS_D5_BUG: number;
    export var SSL_OP_TLS_ROLLBACK_BUG: number;
    export var ENGINE_METHOD_DSA: number;
    export var ENGINE_METHOD_DH: number;
    export var ENGINE_METHOD_RAND: number;
    export var ENGINE_METHOD_ECDH: number;
    export var ENGINE_METHOD_ECDSA: number;
    export var ENGINE_METHOD_CIPHERS: number;
    export var ENGINE_METHOD_DIGESTS: number;
    export var ENGINE_METHOD_STORE: number;
    export var ENGINE_METHOD_PKEY_METHS: number;
    export var ENGINE_METHOD_PKEY_ASN1_METHS: number;
    export var ENGINE_METHOD_ALL: number;
    export var ENGINE_METHOD_NONE: number;
    export var DH_CHECK_P_NOT_SAFE_PRIME: number;
    export var DH_CHECK_P_NOT_PRIME: number;
    export var DH_UNABLE_TO_CHECK_GENERATOR: number;
    export var DH_NOT_SUITABLE_GENERATOR: number;
    export var NPN_ENABLED: number;
    export var RSA_PKCS1_PADDING: number;
    export var RSA_SSLV23_PADDING: number;
    export var RSA_NO_PADDING: number;
    export var RSA_PKCS1_OAEP_PADDING: number;
    export var RSA_X931_PADDING: number;
    export var RSA_PKCS1_PSS_PADDING: number;
    export var POINT_CONVERSION_COMPRESSED: number;
    export var POINT_CONVERSION_UNCOMPRESSED: number;
    export var POINT_CONVERSION_HYBRID: number;
    export var O_RDONLY: number;
    export var O_WRONLY: number;
    export var O_RDWR: number;
    export var S_IFMT: number;
    export var S_IFREG: number;
    export var S_IFDIR: number;
    export var S_IFCHR: number;
    export var S_IFLNK: number;
    export var O_CREAT: number;
    export var O_EXCL: number;
    export var O_TRUNC: number;
    export var O_APPEND: number;
    export var F_OK: number;
    export var R_OK: number;
    export var W_OK: number;
    export var X_OK: number;
    export var UV_UDP_REUSEADDR: number;
}
declare module 'd2protocol' {
	/// <reference path="../typings/node/node.d.ts" />
	/// <reference path="../node_modules/ts-bytearray/ts-bytearray.d.ts" />
	import ByteArray = require('ts-bytearray'); module Protocol {
	    class Metadata {
	        static PROTOCOL_BUILD: number;
	        static PROTOCOL_REQUIRED_BUILD: number;
	        static PROTOCOL_DATE: string;
	        static PROTOCOL_VISIBILITY: string;
	    }
	    enum ProtocolConstantsEnum {
	        MAP_CELL_COUNT = 560,
	        MAX_LEVEL = 200,
	        MAX_GUILD_LEVEL = 200,
	        MAX_MOUNT_LEVEL = 100,
	        MAX_CHAT_LEN = 512,
	        USER_MAX_CHAT_LEN = 256,
	        MAX_STAT_LEN = 512,
	        MAX_STAT_BY_MSG = 20,
	        MIN_LOGIN_LEN = 3,
	        MAX_LOGIN_LEN = 50,
	        MIN_PLAYER_NAME_LEN = 2,
	        MAX_PLAYER_NAME_LEN = 20,
	        MIN_NICK_LEN = 2,
	        MAX_NICK_LEN = 30,
	        MIN_GUILDNAME_LEN = 3,
	        MAX_GUILDNAME_LEN = 30,
	        MIN_ALLIANCENAME_LEN = 3,
	        MAX_ALLIANCENAME_LEN = 30,
	        MIN_ALLIANCETAG_LEN = 3,
	        MAX_ALLIANCETAG_LEN = 5,
	        MIN_PARTY_NAME_LEN = 0,
	        MAX_PARTY_NAME_LEN = 25,
	        MAX_PLAYER_COLOR = 5,
	        MAX_ENTITY_COLOR = 10,
	        MAX_PLAYERS_PER_TEAM = 8,
	        MAX_MEMBERS_PER_PARTY = 8,
	        MAX_GUESTS_PER_PARTY = 7,
	        MAX_MEMBERS_PER_ARENA_PARTY = 5,
	        MAX_MONSTERS_IN_GROUP_ON_MAP = 16,
	        MAX_CHAT_OBJECT_REF = 16,
	        NOT_EQUIPED = 63,
	        MAX_EQUIPED = 255,
	        SLOTS_EQUIPABLE_BY_USER = 16,
	        MAX_CRAFT_SLOT = 9,
	        MAX_JOB_LEVEL = 200,
	        MAX_HONOR = 20000,
	        MAX_SHORTCUT = 99,
	        MAX_ARENA_RANK = 2300,
	        CHAR_MIN_LEVEL_ARENA = 50,
	        CHAR_MIN_LEVEL_RIDE = 60,
	        MAX_DUNGEON_REGISTER = 10,
	        MIN_RIDE_NAME_LEN = 0,
	        MAX_RIDE_NAME_LEN = 16,
	        MAX_EFFECTS_COUNT = 100,
	        MAX_LOCKABLE_CODE_LEN = 8,
	        MAX_PRESET_ITEM_COUNT = 24,
	        MIN_OBJ_COUNT_BY_XFERT = 1,
	        MAX_OBJ_COUNT_BY_XFERT = 800,
	        MAX_OBJ_COUNT_BY_DECRAFT = 50,
	        MAX_WAVE = 100,
	        MAX_OBJECT_EFFECT_STRING_LEN = 30,
	        MAX_PLAYER_OR_ACCOUNT_NAME_LEN = 31,
	        MAX_MEMBERS_PER_GUILD = 240,
	        MAX_ADDITIONNAL_PER_CARAC = 100,
	        MAX_RECONNECTION_ATTEMPTS = 5,
	    }
	    enum AccessoryPreviewErrorEnum {
	        PREVIEW_ERROR = 0,
	        PREVIEW_COOLDOWN = 1,
	        PREVIEW_BAD_ITEM = 2,
	    }
	    enum AggressableStatusEnum {
	        NON_AGGRESSABLE = 0,
	        PvP_ENABLED_AGGRESSABLE = 10,
	        PvP_ENABLED_NON_AGGRESSABLE = 11,
	        AvA_ENABLED_AGGRESSABLE = 20,
	        AvA_ENABLED_NON_AGGRESSABLE = 21,
	        AvA_DISQUALIFIED = 22,
	        AvA_PREQUALIFIED_AGGRESSABLE = 23,
	    }
	    enum AlignmentSideEnum {
	        ALIGNMENT_UNKNOWN = -2,
	        ALIGNMENT_WITHOUT = -1,
	        ALIGNMENT_NEUTRAL = 0,
	        ALIGNMENT_ANGEL = 1,
	        ALIGNMENT_EVIL = 2,
	        ALIGNMENT_MERCENARY = 3,
	    }
	    enum AllianceRightsBitEnum {
	        ALLIANCE_RIGHT_NONE = 0,
	        ALLIANCE_RIGHT_BOSS = 1,
	        ALLIANCE_RIGHT_MANAGE_PRISMS = 2,
	        ALLIANCE_RIGHT_TALK_IN_CHAN = 4,
	        ALLIANCE_RIGHT_RECRUIT_GUILDS = 8,
	        ALLIANCE_RIGHT_KICK_GUILDS = 16,
	        ALLIANCE_RIGHT_MANAGE_RIGHTS = 32,
	    }
	    enum BreedEnum {
	        UNDEFINED = 0,
	        Feca = 1,
	        Osamodas = 2,
	        Enutrof = 3,
	        Sram = 4,
	        Xelor = 5,
	        Ecaflip = 6,
	        Eniripsa = 7,
	        Iop = 8,
	        Cra = 9,
	        Sadida = 10,
	        Sacrieur = 11,
	        Pandawa = 12,
	        Roublard = 13,
	        Zobal = 14,
	        Steamer = 15,
	        Eliotrope = 16,
	        SUMMONED = -1,
	        MONSTER = -2,
	        MONSTER_GROUP = -3,
	        NPC = -4,
	        HUMAN_VENDOR = -5,
	        TAX_COLLECTOR = -6,
	        MUTANT = -7,
	        MUTANT_IN_DUNGEON = -8,
	        MOUNT_OUTSIDE = -9,
	        PRISM = -10,
	        INCARNATION = -11,
	    }
	    enum BuildTypeEnum {
	        RELEASE = 0,
	        BETA = 1,
	        ALPHA = 2,
	        TESTING = 3,
	        INTERNAL = 4,
	        DEBUG = 5,
	        EXPERIMENTAL = 6,
	    }
	    enum CharacterCreationResultEnum {
	        OK = 0,
	        ERR_NO_REASON = 1,
	        ERR_INVALID_NAME = 2,
	        ERR_NAME_ALREADY_EXISTS = 3,
	        ERR_TOO_MANY_CHARACTERS = 4,
	        ERR_NOT_ALLOWED = 5,
	        ERR_NEW_PLAYER_NOT_ALLOWED = 6,
	        ERR_RESTRICED_ZONE = 7,
	    }
	    enum CharacterDeletionErrorEnum {
	        DEL_ERR_NO_REASON = 1,
	        DEL_ERR_TOO_MANY_CHAR_DELETION = 2,
	        DEL_ERR_BAD_SECRET_ANSWER = 3,
	        DEL_ERR_RESTRICED_ZONE = 4,
	    }
	    enum CharacterInventoryPositionEnum {
	        ACCESSORY_POSITION_HAT = 6,
	        ACCESSORY_POSITION_CAPE = 7,
	        ACCESSORY_POSITION_BELT = 3,
	        ACCESSORY_POSITION_BOOTS = 5,
	        ACCESSORY_POSITION_AMULET = 0,
	        ACCESSORY_POSITION_SHIELD = 15,
	        ACCESSORY_POSITION_WEAPON = 1,
	        ACCESSORY_POSITION_PETS = 8,
	        INVENTORY_POSITION_RING_LEFT = 2,
	        INVENTORY_POSITION_RING_RIGHT = 4,
	        INVENTORY_POSITION_DOFUS_1 = 9,
	        INVENTORY_POSITION_DOFUS_2 = 10,
	        INVENTORY_POSITION_DOFUS_3 = 11,
	        INVENTORY_POSITION_DOFUS_4 = 12,
	        INVENTORY_POSITION_DOFUS_5 = 13,
	        INVENTORY_POSITION_DOFUS_6 = 14,
	        INVENTORY_POSITION_MOUNT = 16,
	        INVENTORY_POSITION_MUTATION = 20,
	        INVENTORY_POSITION_BOOST_FOOD = 21,
	        INVENTORY_POSITION_FIRST_BONUS = 22,
	        INVENTORY_POSITION_SECOND_BONUS = 23,
	        INVENTORY_POSITION_FIRST_MALUS = 24,
	        INVENTORY_POSITION_SECOND_MALUS = 25,
	        INVENTORY_POSITION_ROLEPLAY_BUFFER = 26,
	        INVENTORY_POSITION_FOLLOWER = 27,
	        INVENTORY_POSITION_COMPANION = 28,
	        INVENTORY_POSITION_NOT_EQUIPED = 63,
	    }
	    enum CharacterRemodelingEnum {
	        CHARACTER_REMODELING_NOT_APPLICABLE = 0,
	        CHARACTER_REMODELING_NAME = 1,
	        CHARACTER_REMODELING_COLORS = 2,
	        CHARACTER_REMODELING_COSMETIC = 4,
	        CHARACTER_REMODELING_BREED = 8,
	        CHARACTER_REMODELING_GENDER = 16,
	    }
	    enum CharacterSpellModificationTypeEnum {
	        INVALID_MODIFICATION = 0,
	        RANGEABLE = 1,
	        DAMAGE = 2,
	        BASE_DAMAGE = 3,
	        HEAL_BONUS = 4,
	        AP_COST = 5,
	        CAST_INTERVAL = 6,
	        CAST_INTERVAL_SET = 7,
	        CRITICAL_HIT_BONUS = 8,
	        CAST_LINE = 9,
	        LOS = 10,
	        MAX_CAST_PER_TURN = 11,
	        MAX_CAST_PER_TARGET = 12,
	        RANGE = 13,
	    }
	    enum ChatActivableChannelsEnum {
	        CHANNEL_GLOBAL = 0,
	        CHANNEL_TEAM = 1,
	        CHANNEL_GUILD = 2,
	        CHANNEL_ALLIANCE = 3,
	        CHANNEL_PARTY = 4,
	        CHANNEL_SALES = 5,
	        CHANNEL_SEEK = 6,
	        CHANNEL_NOOB = 7,
	        CHANNEL_ADMIN = 8,
	        CHANNEL_ADS = 12,
	        CHANNEL_ARENA = 13,
	        PSEUDO_CHANNEL_PRIVATE = 9,
	        PSEUDO_CHANNEL_INFO = 10,
	        PSEUDO_CHANNEL_FIGHT_LOG = 11,
	    }
	    enum ChatChannelsMultiEnum {
	        CHANNEL_GLOBAL = 0,
	        CHANNEL_TEAM = 1,
	        CHANNEL_GUILD = 2,
	        CHANNEL_ALLIANCE = 3,
	        CHANNEL_PARTY = 4,
	        CHANNEL_SALES = 5,
	        CHANNEL_SEEK = 6,
	        CHANNEL_NOOB = 7,
	        CHANNEL_ADMIN = 8,
	        CHANNEL_ADS = 12,
	        CHANNEL_ARENA = 13,
	    }
	    enum ChatErrorEnum {
	        CHAT_ERROR_UNKNOWN = 0,
	        CHAT_ERROR_RECEIVER_NOT_FOUND = 1,
	        CHAT_ERROR_INTERIOR_MONOLOGUE = 2,
	        CHAT_ERROR_NO_GUILD = 3,
	        CHAT_ERROR_NO_PARTY = 4,
	        CHAT_ERROR_ALLIANCE = 5,
	        CHAT_ERROR_INVALID_MAP = 6,
	        CHAT_ERROR_NO_PARTY_ARENA = 7,
	        CHAT_ERROR_NO_TEAM = 8,
	    }
	    enum ClientInstallTypeEnum {
	        CLIENT_INSTALL_UNKNOWN = 0,
	        CLIENT_BUNDLE = 1,
	        CLIENT_STREAMING = 2,
	    }
	    enum ClientTechnologyEnum {
	        CLIENT_TECHNOLOGY_UNKNOWN = 0,
	        CLIENT_AIR = 1,
	        CLIENT_FLASH = 2,
	    }
	    enum CompassTypeEnum {
	        COMPASS_TYPE_SIMPLE = 0,
	        COMPASS_TYPE_SPOUSE = 1,
	        COMPASS_TYPE_PARTY = 2,
	        COMPASS_TYPE_PVP_SEEK = 3,
	        COMPASS_TYPE_QUEST = 4,
	    }
	    enum ConsoleMessageTypeEnum {
	        CONSOLE_TEXT_MESSAGE = 0,
	        CONSOLE_INFO_MESSAGE = 1,
	        CONSOLE_ERR_MESSAGE = 2,
	    }
	    enum CraftResultEnum {
	        CRAFT_IMPOSSIBLE = 0,
	        CRAFT_FAILED = 1,
	        CRAFT_SUCCESS = 2,
	        CRAFT_NEUTRAL = 3,
	    }
	    enum DebugLevelEnum {
	        LEVEL_TRACE = 0,
	        LEVEL_DEBUG = 1,
	        LEVEL_INFO = 2,
	        LEVEL_WARN = 3,
	        LEVEL_ERROR = 4,
	        LEVEL_FATAL = 5,
	    }
	    enum DelayedActionTypeEnum {
	        DELAYED_ACTION_DISCONNECT = 0,
	        DELAYED_ACTION_OBJECT_USE = 1,
	        DELAYED_ACTION_JOIN_CHARACTER = 2,
	        DELAYED_ACTION_AGGRESSION_IMMUNE = 3,
	    }
	    enum DialogTypeEnum {
	        DIALOG_BOOK = 0,
	        DIALOG_DIALOG = 1,
	        DIALOG_LOCKABLE = 2,
	        DIALOG_PURCHASABLE = 3,
	        DIALOG_GUILD_INVITATION = 4,
	        DIALOG_GUILD_CREATE = 5,
	        DIALOG_GUILD_RENAME = 6,
	        DIALOG_MARRIAGE = 7,
	        DIALOG_DUNGEON_MEETING = 8,
	        DIALOG_SPELL_FORGET = 9,
	        DIALOG_TELEPORTER = 10,
	        DIALOG_EXCHANGE = 11,
	        DIALOG_ALLIANCE_INVITATION = 12,
	        DIALOG_ALLIANCE_CREATE = 13,
	        DIALOG_ALLIANCE_RENAME = 14,
	    }
	    enum DirectionsEnum {
	        DIRECTION_EAST = 0,
	        DIRECTION_SOUTH_EAST = 1,
	        DIRECTION_SOUTH = 2,
	        DIRECTION_SOUTH_WEST = 3,
	        DIRECTION_WEST = 4,
	        DIRECTION_NORTH_WEST = 5,
	        DIRECTION_NORTH = 6,
	        DIRECTION_NORTH_EAST = 7,
	    }
	    enum ExchangeErrorEnum {
	        REQUEST_IMPOSSIBLE = 1,
	        REQUEST_CHARACTER_OCCUPIED = 2,
	        REQUEST_CHARACTER_JOB_NOT_EQUIPED = 3,
	        REQUEST_CHARACTER_TOOL_TOO_FAR = 4,
	        REQUEST_CHARACTER_OVERLOADED = 5,
	        REQUEST_CHARACTER_NOT_SUSCRIBER = 6,
	        REQUEST_CHARACTER_RESTRICTED = 7,
	        REQUEST_CHARACTER_GUEST = 8,
	        SELL_ERROR = 63,
	        BUY_ERROR = 64,
	        MOUNT_PADDOCK_ERROR = 10,
	        BID_SEARCH_ERROR = 11,
	    }
	    enum ExchangeReplayStopReasonEnum {
	        STOPPED_REASON_OK = 1,
	        STOPPED_REASON_USER = 2,
	        STOPPED_REASON_MISSING_RESSOURCE = 3,
	        STOPPED_REASON_IMPOSSIBLE_MODIFICATION = 4,
	    }
	    enum ExchangeTypeEnum {
	        NPC_SHOP = 0,
	        PLAYER_TRADE = 1,
	        NPC_TRADE = 2,
	        CRAFT = 3,
	        DISCONNECTED_VENDOR = 4,
	        STORAGE = 5,
	        SHOP_STOCK = 6,
	        TAXCOLLECTOR = 8,
	        NPC_MODIFY_TRADE = 9,
	        BIDHOUSE_SELL = 10,
	        BIDHOUSE_BUY = 11,
	        MULTICRAFT_CRAFTER = 12,
	        MULTICRAFT_CUSTOMER = 13,
	        JOB_INDEX = 14,
	        MOUNT = 15,
	        MOUNT_STABLE = 16,
	        NPC_RESURECT_PET = 17,
	        NPC_TRADE_MOUNT = 18,
	        REALESTATE_HOUSE = 19,
	        REALESTATE_FARM = 20,
	        RUNES_TRADE = 21,
	        RECYCLE_TRADE = 22,
	    }
	    enum FightDispellableEnum {
	        DISPELLABLE = 1,
	        DISPELLABLE_BY_DEATH = 2,
	        DISPELLABLE_BY_STRONG_DISPEL = 3,
	        REALLY_NOT_DISPELLABLE = 4,
	    }
	    enum FightOptionsEnum {
	        FIGHT_OPTION_SET_SECRET = 0,
	        FIGHT_OPTION_SET_TO_PARTY_ONLY = 1,
	        FIGHT_OPTION_SET_CLOSED = 2,
	        FIGHT_OPTION_ASK_FOR_HELP = 3,
	    }
	    enum FightOutcomeEnum {
	        RESULT_LOST = 0,
	        RESULT_DRAW = 1,
	        RESULT_VICTORY = 2,
	        RESULT_TAX = 5,
	        RESULT_DEFENDER_GROUP = 6,
	    }
	    enum FightSpellCastCriticalEnum {
	        NORMAL = 1,
	        CRITICAL_HIT = 2,
	        CRITICAL_FAIL = 3,
	    }
	    enum FightTypeEnum {
	        FIGHT_TYPE_CHALLENGE = 0,
	        FIGHT_TYPE_AGRESSION = 1,
	        FIGHT_TYPE_PvMA = 2,
	        FIGHT_TYPE_MXvM = 3,
	        FIGHT_TYPE_PvM = 4,
	        FIGHT_TYPE_PvT = 5,
	        FIGHT_TYPE_PvMU = 6,
	        FIGHT_TYPE_PVP_ARENA = 7,
	        FIGHT_TYPE_Koh = 8,
	        FIGHT_TYPE_PvPr = 9,
	    }
	    enum FighterRefusedReasonEnum {
	        FIGHTER_REFUSED = -1,
	        FIGHTER_ACCEPTED = 0,
	        CHALLENGE_FULL = 1,
	        TEAM_FULL = 2,
	        WRONG_ALIGNMENT = 3,
	        WRONG_GUILD = 4,
	        TOO_LATE = 5,
	        MUTANT_REFUSED = 6,
	        WRONG_MAP = 7,
	        JUST_RESPAWNED = 8,
	        IM_OCCUPIED = 9,
	        OPPONENT_OCCUPIED = 10,
	        FIGHT_MYSELF = 11,
	        INSUFFICIENT_RIGHTS = 12,
	        MEMBER_ACCOUNT_NEEDED = 13,
	        OPPONENT_NOT_MEMBER = 14,
	        TEAM_LIMITED_BY_MAINCHARACTER = 15,
	        MULTIACCOUNT_NOT_ALLOWED = 16,
	        GHOST_REFUSED = 17,
	        RESTRICTED_ACCOUNT = 19,
	        WRONG_ALLIANCE = 20,
	        AVA_ZONE = 21,
	        COMPANION_REFUSED = 22,
	        NOT_ENOUGH_ROOM = 23,
	        GUEST_ACCOUNT = 24,
	    }
	    enum GameActionFightInvisibilityStateEnum {
	        INVISIBLE = 1,
	        DETECTED = 2,
	        VISIBLE = 3,
	    }
	    enum GameActionMarkCellsTypeEnum {
	        CELLS_CIRCLE = 0,
	        CELLS_CROSS = 1,
	        CELLS_SQUARE = 2,
	    }
	    enum GameActionMarkTypeEnum {
	        GLYPH = 1,
	        TRAP = 2,
	        WALL = 3,
	        PORTAL = 4,
	    }
	    enum GameContextEnum {
	        ROLE_PLAY = 1,
	        FIGHT = 2,
	    }
	    enum GameHierarchyEnum {
	        UNAVAILABLE = -1,
	        PLAYER = 0,
	        MODERATOR = 10,
	        GAMEMASTER_PADAWAN = 20,
	        GAMEMASTER = 30,
	        ADMIN = 40,
	    }
	    enum GuestLimitationEnum {
	        LIMITED_TO_REGISTERED = 0,
	        GUEST_LIMIT_ON_JOB_XP = 1,
	        GUEST_LIMIT_ON_JOB_USE = 2,
	        GUEST_LIMIT_ON_MAP = 3,
	        GUEST_LIMIT_ON_ITEM = 4,
	        GUEST_LIMIT_ON_VENDOR = 5,
	        GUEST_LIMIT_ON_CHAT = 6,
	        GUEST_LIMIT_ON_GUILD = 7,
	    }
	    enum GuildInformationsTypeEnum {
	        INFO_GENERAL = 1,
	        INFO_MEMBERS = 2,
	        INFO_BOOSTS = 3,
	        INFO_PADDOCKS = 4,
	        INFO_HOUSES = 5,
	        INFO_TAX_COLLECTOR_GUILD_ONLY = 6,
	        INFO_TAX_COLLECTOR_ALLIANCE = 7,
	        INFO_TAX_COLLECTOR_LEAVE = 8,
	    }
	    enum GuildRightsBitEnum {
	        GUILD_RIGHT_NONE = 0,
	        GUILD_RIGHT_BOSS = 1,
	        GUILD_RIGHT_MANAGE_GUILD_BOOSTS = 2,
	        GUILD_RIGHT_MANAGE_RIGHTS = 4,
	        GUILD_RIGHT_INVITE_NEW_MEMBERS = 8,
	        GUILD_RIGHT_BAN_MEMBERS = 16,
	        GUILD_RIGHT_MANAGE_XP_CONTRIBUTION = 32,
	        GUILD_RIGHT_MANAGE_RANKS = 64,
	        GUILD_RIGHT_HIRE_TAX_COLLECTOR = 128,
	        GUILD_RIGHT_MANAGE_MY_XP_CONTRIBUTION = 256,
	        GUILD_RIGHT_COLLECT = 512,
	        GUILD_RIGHT_USE_PADDOCKS = 4096,
	        GUILD_RIGHT_ORGANIZE_PADDOCKS = 8192,
	        GUILD_RIGHT_TAKE_OTHERS_MOUNTS_IN_PADDOCKS = 16384,
	        GUILD_RIGHT_DEFENSE_PRIORITY = 32768,
	        GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR = 65536,
	        GUILD_RIGHT_SET_ALLIANCE_PRISM = 131072,
	        GUILD_RIGHT_TALK_IN_ALLIANCE_CHAN = 262144,
	    }
	    enum HardcoreOrEpicDeathStateEnum {
	        DEATH_STATE_ALIVE = 0,
	        DEATH_STATE_DEAD = 1,
	        DEATH_STATE_WAITING_CONFIRMATION = 2,
	    }
	    enum IdentificationFailureReasonEnum {
	        BAD_VERSION = 1,
	        WRONG_CREDENTIALS = 2,
	        BANNED = 3,
	        KICKED = 4,
	        IN_MAINTENANCE = 5,
	        TOO_MANY_ON_IP = 6,
	        TIME_OUT = 7,
	        BAD_IPRANGE = 8,
	        CREDENTIALS_RESET = 9,
	        EMAIL_UNVALIDATED = 10,
	        OTP_TIMEOUT = 11,
	        SERVICE_UNAVAILABLE = 53,
	        EXTERNAL_ACCOUNT_LINK_REFUSED = 61,
	        EXTERNAL_ACCOUNT_ALREADY_LINKED = 62,
	        UNKNOWN_AUTH_ERROR = 99,
	        SPARE = 100,
	    }
	    enum ListAddFailureEnum {
	        LIST_ADD_FAILURE_UNKNOWN = 0,
	        LIST_ADD_FAILURE_OVER_QUOTA = 1,
	        LIST_ADD_FAILURE_NOT_FOUND = 2,
	        LIST_ADD_FAILURE_EGOCENTRIC = 3,
	        LIST_ADD_FAILURE_IS_DOUBLE = 4,
	    }
	    enum MapObstacleStateEnum {
	        OBSTACLE_OPENED = 1,
	        OBSTACLE_CLOSED = 2,
	    }
	    enum MountEquipedErrorEnum {
	        UNSET = 0,
	        SET = 1,
	        RIDING = 2,
	    }
	    enum NicknameErrorEnum {
	        ALREADY_USED = 1,
	        SAME_AS_LOGIN = 2,
	        TOO_SIMILAR_TO_LOGIN = 3,
	        INVALID_NICK = 4,
	        UNKNOWN_NICK_ERROR = 99,
	    }
	    enum NicknameGeneratingFailureEnum {
	        NICKNAME_GENERATOR_RETRY_TOO_SHORT = 1,
	        NICKNAME_GENERATOR_UNAVAILABLE = 2,
	    }
	    enum ObjectErrorEnum {
	        INVENTORY_FULL = 1,
	        CANNOT_EQUIP_TWICE = 2,
	        NOT_TRADABLE = 3,
	        CANNOT_DROP = 4,
	        CANNOT_DROP_NO_PLACE = 5,
	        CANNOT_DESTROY = 6,
	        LEVEL_TOO_LOW = 7,
	        LIVING_OBJECT_REFUSED_FOOD = 8,
	        CANNOT_UNEQUIP = 9,
	        CANNOT_EQUIP_HERE = 10,
	        CRITERIONS = 11,
	        SYMBIOTIC_OBJECT_ERROR = 12,
	    }
	    enum PartStateEnum {
	        PART_NOT_INSTALLED = 0,
	        PART_BEING_UPDATER = 1,
	        PART_UP_TO_DATE = 2,
	    }
	    enum PartyJoinErrorEnum {
	        PARTY_JOIN_ERROR_UNKNOWN = 0,
	        PARTY_JOIN_ERROR_PLAYER_NOT_FOUND = 1,
	        PARTY_JOIN_ERROR_PARTY_NOT_FOUND = 2,
	        PARTY_JOIN_ERROR_PARTY_FULL = 3,
	        PARTY_JOIN_ERROR_PLAYER_BUSY = 4,
	        PARTY_JOIN_ERROR_PLAYER_ALREADY_INVITED = 6,
	        PARTY_JOIN_ERROR_PLAYER_TOO_SOLLICITED = 7,
	        PARTY_JOIN_ERROR_PLAYER_LOYAL = 8,
	        PARTY_JOIN_ERROR_UNMODIFIABLE = 9,
	        PARTY_JOIN_ERROR_UNMET_CRITERION = 10,
	        PARTY_JOIN_ERROR_NOT_ENOUGH_ROOM = 11,
	        PARTY_JOIN_ERROR_COMPOSITION_CHANGED = 12,
	        PARTY_JOIN_ERROR_PLAYER_IN_TUTORIAL = 13,
	    }
	    enum PartyNameErrorEnum {
	        PARTY_NAME_UNDEFINED_ERROR = 0,
	        PARTY_NAME_INVALID = 1,
	        PARTY_NAME_ALREADY_USED = 2,
	        PARTY_NAME_UNALLOWED_RIGHTS = 3,
	        PARTY_NAME_UNALLOWED_NOW = 4,
	    }
	    enum PartyTypeEnum {
	        PARTY_TYPE_UNDEFINED = 0,
	        PARTY_TYPE_CLASSICAL = 1,
	        PARTY_TYPE_DUNGEON = 2,
	        PARTY_TYPE_ARENA = 3,
	    }
	    enum PlayableBreedEnum {
	        UNDEFINED = 0,
	        Feca = 1,
	        Osamodas = 2,
	        Enutrof = 3,
	        Sram = 4,
	        Xelor = 5,
	        Ecaflip = 6,
	        Eniripsa = 7,
	        Iop = 8,
	        Cra = 9,
	        Sadida = 10,
	        Sacrieur = 11,
	        Pandawa = 12,
	        Roublard = 13,
	        Zobal = 14,
	        Steamer = 15,
	        Eliotrope = 16,
	    }
	    enum PlayerLifeStatusEnum {
	        STATUS_ALIVE_AND_KICKING = 0,
	        STATUS_TOMBSTONE = 1,
	        STATUS_PHANTOM = 2,
	    }
	    enum PlayerStateEnum {
	        NOT_CONNECTED = 0,
	        GAME_TYPE_ROLEPLAY = 1,
	        GAME_TYPE_FIGHT = 2,
	        UNKNOWN_STATE = 99,
	    }
	    enum PlayerStatusEnum {
	        PLAYER_STATUS_OFFLINE = 0,
	        PLAYER_STATUS_UNKNOWN = 1,
	        PLAYER_STATUS_AVAILABLE = 10,
	        PLAYER_STATUS_IDLE = 20,
	        PLAYER_STATUS_AFK = 21,
	        PLAYER_STATUS_PRIVATE = 30,
	        PLAYER_STATUS_SOLO = 40,
	    }
	    enum PresetDeleteResultEnum {
	        PRESET_DEL_OK = 1,
	        PRESET_DEL_ERR_UNKNOWN = 2,
	        PRESET_DEL_ERR_BAD_PRESET_ID = 3,
	    }
	    enum PresetSaveResultEnum {
	        PRESET_SAVE_OK = 1,
	        PRESET_SAVE_ERR_UNKNOWN = 2,
	        PRESET_SAVE_ERR_TOO_MANY = 3,
	    }
	    enum PresetSaveUpdateErrorEnum {
	        PRESET_UPDATE_ERR_UNKNOWN = 1,
	        PRESET_UPDATE_ERR_BAD_PRESET_ID = 2,
	        PRESET_UPDATE_ERR_BAD_POSITION = 3,
	        PRESET_UPDATE_ERR_BAD_OBJECT_ID = 4,
	    }
	    enum PresetUseResultEnum {
	        PRESET_USE_OK = 1,
	        PRESET_USE_OK_PARTIAL = 2,
	        PRESET_USE_ERR_UNKNOWN = 3,
	        PRESET_USE_ERR_CRITERION = 4,
	        PRESET_USE_ERR_BAD_PRESET_ID = 5,
	        PRESET_USE_ERR_COOLDOWN = 6,
	    }
	    enum PrismListenEnum {
	        PRISM_LISTEN_NONE = 0,
	        PRISM_LISTEN_MINE = 1,
	        PRISM_LISTEN_ALL = 2,
	    }
	    enum PrismSetSabotagedRefusedReasonEnum {
	        SABOTAGE_REFUSED = -1,
	        SABOTAGE_INSUFFICIENT_RIGHTS = 0,
	        SABOTAGE_MEMBER_ACCOUNT_NEEDED = 1,
	        SABOTAGE_RESTRICTED_ACCOUNT = 2,
	        SABOTAGE_WRONG_ALLIANCE = 3,
	        SABOTAGE_NO_PRISM = 4,
	        SABOTAGE_WRONG_STATE = 5,
	    }
	    enum PrismStateEnum {
	        PRISM_STATE_INVULNERABLE = 0,
	        PRISM_STATE_NORMAL = 1,
	        PRISM_STATE_ATTACKED = 2,
	        PRISM_STATE_FIGHTING = 3,
	        PRISM_STATE_WEAKENED = 4,
	        PRISM_STATE_VULNERABLE = 5,
	        PRISM_STATE_DEFEATED = 6,
	        PRISM_STATE_SABOTAGED = 7,
	    }
	    enum PvpArenaStepEnum {
	        ARENA_STEP_REGISTRED = 0,
	        ARENA_STEP_WAITING_FIGHT = 1,
	        ARENA_STEP_STARTING_FIGHT = 2,
	        ARENA_STEP_UNREGISTER = 3,
	    }
	    enum PvpArenaTypeEnum {
	        ARENA_TYPE_3VS3 = 3,
	        ARENA_TYPE_5VS5 = 5,
	    }
	    enum SequenceTypeEnum {
	        SEQUENCE_SPELL = 1,
	        SEQUENCE_WEAPON = 2,
	        SEQUENCE_GLYPH_TRAP = 3,
	        SEQUENCE_TRIGGERED = 4,
	        SEQUENCE_MOVE = 5,
	        SEQUENCE_CHARACTER_DEATH = 6,
	        SEQUENCE_TURN_START = 7,
	        SEQUENCE_TURN_END = 8,
	        SEQUENCE_FIGHT_START = 9,
	    }
	    enum ServerConnectionErrorEnum {
	        SERVER_CONNECTION_ERROR_DUE_TO_STATUS = 0,
	        SERVER_CONNECTION_ERROR_NO_REASON = 1,
	        SERVER_CONNECTION_ERROR_ACCOUNT_RESTRICTED = 2,
	        SERVER_CONNECTION_ERROR_COMMUNITY_RESTRICTED = 3,
	        SERVER_CONNECTION_ERROR_LOCATION_RESTRICTED = 4,
	        SERVER_CONNECTION_ERROR_SUBSCRIBERS_ONLY = 5,
	        SERVER_CONNECTION_ERROR_REGULAR_PLAYERS_ONLY = 6,
	    }
	    enum ServerStatusEnum {
	        STATUS_UNKNOWN = 0,
	        OFFLINE = 1,
	        STARTING = 2,
	        ONLINE = 3,
	        NOJOIN = 4,
	        SAVING = 5,
	        STOPING = 6,
	        FULL = 7,
	    }
	    enum ShortcutBarEnum {
	        GENERAL_SHORTCUT_BAR = 0,
	        SPELL_SHORTCUT_BAR = 1,
	    }
	    enum SocialContactCategoryEnum {
	        SOCIAL_CONTACT_FRIEND = 0,
	        SOCIAL_CONTACT_SPOUSE = 1,
	        SOCIAL_CONTACT_PARTY = 2,
	        SOCIAL_CONTACT_GUILD = 3,
	        SOCIAL_CONTACT_ALLIANCE = 4,
	        SOCIAL_CONTACT_CRAFTER = 5,
	        SOCIAL_CONTACT_INTERLOCUTOR = 6,
	        SOCIAL_CONTACT_FIGHT = 7,
	    }
	    enum SocialGroupCreationResultEnum {
	        SOCIAL_GROUP_CREATE_OK = 1,
	        SOCIAL_GROUP_CREATE_ERROR_NAME_INVALID = 2,
	        SOCIAL_GROUP_CREATE_ERROR_ALREADY_IN_GROUP = 3,
	        SOCIAL_GROUP_CREATE_ERROR_NAME_ALREADY_EXISTS = 4,
	        SOCIAL_GROUP_CREATE_ERROR_EMBLEM_ALREADY_EXISTS = 5,
	        SOCIAL_GROUP_CREATE_ERROR_LEAVE = 6,
	        SOCIAL_GROUP_CREATE_ERROR_CANCEL = 7,
	        SOCIAL_GROUP_CREATE_ERROR_REQUIREMENT_UNMET = 8,
	        SOCIAL_GROUP_CREATE_ERROR_EMBLEM_INVALID = 9,
	        SOCIAL_GROUP_CREATE_ERROR_TAG_INVALID = 10,
	        SOCIAL_GROUP_CREATE_ERROR_TAG_ALREADY_EXISTS = 11,
	        SOCIAL_GROUP_CREATE_ERROR_NEEDS_SUBGROUP = 12,
	        SOCIAL_GROUP_CREATE_ERROR_UNKNOWN = 99,
	    }
	    enum SocialGroupInvitationStateEnum {
	        SOCIAL_GROUP_INVITATION_FAILED = 0,
	        SOCIAL_GROUP_INVITATION_SENT = 1,
	        SOCIAL_GROUP_INVITATION_CANCELED = 2,
	        SOCIAL_GROUP_INVITATION_OK = 3,
	    }
	    enum StatisticTypeEnum {
	        STEP0000_CHOSE_NICKNAME = 78,
	        STEP0100_CHOSE_SERVER = 79,
	        STEP0200_CREATE_FIRST_CHARACTER = 80,
	        STEP0300_LOADING_SCREEN = 81,
	        STEP0400_DOFUS_TRAILER = 82,
	        STEP0500_ARRIVES_ON_TUTORIAL = 83,
	        STEP0550_QUITS_TUTORIAL = 84,
	        STEP0600_TUTO1_MOVE_MAP = 85,
	        STEP0700_TUTO2_TALK_TO_YAKASI = 86,
	        STEP0800_TUTO3_EQUIP_RING = 87,
	        STEP0820_CLIC_BAG = 88,
	        STEP0840_CLIC_RING = 89,
	        STEP0860_EQUIP_RING = 90,
	        STEP0860_EXIT_BAG = 91,
	        STEP0900_TUTO4_CHANGE_MAP = 92,
	        STEP1000_TUTO5_START_FIRST_FIGHT = 93,
	        STEP1100_TUTO6_CHOSE_START_POSITION = 94,
	        STEP1130_CHOSE_POSITION = 95,
	        STEP1160_CLIC_READY = 96,
	        STEP1200_TUTO7_MOVE_IN_FIGHT = 97,
	        STEP1900_TUTO8_USE_SPELL = 98,
	        STEP1930_CHOSE_SPELL = 99,
	        STEP1960_USE_SPELL = 100,
	        STEP2000_TUTO9_END_TURN = 101,
	        STEP2100_TUTO10_WIN_FIGHT = 102,
	        STEP2050_TUTO10_LOSE_FIGHT = 103,
	        STEP2200_TUTO11_START_FIRST_QUEST = 104,
	        STEP2220_CLIC_YAKASI = 105,
	        STEP2240_TALK_YAKASI = 106,
	        STEP2260_ACCEPT_MISSION = 107,
	        STEP2300_TUTO12_EQUIP_SET = 108,
	        STEP2350_EXIT_BAG = 109,
	        STEP2400_TUTO13_LETS_KILL_MONSTER = 110,
	        STEP2430_GO_TO_NEXT_MAP = 111,
	        STEP2460_CLIC_MONSTER = 112,
	        STEP2500_TUTO14_END_SECOND_FIGHT = 113,
	        STEP2600_TUTO15_END_TUTO = 114,
	        STEP2620_CLIC_YAKASI = 115,
	        STEP2640_END_DIALOG = 116,
	        CLICK_ON_BUTTON = 151,
	        DISPLAY_MENU = 152,
	    }
	    enum StatsUpgradeResultEnum {
	        NONE = -1,
	        SUCCESS = 0,
	        RESTRICTED = 1,
	        GUEST = 2,
	        IN_FIGHT = 3,
	        NOT_ENOUGH_POINT = 4,
	    }
	    enum SubEntityBindingPointCategoryEnum {
	        HOOK_POINT_CATEGORY_UNUSED = 0,
	        HOOK_POINT_CATEGORY_PET = 1,
	        HOOK_POINT_CATEGORY_MOUNT_DRIVER = 2,
	        HOOK_POINT_CATEGORY_LIFTED_ENTITY = 3,
	        HOOK_POINT_CATEGORY_BASE_BACKGROUND = 4,
	        HOOK_POINT_CATEGORY_MERCHANT_BAG = 5,
	        HOOK_POINT_CATEGORY_BASE_FOREGROUND = 6,
	        HOOK_POINT_CATEGORY_PET_FOLLOWER = 7,
	    }
	    enum SubscriptionRequiredEnum {
	        LIMITED_TO_SUBSCRIBER = 0,
	        LIMIT_ON_JOB_XP = 1,
	        LIMIT_ON_JOB_USE = 2,
	        LIMIT_ON_MAP = 3,
	        LIMIT_ON_ITEM = 4,
	        LIMIT_ON_VENDOR = 5,
	    }
	    enum TaxCollectorErrorReasonEnum {
	        TAX_COLLECTOR_ERROR_UNKNOWN = 0,
	        TAX_COLLECTOR_NOT_FOUND = 1,
	        TAX_COLLECTOR_NOT_OWNED = 2,
	        TAX_COLLECTOR_NO_RIGHTS = 3,
	        TAX_COLLECTOR_MAX_REACHED = 4,
	        TAX_COLLECTOR_ALREADY_ONE = 5,
	        TAX_COLLECTOR_CANT_HIRE_YET = 6,
	        TAX_COLLECTOR_CANT_HIRE_HERE = 7,
	        TAX_COLLECTOR_NOT_ENOUGH_KAMAS = 8,
	    }
	    enum TaxCollectorStateEnum {
	        STATE_COLLECTING = 0,
	        STATE_WAITING_FOR_HELP = 1,
	        STATE_FIGHTING = 2,
	    }
	    enum TeamEnum {
	        TEAM_CHALLENGER = 0,
	        TEAM_DEFENDER = 1,
	        TEAM_SPECTATOR = 2,
	    }
	    enum TeamTypeEnum {
	        TEAM_TYPE_PLAYER = 0,
	        TEAM_TYPE_MONSTER = 1,
	        TEAM_TYPE_MUTANT = 2,
	        TEAM_TYPE_TAXCOLLECTOR = 3,
	        TEAM_TYPE_BAD_PLAYER = 4,
	        TEAM_TYPE_PRISM = 5,
	    }
	    enum TeleporterTypeEnum {
	        TELEPORTER_ZAAP = 0,
	        TELEPORTER_SUBWAY = 1,
	        TELEPORTER_PRISM = 2,
	    }
	    enum TextInformationTypeEnum {
	        TEXT_INFORMATION_MESSAGE = 0,
	        TEXT_INFORMATION_ERROR = 1,
	        TEXT_INFORMATION_PVP = 2,
	        TEXT_INFORMATION_FIGHT_LOG = 3,
	        TEXT_INFORMATION_POPUP = 4,
	        TEXT_LIVING_OBJECT = 5,
	        TEXT_ENTITY_TALK = 6,
	        TEXT_INFORMATION_FIGHT = 7,
	    }
	    enum TreasureHuntDigRequestEnum {
	        TREASURE_HUNT_DIG_ERROR_UNDEFINED = 0,
	        TREASURE_HUNT_DIG_NEW_HINT = 1,
	        TREASURE_HUNT_DIG_FINISHED = 2,
	        TREASURE_HUNT_DIG_WRONG = 3,
	        TREASURE_HUNT_DIG_LOST = 4,
	        TREASURE_HUNT_DIG_ERROR_IMPOSSIBLE = 5,
	        TREASURE_HUNT_DIG_WRONG_AND_YOU_KNOW_IT = 6,
	    }
	    enum TreasureHuntFlagRequestEnum {
	        TREASURE_HUNT_FLAG_ERROR_UNDEFINED = 0,
	        TREASURE_HUNT_FLAG_OK = 1,
	        TREASURE_HUNT_FLAG_WRONG = 2,
	        TREASURE_HUNT_FLAG_TOO_MANY = 3,
	        TREASURE_HUNT_FLAG_ERROR_IMPOSSIBLE = 4,
	        TREASURE_HUNT_FLAG_WRONG_INDEX = 5,
	        TREASURE_HUNT_FLAG_SAME_MAP = 6,
	    }
	    enum TreasureHuntFlagStateEnum {
	        TREASURE_HUNT_FLAG_STATE_UNKNOWN = 0,
	        TREASURE_HUNT_FLAG_STATE_OK = 1,
	        TREASURE_HUNT_FLAG_STATE_WRONG = 2,
	    }
	    enum TreasureHuntRequestEnum {
	        TREASURE_HUNT_ERROR_UNDEFINED = 0,
	        TREASURE_HUNT_ERROR_NO_QUEST_FOUND = 2,
	        TREASURE_HUNT_ERROR_ALREADY_HAVE_QUEST = 3,
	        TREASURE_HUNT_ERROR_NOT_AVAILABLE = 4,
	        TREASURE_HUNT_OK = 1,
	    }
	    enum TreasureHuntTypeEnum {
	        TREASURE_HUNT_CLASSIC = 0,
	        TREASURE_HUNT_PORTAL = 1,
	        TREASURE_HUNT_LEGENDARY = 2,
	    }
	    enum UpdatableMountBoostEnum {
	        STAMINA = 3,
	        MATURITY = 5,
	        ENERGY = 1,
	        SERENITY = 2,
	        LOVE = 4,
	        TIREDNESS = 6,
	        RIDEABLE = 7,
	    }
	    class AdminCommandMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        content: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AdminCommandMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AdminCommandMessage(param1: ICustomDataInput): void;
	    }
	    class AdminQuietCommandMessage extends AdminCommandMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AdminQuietCommandMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AdminQuietCommandMessage(param1: ICustomDataInput): void;
	    }
	    class ConsoleCommandsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        aliases: string[];
	        args: string[];
	        descriptions: string[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ConsoleCommandsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ConsoleCommandsListMessage(param1: ICustomDataInput): void;
	    }
	    class ConsoleMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        type: number;
	        content: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ConsoleMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ConsoleMessage(param1: ICustomDataInput): void;
	    }
	    class NetworkDataContainerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        content: ByteArray;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NetworkDataContainerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NetworkDataContainerMessage(param1: ICustomDataInput): void;
	    }
	    class BasicPingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        quiet: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicPingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicPingMessage(param1: ICustomDataInput): void;
	    }
	    class BasicPongMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        quiet: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicPongMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicPongMessage(param1: ICustomDataInput): void;
	    }
	    class BasicStatMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        statId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicStatMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicStatMessage(param1: ICustomDataInput): void;
	    }
	    class CredentialsAcknowledgementMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CredentialsAcknowledgementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CredentialsAcknowledgementMessage(param1: ICustomDataInput): void;
	    }
	    class HelloConnectMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        salt: string;
	        key: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HelloConnectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HelloConnectMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationAccountForceMessage extends IdentificationMessage {
	        static ID: number;
	        forcedAccountLogin: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationAccountForceMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationAccountForceMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationFailedBannedMessage extends IdentificationFailedMessage {
	        static ID: number;
	        banEndDate: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationFailedBannedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationFailedBannedMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationFailedForBadVersionMessage extends IdentificationFailedMessage {
	        static ID: number;
	        requiredVersion: Version;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationFailedForBadVersionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationFailedForBadVersionMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationFailedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationFailedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationFailedMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        version: VersionExtended;
	        lang: string;
	        credentials: number[];
	        serverId: number;
	        autoconnect: boolean;
	        useCertificate: boolean;
	        useLoginToken: boolean;
	        sessionOptionalSalt: number;
	        failedAttempts: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationSuccessMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        login: string;
	        nickname: string;
	        accountId: number;
	        communityId: number;
	        hasRights: boolean;
	        secretQuestion: string;
	        accountCreation: number;
	        subscriptionElapsedDuration: number;
	        subscriptionEndDate: number;
	        wasAlreadyConnected: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationSuccessMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationSuccessMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationSuccessWithLoginTokenMessage extends IdentificationSuccessMessage {
	        static ID: number;
	        loginToken: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationSuccessWithLoginTokenMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationSuccessWithLoginTokenMessage(param1: ICustomDataInput): void;
	    }
	    class SelectedServerDataExtendedMessage extends SelectedServerDataMessage {
	        static ID: number;
	        serverIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataInput): void;
	    }
	    class SelectedServerDataMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        serverId: number;
	        address: string;
	        port: number;
	        canCreateNewCharacter: boolean;
	        ticket: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SelectedServerDataMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SelectedServerDataMessage(param1: ICustomDataInput): void;
	    }
	    class SelectedServerRefusedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        serverId: number;
	        error: number;
	        serverStatus: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SelectedServerRefusedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SelectedServerRefusedMessage(param1: ICustomDataInput): void;
	    }
	    class ServerSelectionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        serverId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSelectionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSelectionMessage(param1: ICustomDataInput): void;
	    }
	    class ServerStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        server: GameServerInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerStatusUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerStatusUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class ServersListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        servers: GameServerInformations[];
	        alreadyConnectedToServerId: number;
	        canCreateNewCharacter: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServersListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServersListMessage(param1: ICustomDataInput): void;
	    }
	    class AccountLinkRequiredMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccountLinkRequiredMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccountLinkRequiredMessage(param1: ICustomDataInput): void;
	    }
	    class NicknameAcceptedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NicknameAcceptedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NicknameAcceptedMessage(param1: ICustomDataInput): void;
	    }
	    class NicknameChoiceRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        nickname: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NicknameChoiceRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NicknameChoiceRequestMessage(param1: ICustomDataInput): void;
	    }
	    class NicknameRefusedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NicknameRefusedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NicknameRefusedMessage(param1: ICustomDataInput): void;
	    }
	    class NicknameRegistrationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NicknameRegistrationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NicknameRegistrationMessage(param1: ICustomDataInput): void;
	    }
	    class AcquaintanceSearchErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AcquaintanceSearchErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AcquaintanceSearchErrorMessage(param1: ICustomDataInput): void;
	    }
	    class AcquaintanceSearchMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        nickname: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AcquaintanceSearchMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AcquaintanceSearchMessage(param1: ICustomDataInput): void;
	    }
	    class AcquaintanceServerListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        servers: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AcquaintanceServerListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AcquaintanceServerListMessage(param1: ICustomDataInput): void;
	    }
	    class DebugClearHighlightCellsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DebugClearHighlightCellsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DebugClearHighlightCellsMessage(param1: ICustomDataInput): void;
	    }
	    class DebugHighlightCellsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        color: number;
	        cells: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DebugHighlightCellsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DebugHighlightCellsMessage(param1: ICustomDataInput): void;
	    }
	    class DebugInClientMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        level: number;
	        message: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DebugInClientMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DebugInClientMessage(param1: ICustomDataInput): void;
	    }
	    class ProtocolRequired extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        requiredVersion: number;
	        currentVersion: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ProtocolRequired(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ProtocolRequired(param1: ICustomDataInput): void;
	    }
	    class LoginQueueStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        position: number;
	        total: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LoginQueueStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LoginQueueStatusMessage(param1: ICustomDataInput): void;
	    }
	    class QueueStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        position: number;
	        total: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QueueStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QueueStatusMessage(param1: ICustomDataInput): void;
	    }
	    class TrustStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        trusted: boolean;
	        certified: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TrustStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TrustStatusMessage(param1: ICustomDataInput): void;
	    }
	    class CheckFileMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        filenameHash: string;
	        type: number;
	        value: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CheckFileMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CheckFileMessage(param1: ICustomDataInput): void;
	    }
	    class CheckFileRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        filename: string;
	        type: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CheckFileRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CheckFileRequestMessage(param1: ICustomDataInput): void;
	    }
	    class CheckIntegrityMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        data: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CheckIntegrityMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CheckIntegrityMessage(param1: ICustomDataInput): void;
	    }
	    class ClientKeyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        key: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ClientKeyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ClientKeyMessage(param1: ICustomDataInput): void;
	    }
	    class RawDataMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        content: ByteArray;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_RawDataMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_RawDataMessage(param1: ICustomDataInput): void;
	    }
	    class SystemMessageDisplayMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        hangUp: boolean;
	        msgId: number;
	        parameters: string[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SystemMessageDisplayMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SystemMessageDisplayMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadCurrentSpeedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        downloadSpeed: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadCurrentSpeedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadCurrentSpeedMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        errorId: number;
	        message: string;
	        helpUrl: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadErrorMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadGetCurrentSpeedRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadGetCurrentSpeedRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadGetCurrentSpeedRequestMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadPartMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadPartMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadPartMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadSetSpeedRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        downloadSpeed: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadSetSpeedRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadSetSpeedRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GetPartInfoMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GetPartInfoMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GetPartInfoMessage(param1: ICustomDataInput): void;
	    }
	    class GetPartsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GetPartsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GetPartsListMessage(param1: ICustomDataInput): void;
	    }
	    class PartInfoMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        part: ContentPart;
	        installationPercent: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartInfoMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartInfoMessage(param1: ICustomDataInput): void;
	    }
	    class PartsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        parts: ContentPart[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartsListMessage(param1: ICustomDataInput): void;
	    }
	    class MailStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        unread: number;
	        total: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MailStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MailStatusMessage(param1: ICustomDataInput): void;
	    }
	    class NewMailMessage extends MailStatusMessage {
	        static ID: number;
	        sendersAccountId: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NewMailMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NewMailMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterAuthTokenErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterAuthTokenErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterAuthTokenErrorMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterAuthTokenMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        token: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterAuthTokenMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterAuthTokenMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterAuthTokenRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterAuthTokenRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterAuthTokenRequestMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterInventoryErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterInventoryErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterInventoryErrorMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterInventoryMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        figures: KrosmasterFigure[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterInventoryMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterInventoryMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterInventoryRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterInventoryRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterInventoryRequestMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterPlayingStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        playing: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterPlayingStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterPlayingStatusMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterTransferMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        uid: string;
	        failure: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterTransferMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterTransferMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterTransferRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        uid: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterTransferRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterTransferRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ClientYouAreDrunkMessage extends DebugInClientMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ClientYouAreDrunkMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ClientYouAreDrunkMessage(param1: ICustomDataInput): void;
	    }
	    class StatisticData implements INetworkType {
	        static ID: number;
	        actionId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticData(param1: ICustomDataInput): void;
	    }
	    class StatisticDataBoolean extends StatisticData implements INetworkType {
	        static ID: number;
	        value: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataBoolean(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataBoolean(param1: ICustomDataInput): void;
	    }
	    class StatisticDataByte extends StatisticData implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataByte(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataByte(param1: ICustomDataInput): void;
	    }
	    class StatisticDataInt extends StatisticData implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataInt(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataInt(param1: ICustomDataInput): void;
	    }
	    class StatisticDataShort extends StatisticData implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataShort(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataShort(param1: ICustomDataInput): void;
	    }
	    class StatisticDataString extends StatisticData implements INetworkType {
	        static ID: number;
	        value: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataString(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataString(param1: ICustomDataInput): void;
	    }
	    class GameServerInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        type: number;
	        status: number;
	        completion: number;
	        isSelectable: boolean;
	        charactersCount: number;
	        charactersSlots: number;
	        date: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameServerInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameServerInformations(param1: ICustomDataInput): void;
	    }
	    class Achievement implements INetworkType {
	        static ID: number;
	        id: number;
	        finishedObjective: AchievementObjective[];
	        startedObjectives: AchievementStartedObjective[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Achievement(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Achievement(param1: ICustomDataInput): void;
	    }
	    class AchievementObjective implements INetworkType {
	        static ID: number;
	        id: number;
	        maxValue: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementObjective(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementObjective(param1: ICustomDataInput): void;
	    }
	    class AchievementRewardable implements INetworkType {
	        static ID: number;
	        id: number;
	        finishedlevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementRewardable(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementRewardable(param1: ICustomDataInput): void;
	    }
	    class AchievementStartedObjective extends AchievementObjective implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementStartedObjective(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementStartedObjective(param1: ICustomDataInput): void;
	    }
	    class FightDispellableEffectExtendedInformations implements INetworkType {
	        static ID: number;
	        actionId: number;
	        sourceId: number;
	        effect: AbstractFightDispellableEffect;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataInput): void;
	    }
	    class AbstractFightDispellableEffect implements INetworkType {
	        static ID: number;
	        uid: number;
	        targetId: number;
	        turnDuration: number;
	        dispelable: number;
	        spellId: number;
	        effectId: number;
	        parentBoostUid: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractFightDispellableEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractFightDispellableEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporaryBoostEffect extends AbstractFightDispellableEffect implements INetworkType {
	        static ID: number;
	        delta: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporaryBoostEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporaryBoostEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporaryBoostStateEffect extends FightTemporaryBoostEffect implements INetworkType {
	        static ID: number;
	        stateId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporaryBoostWeaponDamagesEffect extends FightTemporaryBoostEffect implements INetworkType {
	        static ID: number;
	        weaponTypeId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporarySpellBoostEffect extends FightTemporaryBoostEffect implements INetworkType {
	        static ID: number;
	        boostedSpellId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporarySpellImmunityEffect extends AbstractFightDispellableEffect implements INetworkType {
	        static ID: number;
	        immuneSpellId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporarySpellImmunityEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporarySpellImmunityEffect(param1: ICustomDataInput): void;
	    }
	    class FightTriggeredEffect extends AbstractFightDispellableEffect implements INetworkType {
	        static ID: number;
	        param1: number;
	        param2: number;
	        param3: number;
	        delay: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTriggeredEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTriggeredEffect(param1: ICustomDataInput): void;
	    }
	    class GameActionMark implements INetworkType {
	        static ID: number;
	        markAuthorId: number;
	        markTeamId: number;
	        markSpellId: number;
	        markSpellLevel: number;
	        markId: number;
	        markType: number;
	        markimpactCell: number;
	        cells: GameActionMarkedCell[];
	        active: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionMark(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionMark(param1: ICustomDataInput): void;
	    }
	    class GameActionMarkedCell implements INetworkType {
	        static ID: number;
	        cellId: number;
	        zoneSize: number;
	        cellColor: number;
	        cellsType: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionMarkedCell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionMarkedCell(param1: ICustomDataInput): void;
	    }
	    class ServerSessionConstant implements INetworkType {
	        static ID: number;
	        id: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSessionConstant(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSessionConstant(param1: ICustomDataInput): void;
	    }
	    class ServerSessionConstantInteger extends ServerSessionConstant implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSessionConstantInteger(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSessionConstantInteger(param1: ICustomDataInput): void;
	    }
	    class ServerSessionConstantLong extends ServerSessionConstant implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSessionConstantLong(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSessionConstantLong(param1: ICustomDataInput): void;
	    }
	    class ServerSessionConstantString extends ServerSessionConstant implements INetworkType {
	        static ID: number;
	        value: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSessionConstantString(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSessionConstantString(param1: ICustomDataInput): void;
	    }
	    class AbstractCharacterInformation implements INetworkType {
	        static ID: number;
	        id: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractCharacterInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractCharacterInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalAllianceInformations extends CharacterMinimalGuildInformations implements INetworkType {
	        static ID: number;
	        alliance: BasicAllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalGuildInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
	        static ID: number;
	        guild: BasicGuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalGuildInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalGuildInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalInformations extends AbstractCharacterInformation implements INetworkType {
	        static ID: number;
	        level: number;
	        name: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalPlusLookAndGradeInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
	        static ID: number;
	        grade: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalPlusLookInformations extends CharacterMinimalInformations implements INetworkType {
	        static ID: number;
	        entityLook: EntityLook;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataInput): void;
	    }
	    class ActorAlignmentInformations implements INetworkType {
	        static ID: number;
	        alignmentSide: number;
	        alignmentValue: number;
	        alignmentGrade: number;
	        characterPower: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ActorAlignmentInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ActorAlignmentInformations(param1: ICustomDataInput): void;
	    }
	    class ActorExtendedAlignmentInformations extends ActorAlignmentInformations implements INetworkType {
	        static ID: number;
	        honor: number;
	        honorGradeFloor: number;
	        honorNextGradeFloor: number;
	        aggressable: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterBaseCharacteristic implements INetworkType {
	        static ID: number;
	        base: number;
	        additionnal: number;
	        objectsAndMountBonus: number;
	        alignGiftBonus: number;
	        contextModif: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterBaseCharacteristic(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterBaseCharacteristic(param1: ICustomDataInput): void;
	    }
	    class CharacterCharacteristicsInformations implements INetworkType {
	        static ID: number;
	        experience: number;
	        experienceLevelFloor: number;
	        experienceNextLevelFloor: number;
	        kamas: number;
	        statsPoints: number;
	        additionnalPoints: number;
	        spellsPoints: number;
	        alignmentInfos: ActorExtendedAlignmentInformations;
	        lifePoints: number;
	        maxLifePoints: number;
	        energyPoints: number;
	        maxEnergyPoints: number;
	        actionPointsCurrent: number;
	        movementPointsCurrent: number;
	        initiative: CharacterBaseCharacteristic;
	        prospecting: CharacterBaseCharacteristic;
	        actionPoints: CharacterBaseCharacteristic;
	        movementPoints: CharacterBaseCharacteristic;
	        strength: CharacterBaseCharacteristic;
	        vitality: CharacterBaseCharacteristic;
	        wisdom: CharacterBaseCharacteristic;
	        chance: CharacterBaseCharacteristic;
	        agility: CharacterBaseCharacteristic;
	        intelligence: CharacterBaseCharacteristic;
	        range: CharacterBaseCharacteristic;
	        summonableCreaturesBoost: CharacterBaseCharacteristic;
	        reflect: CharacterBaseCharacteristic;
	        criticalHit: CharacterBaseCharacteristic;
	        criticalHitWeapon: number;
	        criticalMiss: CharacterBaseCharacteristic;
	        healBonus: CharacterBaseCharacteristic;
	        allDamagesBonus: CharacterBaseCharacteristic;
	        weaponDamagesBonusPercent: CharacterBaseCharacteristic;
	        damagesBonusPercent: CharacterBaseCharacteristic;
	        trapBonus: CharacterBaseCharacteristic;
	        trapBonusPercent: CharacterBaseCharacteristic;
	        glyphBonusPercent: CharacterBaseCharacteristic;
	        permanentDamagePercent: CharacterBaseCharacteristic;
	        tackleBlock: CharacterBaseCharacteristic;
	        tackleEvade: CharacterBaseCharacteristic;
	        PAAttack: CharacterBaseCharacteristic;
	        PMAttack: CharacterBaseCharacteristic;
	        pushDamageBonus: CharacterBaseCharacteristic;
	        criticalDamageBonus: CharacterBaseCharacteristic;
	        neutralDamageBonus: CharacterBaseCharacteristic;
	        earthDamageBonus: CharacterBaseCharacteristic;
	        waterDamageBonus: CharacterBaseCharacteristic;
	        airDamageBonus: CharacterBaseCharacteristic;
	        fireDamageBonus: CharacterBaseCharacteristic;
	        dodgePALostProbability: CharacterBaseCharacteristic;
	        dodgePMLostProbability: CharacterBaseCharacteristic;
	        neutralElementResistPercent: CharacterBaseCharacteristic;
	        earthElementResistPercent: CharacterBaseCharacteristic;
	        waterElementResistPercent: CharacterBaseCharacteristic;
	        airElementResistPercent: CharacterBaseCharacteristic;
	        fireElementResistPercent: CharacterBaseCharacteristic;
	        neutralElementReduction: CharacterBaseCharacteristic;
	        earthElementReduction: CharacterBaseCharacteristic;
	        waterElementReduction: CharacterBaseCharacteristic;
	        airElementReduction: CharacterBaseCharacteristic;
	        fireElementReduction: CharacterBaseCharacteristic;
	        pushDamageReduction: CharacterBaseCharacteristic;
	        criticalDamageReduction: CharacterBaseCharacteristic;
	        pvpNeutralElementResistPercent: CharacterBaseCharacteristic;
	        pvpEarthElementResistPercent: CharacterBaseCharacteristic;
	        pvpWaterElementResistPercent: CharacterBaseCharacteristic;
	        pvpAirElementResistPercent: CharacterBaseCharacteristic;
	        pvpFireElementResistPercent: CharacterBaseCharacteristic;
	        pvpNeutralElementReduction: CharacterBaseCharacteristic;
	        pvpEarthElementReduction: CharacterBaseCharacteristic;
	        pvpWaterElementReduction: CharacterBaseCharacteristic;
	        pvpAirElementReduction: CharacterBaseCharacteristic;
	        pvpFireElementReduction: CharacterBaseCharacteristic;
	        spellModifications: CharacterSpellModification[];
	        probationTime: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterCharacteristicsInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterCharacteristicsInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterSpellModification implements INetworkType {
	        static ID: number;
	        modificationType: number;
	        spellId: number;
	        value: CharacterBaseCharacteristic;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterSpellModification(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterSpellModification(param1: ICustomDataInput): void;
	    }
	    class AbstractCharacterToRefurbishInformation extends AbstractCharacterInformation implements INetworkType {
	        static ID: number;
	        colors: number[];
	        cosmeticId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterBaseInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
	        static ID: number;
	        breed: number;
	        sex: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterBaseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterBaseInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterHardcoreOrEpicInformations extends CharacterBaseInformations implements INetworkType {
	        static ID: number;
	        deathState: number;
	        deathCount: number;
	        deathMaxLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterHardcoreOrEpicInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterHardcoreOrEpicInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterRemodelingInformation extends AbstractCharacterInformation implements INetworkType {
	        static ID: number;
	        name: string;
	        breed: number;
	        sex: boolean;
	        cosmeticId: number;
	        colors: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterRemodelingInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterRemodelingInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterToRecolorInformation extends AbstractCharacterToRefurbishInformation implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterToRecolorInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterToRecolorInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterToRelookInformation extends AbstractCharacterToRefurbishInformation implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterToRelookInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterToRelookInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterToRemodelInformations extends CharacterRemodelingInformation implements INetworkType {
	        static ID: number;
	        possibleChangeMask: number;
	        mandatoryChangeMask: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterToRemodelInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterToRemodelInformations(param1: ICustomDataInput): void;
	    }
	    class RemodelingInformation implements INetworkType {
	        static ID: number;
	        name: string;
	        breed: number;
	        sex: boolean;
	        cosmeticId: number;
	        colors: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_RemodelingInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_RemodelingInformation(param1: ICustomDataInput): void;
	    }
	    class ActorRestrictionsInformations implements INetworkType {
	        static ID: number;
	        cantBeAggressed: boolean;
	        cantBeChallenged: boolean;
	        cantTrade: boolean;
	        cantBeAttackedByMutant: boolean;
	        cantRun: boolean;
	        forceSlowWalk: boolean;
	        cantMinimize: boolean;
	        cantMove: boolean;
	        cantAggress: boolean;
	        cantChallenge: boolean;
	        cantExchange: boolean;
	        cantAttack: boolean;
	        cantChat: boolean;
	        cantBeMerchant: boolean;
	        cantUseObject: boolean;
	        cantUseTaxCollector: boolean;
	        cantUseInteractive: boolean;
	        cantSpeakToNPC: boolean;
	        cantChangeZone: boolean;
	        cantAttackMonster: boolean;
	        cantWalk8Directions: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ActorRestrictionsInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ActorRestrictionsInformations(param1: ICustomDataInput): void;
	    }
	    class PlayerStatus implements INetworkType {
	        static ID: number;
	        statusId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PlayerStatus(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PlayerStatus(param1: ICustomDataInput): void;
	    }
	    class PlayerStatusExtended extends PlayerStatus implements INetworkType {
	        static ID: number;
	        message: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PlayerStatusExtended(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PlayerStatusExtended(param1: ICustomDataInput): void;
	    }
	    class ActorOrientation implements INetworkType {
	        static ID: number;
	        id: number;
	        direction: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ActorOrientation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ActorOrientation(param1: ICustomDataInput): void;
	    }
	    class EntityDispositionInformations implements INetworkType {
	        static ID: number;
	        cellId: number;
	        direction: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EntityDispositionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EntityDispositionInformations(param1: ICustomDataInput): void;
	    }
	    class EntityMovementInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        steps: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EntityMovementInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EntityMovementInformations(param1: ICustomDataInput): void;
	    }
	    class FightEntityDispositionInformations extends EntityDispositionInformations implements INetworkType {
	        static ID: number;
	        carryingCharacterId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightEntityDispositionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightEntityDispositionInformations(param1: ICustomDataInput): void;
	    }
	    class GameContextActorInformations implements INetworkType {
	        static ID: number;
	        contextualId: number;
	        look: EntityLook;
	        disposition: EntityDispositionInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextActorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextActorInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayTaxCollectorInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        identification: TaxCollectorStaticInformations;
	        guildLevel: number;
	        taxCollectorAttack: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class IdentifiedEntityDispositionInformations extends EntityDispositionInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentifiedEntityDispositionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentifiedEntityDispositionInformations(param1: ICustomDataInput): void;
	    }
	    class MapCoordinates implements INetworkType {
	        static ID: number;
	        worldX: number;
	        worldY: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapCoordinates(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapCoordinates(param1: ICustomDataInput): void;
	    }
	    class MapCoordinatesAndId extends MapCoordinates implements INetworkType {
	        static ID: number;
	        mapId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapCoordinatesAndId(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapCoordinatesAndId(param1: ICustomDataInput): void;
	    }
	    class MapCoordinatesExtended extends MapCoordinatesAndId implements INetworkType {
	        static ID: number;
	        subAreaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapCoordinatesExtended(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapCoordinatesExtended(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorStaticExtendedInformations extends TaxCollectorStaticInformations implements INetworkType {
	        static ID: number;
	        allianceIdentity: AllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorStaticInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        guildIdentity: GuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorStaticInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorStaticInformations(param1: ICustomDataInput): void;
	    }
	    class AbstractFightTeamInformations implements INetworkType {
	        static ID: number;
	        teamId: number;
	        leaderId: number;
	        teamSide: number;
	        teamTypeId: number;
	        nbWaves: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractFightTeamInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractFightTeamInformations(param1: ICustomDataInput): void;
	    }
	    class FightAllianceTeamInformations extends FightTeamInformations implements INetworkType {
	        static ID: number;
	        relation: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightAllianceTeamInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightAllianceTeamInformations(param1: ICustomDataInput): void;
	    }
	    class FightCommonInformations implements INetworkType {
	        static ID: number;
	        fightId: number;
	        fightType: number;
	        fightTeams: FightTeamInformations[];
	        fightTeamsPositions: number[];
	        fightTeamsOptions: FightOptionsInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightCommonInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightCommonInformations(param1: ICustomDataInput): void;
	    }
	    class FightExternalInformations implements INetworkType {
	        static ID: number;
	        fightId: number;
	        fightType: number;
	        fightStart: number;
	        fightSpectatorLocked: boolean;
	        fightTeams: FightTeamLightInformations[];
	        fightTeamsOptions: FightOptionsInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightExternalInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightExternalInformations(param1: ICustomDataInput): void;
	    }
	    class FightLoot implements INetworkType {
	        static ID: number;
	        objects: number[];
	        kamas: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightLoot(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightLoot(param1: ICustomDataInput): void;
	    }
	    class FightOptionsInformations implements INetworkType {
	        static ID: number;
	        isSecret: boolean;
	        isRestrictedToPartyOnly: boolean;
	        isClosed: boolean;
	        isAskingForHelp: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightOptionsInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightOptionsInformations(param1: ICustomDataInput): void;
	    }
	    class FightResultAdditionalData implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultAdditionalData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultAdditionalData(param1: ICustomDataInput): void;
	    }
	    class FightResultExperienceData extends FightResultAdditionalData implements INetworkType {
	        static ID: number;
	        experience: number;
	        showExperience: boolean;
	        experienceLevelFloor: number;
	        showExperienceLevelFloor: boolean;
	        experienceNextLevelFloor: number;
	        showExperienceNextLevelFloor: boolean;
	        experienceFightDelta: number;
	        showExperienceFightDelta: boolean;
	        experienceForGuild: number;
	        showExperienceForGuild: boolean;
	        experienceForMount: number;
	        showExperienceForMount: boolean;
	        isIncarnationExperience: boolean;
	        rerollExperienceMul: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultExperienceData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultExperienceData(param1: ICustomDataInput): void;
	    }
	    class FightResultFighterListEntry extends FightResultListEntry implements INetworkType {
	        static ID: number;
	        id: number;
	        alive: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultFighterListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultFighterListEntry(param1: ICustomDataInput): void;
	    }
	    class FightResultListEntry implements INetworkType {
	        static ID: number;
	        outcome: number;
	        wave: number;
	        rewards: FightLoot;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultListEntry(param1: ICustomDataInput): void;
	    }
	    class FightResultMutantListEntry extends FightResultFighterListEntry implements INetworkType {
	        static ID: number;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultMutantListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultMutantListEntry(param1: ICustomDataInput): void;
	    }
	    class FightResultPlayerListEntry extends FightResultFighterListEntry implements INetworkType {
	        static ID: number;
	        level: number;
	        additional: FightResultAdditionalData[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultPlayerListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultPlayerListEntry(param1: ICustomDataInput): void;
	    }
	    class FightResultPvpData extends FightResultAdditionalData implements INetworkType {
	        static ID: number;
	        grade: number;
	        minHonorForGrade: number;
	        maxHonorForGrade: number;
	        honor: number;
	        honorDelta: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultPvpData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultPvpData(param1: ICustomDataInput): void;
	    }
	    class FightResultTaxCollectorListEntry extends FightResultFighterListEntry implements INetworkType {
	        static ID: number;
	        level: number;
	        guildInfo: BasicGuildInformations;
	        experienceForGuild: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataInput): void;
	    }
	    class FightTeamInformations extends AbstractFightTeamInformations implements INetworkType {
	        static ID: number;
	        teamMembers: FightTeamMemberInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamLightInformations extends AbstractFightTeamInformations implements INetworkType {
	        static ID: number;
	        teamMembersCount: number;
	        meanLevel: number;
	        hasFriend: boolean;
	        hasGuildMember: boolean;
	        hasAllianceMember: boolean;
	        hasGroupMember: boolean;
	        hasMyTaxCollector: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamLightInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberCharacterInformations extends FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        name: string;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberCompanionInformations extends FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        companionId: number;
	        level: number;
	        masterId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberCompanionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberCompanionInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberMonsterInformations extends FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        monsterId: number;
	        grade: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberMonsterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberMonsterInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberTaxCollectorInformations extends FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        level: number;
	        guildId: number;
	        uid: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberWithAllianceCharacterInformations extends FightTeamMemberCharacterInformations implements INetworkType {
	        static ID: number;
	        allianceInfos: BasicAllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightAIInformations extends GameFightFighterInformations implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightAIInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightAIInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightCharacterInformations extends GameFightFighterNamedInformations implements INetworkType {
	        static ID: number;
	        level: number;
	        alignmentInfos: ActorAlignmentInformations;
	        breed: number;
	        sex: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightCharacterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightCharacterInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightCompanionInformations extends GameFightFighterInformations implements INetworkType {
	        static ID: number;
	        companionGenericId: number;
	        level: number;
	        masterId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightCompanionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightCompanionInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterCompanionLightInformations extends GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        companionId: number;
	        masterId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterInformations extends GameContextActorInformations implements INetworkType {
	        static ID: number;
	        teamId: number;
	        wave: number;
	        alive: boolean;
	        stats: GameFightMinimalStats;
	        previousPositions: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        wave: number;
	        level: number;
	        breed: number;
	        sex: boolean;
	        alive: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterMonsterLightInformations extends GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        creatureGenericId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterMonsterLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterMonsterLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterNamedInformations extends GameFightFighterInformations implements INetworkType {
	        static ID: number;
	        name: string;
	        status: PlayerStatus;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterNamedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterNamedInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterNamedLightInformations extends GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        name: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterTaxCollectorLightInformations extends GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterTaxCollectorLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterTaxCollectorLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightMinimalStats implements INetworkType {
	        static ID: number;
	        lifePoints: number;
	        maxLifePoints: number;
	        baseMaxLifePoints: number;
	        permanentDamagePercent: number;
	        shieldPoints: number;
	        actionPoints: number;
	        maxActionPoints: number;
	        movementPoints: number;
	        maxMovementPoints: number;
	        summoner: number;
	        summoned: boolean;
	        neutralElementResistPercent: number;
	        earthElementResistPercent: number;
	        waterElementResistPercent: number;
	        airElementResistPercent: number;
	        fireElementResistPercent: number;
	        neutralElementReduction: number;
	        earthElementReduction: number;
	        waterElementReduction: number;
	        airElementReduction: number;
	        fireElementReduction: number;
	        criticalDamageFixedResist: number;
	        pushDamageFixedResist: number;
	        pvpNeutralElementResistPercent: number;
	        pvpEarthElementResistPercent: number;
	        pvpWaterElementResistPercent: number;
	        pvpAirElementResistPercent: number;
	        pvpFireElementResistPercent: number;
	        pvpNeutralElementReduction: number;
	        pvpEarthElementReduction: number;
	        pvpWaterElementReduction: number;
	        pvpAirElementReduction: number;
	        pvpFireElementReduction: number;
	        dodgePALostProbability: number;
	        dodgePMLostProbability: number;
	        tackleBlock: number;
	        tackleEvade: number;
	        invisibilityState: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMinimalStats(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMinimalStats(param1: ICustomDataInput): void;
	    }
	    class GameFightMinimalStatsPreparation extends GameFightMinimalStats implements INetworkType {
	        static ID: number;
	        initiative: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataInput): void;
	    }
	    class GameFightMonsterInformations extends GameFightAIInformations implements INetworkType {
	        static ID: number;
	        creatureGenericId: number;
	        creatureGrade: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMonsterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMonsterInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightMonsterWithAlignmentInformations extends GameFightMonsterInformations implements INetworkType {
	        static ID: number;
	        alignmentInfos: ActorAlignmentInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMonsterWithAlignmentInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMonsterWithAlignmentInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightMutantInformations extends GameFightFighterNamedInformations implements INetworkType {
	        static ID: number;
	        powerLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMutantInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMutantInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightResumeSlaveInfo implements INetworkType {
	        static ID: number;
	        slaveId: number;
	        spellCooldowns: GameFightSpellCooldown[];
	        summonCount: number;
	        bombCount: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightResumeSlaveInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightResumeSlaveInfo(param1: ICustomDataInput): void;
	    }
	    class GameFightSpellCooldown implements INetworkType {
	        static ID: number;
	        spellId: number;
	        cooldown: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightSpellCooldown(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightSpellCooldown(param1: ICustomDataInput): void;
	    }
	    class GameFightTaxCollectorInformations extends GameFightAIInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class AllianceInformations extends BasicNamedAllianceInformations implements INetworkType {
	        static ID: number;
	        allianceEmblem: GuildEmblem;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInformations(param1: ICustomDataInput): void;
	    }
	    class AlternativeMonstersInGroupLightInformations implements INetworkType {
	        static ID: number;
	        playerCount: number;
	        monsters: MonsterInGroupLightInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataInput): void;
	    }
	    class AtlasPointsInformations implements INetworkType {
	        static ID: number;
	        type: number;
	        coords: MapCoordinatesExtended[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AtlasPointsInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AtlasPointsInformations(param1: ICustomDataInput): void;
	    }
	    class BasicAllianceInformations extends AbstractSocialGroupInfos implements INetworkType {
	        static ID: number;
	        allianceId: number;
	        allianceTag: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicAllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicAllianceInformations(param1: ICustomDataInput): void;
	    }
	    class BasicGuildInformations extends AbstractSocialGroupInfos implements INetworkType {
	        static ID: number;
	        guildId: number;
	        guildName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicGuildInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicGuildInformations(param1: ICustomDataInput): void;
	    }
	    class BasicNamedAllianceInformations extends BasicAllianceInformations implements INetworkType {
	        static ID: number;
	        allianceName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicNamedAllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicNamedAllianceInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayActorInformations extends GameContextActorInformations implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayActorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayActorInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayCharacterInformations extends GameRolePlayHumanoidInformations implements INetworkType {
	        static ID: number;
	        alignmentInfos: ActorAlignmentInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayCharacterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayCharacterInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayGroupMonsterInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        staticInfos: GroupMonsterStaticInformations;
	        creationTime: number;
	        ageBonusRate: number;
	        lootShare: number;
	        alignmentSide: number;
	        keyRingBonus: boolean;
	        hasHardcoreDrop: boolean;
	        hasAVARewardToken: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayGroupMonsterWaveInformations extends GameRolePlayGroupMonsterInformations implements INetworkType {
	        static ID: number;
	        nbWaves: number;
	        alternatives: GroupMonsterStaticInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayHumanoidInformations extends GameRolePlayNamedActorInformations implements INetworkType {
	        static ID: number;
	        humanoidInfo: HumanInformations;
	        accountId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayMerchantInformations extends GameRolePlayNamedActorInformations implements INetworkType {
	        static ID: number;
	        sellType: number;
	        options: HumanOption[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayMerchantInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayMerchantInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayMountInformations extends GameRolePlayNamedActorInformations implements INetworkType {
	        static ID: number;
	        ownerName: string;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayMountInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayMountInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayMutantInformations extends GameRolePlayHumanoidInformations implements INetworkType {
	        static ID: number;
	        monsterId: number;
	        powerLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayMutantInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayMutantInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayNamedActorInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        name: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayNpcInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        npcId: number;
	        sex: boolean;
	        specialArtworkId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayNpcInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayNpcInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayNpcWithQuestInformations extends GameRolePlayNpcInformations implements INetworkType {
	        static ID: number;
	        questFlag: GameRolePlayNpcQuestFlag;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayPortalInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        portal: PortalInformation;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayPortalInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayPortalInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayPrismInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        prism: PrismInformation;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayPrismInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayPrismInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayTreasureHintInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        npcId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataInput): void;
	    }
	    class GroupMonsterStaticInformations implements INetworkType {
	        static ID: number;
	        mainCreatureLightInfos: MonsterInGroupLightInformations;
	        underlings: MonsterInGroupInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GroupMonsterStaticInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GroupMonsterStaticInformations(param1: ICustomDataInput): void;
	    }
	    class GroupMonsterStaticInformationsWithAlternatives extends GroupMonsterStaticInformations implements INetworkType {
	        static ID: number;
	        alternatives: AlternativeMonstersInGroupLightInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataInput): void;
	    }
	    class GuildInAllianceInformations extends GuildInformations implements INetworkType {
	        static ID: number;
	        guildLevel: number;
	        nbMembers: number;
	        enabled: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInAllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInAllianceInformations(param1: ICustomDataInput): void;
	    }
	    class GuildInformations extends BasicGuildInformations implements INetworkType {
	        static ID: number;
	        guildEmblem: GuildEmblem;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInformations(param1: ICustomDataInput): void;
	    }
	    class HumanInformations implements INetworkType {
	        static ID: number;
	        restrictions: ActorRestrictionsInformations;
	        sex: boolean;
	        options: HumanOption[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanInformations(param1: ICustomDataInput): void;
	    }
	    class HumanOption implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOption(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOption(param1: ICustomDataInput): void;
	    }
	    class HumanOptionAlliance extends HumanOption implements INetworkType {
	        static ID: number;
	        allianceInformations: AllianceInformations;
	        aggressable: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionAlliance(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionAlliance(param1: ICustomDataInput): void;
	    }
	    class HumanOptionEmote extends HumanOption implements INetworkType {
	        static ID: number;
	        emoteId: number;
	        emoteStartTime: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionEmote(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionEmote(param1: ICustomDataInput): void;
	    }
	    class HumanOptionFollowers extends HumanOption implements INetworkType {
	        static ID: number;
	        followingCharactersLook: IndexedEntityLook[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionFollowers(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionFollowers(param1: ICustomDataInput): void;
	    }
	    class HumanOptionGuild extends HumanOption implements INetworkType {
	        static ID: number;
	        guildInformations: GuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionGuild(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionGuild(param1: ICustomDataInput): void;
	    }
	    class HumanOptionObjectUse extends HumanOption implements INetworkType {
	        static ID: number;
	        delayTypeId: number;
	        delayEndTime: number;
	        objectGID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionObjectUse(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionObjectUse(param1: ICustomDataInput): void;
	    }
	    class HumanOptionOrnament extends HumanOption implements INetworkType {
	        static ID: number;
	        ornamentId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionOrnament(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionOrnament(param1: ICustomDataInput): void;
	    }
	    class HumanOptionTitle extends HumanOption implements INetworkType {
	        static ID: number;
	        titleId: number;
	        titleParam: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionTitle(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionTitle(param1: ICustomDataInput): void;
	    }
	    class MonsterInGroupInformations extends MonsterInGroupLightInformations implements INetworkType {
	        static ID: number;
	        look: EntityLook;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MonsterInGroupInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MonsterInGroupInformations(param1: ICustomDataInput): void;
	    }
	    class MonsterInGroupLightInformations implements INetworkType {
	        static ID: number;
	        creatureGenericId: number;
	        grade: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MonsterInGroupLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MonsterInGroupLightInformations(param1: ICustomDataInput): void;
	    }
	    class ObjectItemInRolePlay implements INetworkType {
	        static ID: number;
	        cellId: number;
	        objectGID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemInRolePlay(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemInRolePlay(param1: ICustomDataInput): void;
	    }
	    class DecraftedItemStackInfo implements INetworkType {
	        static ID: number;
	        objectUID: number;
	        bonusMin: number;
	        bonusMax: number;
	        runesId: number[];
	        runesQty: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DecraftedItemStackInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DecraftedItemStackInfo(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryEntryJobInfo implements INetworkType {
	        static ID: number;
	        jobId: number;
	        jobLevel: number;
	        free: boolean;
	        minLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryEntryPlayerInfo implements INetworkType {
	        static ID: number;
	        playerId: number;
	        playerName: string;
	        alignmentSide: number;
	        breed: number;
	        sex: boolean;
	        isInWorkshop: boolean;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        status: PlayerStatus;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryListEntry implements INetworkType {
	        static ID: number;
	        playerInfo: JobCrafterDirectoryEntryPlayerInfo;
	        jobInfo: JobCrafterDirectoryEntryJobInfo;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectorySettings implements INetworkType {
	        static ID: number;
	        jobId: number;
	        minLevel: number;
	        free: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectorySettings(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectorySettings(param1: ICustomDataInput): void;
	    }
	    class JobDescription implements INetworkType {
	        static ID: number;
	        jobId: number;
	        skills: SkillActionDescription[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobDescription(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobDescription(param1: ICustomDataInput): void;
	    }
	    class JobExperience implements INetworkType {
	        static ID: number;
	        jobId: number;
	        jobLevel: number;
	        jobXP: number;
	        jobXpLevelFloor: number;
	        jobXpNextLevelFloor: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobExperience(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobExperience(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderPlayer implements INetworkType {
	        static ID: number;
	        playerId: number;
	        playerName: string;
	        breed: number;
	        sex: boolean;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderPlayer(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderPlayer(param1: ICustomDataInput): void;
	    }
	    class NamedPartyTeam implements INetworkType {
	        static ID: number;
	        teamId: number;
	        partyName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NamedPartyTeam(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NamedPartyTeam(param1: ICustomDataInput): void;
	    }
	    class NamedPartyTeamWithOutcome implements INetworkType {
	        static ID: number;
	        team: NamedPartyTeam;
	        outcome: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataInput): void;
	    }
	    class PartyGuestInformations implements INetworkType {
	        static ID: number;
	        guestId: number;
	        hostId: number;
	        name: string;
	        guestLook: EntityLook;
	        breed: number;
	        sex: boolean;
	        status: PlayerStatus;
	        companions: PartyCompanionBaseInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyGuestInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyGuestInformations(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationMemberInformations extends CharacterBaseInformations implements INetworkType {
	        static ID: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        companions: PartyCompanionBaseInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationMemberInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationMemberInformations(param1: ICustomDataInput): void;
	    }
	    class PartyMemberArenaInformations extends PartyMemberInformations implements INetworkType {
	        static ID: number;
	        rank: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyMemberArenaInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyMemberArenaInformations(param1: ICustomDataInput): void;
	    }
	    class PartyMemberGeoPosition implements INetworkType {
	        static ID: number;
	        memberId: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyMemberGeoPosition(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyMemberGeoPosition(param1: ICustomDataInput): void;
	    }
	    class PartyMemberInformations extends CharacterBaseInformations implements INetworkType {
	        static ID: number;
	        lifePoints: number;
	        maxLifePoints: number;
	        prospecting: number;
	        regenRate: number;
	        initiative: number;
	        alignmentSide: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        status: PlayerStatus;
	        companions: PartyCompanionMemberInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyMemberInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyMemberInformations(param1: ICustomDataInput): void;
	    }
	    class PartyCompanionBaseInformations implements INetworkType {
	        static ID: number;
	        indexId: number;
	        companionGenericId: number;
	        entityLook: EntityLook;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyCompanionBaseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyCompanionBaseInformations(param1: ICustomDataInput): void;
	    }
	    class PartyCompanionMemberInformations extends PartyCompanionBaseInformations implements INetworkType {
	        static ID: number;
	        initiative: number;
	        lifePoints: number;
	        maxLifePoints: number;
	        prospecting: number;
	        regenRate: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyCompanionMemberInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyCompanionMemberInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayNpcQuestFlag implements INetworkType {
	        static ID: number;
	        questsToValidId: number[];
	        questsToStartId: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataInput): void;
	    }
	    class QuestActiveDetailedInformations extends QuestActiveInformations implements INetworkType {
	        static ID: number;
	        stepId: number;
	        objectives: QuestObjectiveInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestActiveDetailedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestActiveDetailedInformations(param1: ICustomDataInput): void;
	    }
	    class QuestActiveInformations implements INetworkType {
	        static ID: number;
	        questId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestActiveInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestActiveInformations(param1: ICustomDataInput): void;
	    }
	    class QuestObjectiveInformations implements INetworkType {
	        static ID: number;
	        objectiveId: number;
	        objectiveStatus: boolean;
	        dialogParams: string[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestObjectiveInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestObjectiveInformations(param1: ICustomDataInput): void;
	    }
	    class QuestObjectiveInformationsWithCompletion extends QuestObjectiveInformations implements INetworkType {
	        static ID: number;
	        curCompletion: number;
	        maxCompletion: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataInput): void;
	    }
	    class PortalInformation implements INetworkType {
	        static ID: number;
	        portalId: number;
	        areaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PortalInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PortalInformation(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntFlag implements INetworkType {
	        static ID: number;
	        mapId: number;
	        state: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntFlag(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntFlag(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStep implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStep(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStep(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepDig extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepDig(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepDig(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepFight extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepFight(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepFight(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepFollowDirection extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        direction: number;
	        mapCount: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepFollowDirectionToHint extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        direction: number;
	        npcId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepFollowDirectionToPOI extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        direction: number;
	        poiLabelId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataInput): void;
	    }
	    class BidExchangerObjectInfo implements INetworkType {
	        static ID: number;
	        objectUID: number;
	        effects: ObjectEffect[];
	        prices: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BidExchangerObjectInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BidExchangerObjectInfo(param1: ICustomDataInput): void;
	    }
	    class GoldItem extends Item implements INetworkType {
	        static ID: number;
	        sum: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GoldItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GoldItem(param1: ICustomDataInput): void;
	    }
	    class Item implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Item(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Item(param1: ICustomDataInput): void;
	    }
	    class ObjectItem extends Item implements INetworkType {
	        static ID: number;
	        position: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItem(param1: ICustomDataInput): void;
	    }
	    class ObjectItemGenericQuantity extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemGenericQuantity(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemGenericQuantity(param1: ICustomDataInput): void;
	    }
	    class ObjectItemInformationWithQuantity extends ObjectItemMinimalInformation implements INetworkType {
	        static ID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemInformationWithQuantity(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemInformationWithQuantity(param1: ICustomDataInput): void;
	    }
	    class ObjectItemMinimalInformation extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemMinimalInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemMinimalInformation(param1: ICustomDataInput): void;
	    }
	    class ObjectItemNotInContainer extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemNotInContainer(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemNotInContainer(param1: ICustomDataInput): void;
	    }
	    class ObjectItemQuantity extends Item implements INetworkType {
	        static ID: number;
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemQuantity(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemQuantity(param1: ICustomDataInput): void;
	    }
	    class ObjectItemToSell extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        objectUID: number;
	        quantity: number;
	        objectPrice: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemToSell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemToSell(param1: ICustomDataInput): void;
	    }
	    class ObjectItemToSellInBid extends ObjectItemToSell implements INetworkType {
	        static ID: number;
	        unsoldDelay: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemToSellInBid(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemToSellInBid(param1: ICustomDataInput): void;
	    }
	    class ObjectItemToSellInHumanVendorShop extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        objectUID: number;
	        quantity: number;
	        objectPrice: number;
	        publicPrice: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemToSellInHumanVendorShop(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemToSellInHumanVendorShop(param1: ICustomDataInput): void;
	    }
	    class ObjectItemToSellInNpcShop extends ObjectItemMinimalInformation implements INetworkType {
	        static ID: number;
	        objectPrice: number;
	        buyCriterion: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataInput): void;
	    }
	    class SellerBuyerDescriptor implements INetworkType {
	        static ID: number;
	        quantities: number[];
	        types: number[];
	        taxPercentage: number;
	        taxModificationPercentage: number;
	        maxItemLevel: number;
	        maxItemPerAccount: number;
	        npcContextualId: number;
	        unsoldDelay: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SellerBuyerDescriptor(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SellerBuyerDescriptor(param1: ICustomDataInput): void;
	    }
	    class SpellItem extends Item implements INetworkType {
	        static ID: number;
	        position: number;
	        spellId: number;
	        spellLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpellItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpellItem(param1: ICustomDataInput): void;
	    }
	    class ObjectEffect implements INetworkType {
	        static ID: number;
	        actionId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffect(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectCreature extends ObjectEffect implements INetworkType {
	        static ID: number;
	        monsterFamilyId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectCreature(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectCreature(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectDate extends ObjectEffect implements INetworkType {
	        static ID: number;
	        year: number;
	        month: number;
	        day: number;
	        hour: number;
	        minute: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectDate(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectDate(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectDice extends ObjectEffect implements INetworkType {
	        static ID: number;
	        diceNum: number;
	        diceSide: number;
	        diceConst: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectDice(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectDice(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectDuration extends ObjectEffect implements INetworkType {
	        static ID: number;
	        days: number;
	        hours: number;
	        minutes: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectDuration(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectDuration(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectInteger extends ObjectEffect implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectInteger(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectInteger(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectLadder extends ObjectEffectCreature implements INetworkType {
	        static ID: number;
	        monsterCount: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectLadder(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectLadder(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectMinMax extends ObjectEffect implements INetworkType {
	        static ID: number;
	        min: number;
	        max: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectMinMax(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectMinMax(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectMount extends ObjectEffect implements INetworkType {
	        static ID: number;
	        mountId: number;
	        date: number;
	        modelId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectMount(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectMount(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectString extends ObjectEffect implements INetworkType {
	        static ID: number;
	        value: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectString(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectString(param1: ICustomDataInput): void;
	    }
	    class ProtectedEntityWaitingForHelpInfo implements INetworkType {
	        static ID: number;
	        timeLeftBeforeFight: number;
	        waitTimeForPlacement: number;
	        nbPositionForDefensors: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataInput): void;
	    }
	    class AbstractContactInformations implements INetworkType {
	        static ID: number;
	        accountId: number;
	        accountName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractContactInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractContactInformations(param1: ICustomDataInput): void;
	    }
	    class FriendInformations extends AbstractContactInformations implements INetworkType {
	        static ID: number;
	        playerState: number;
	        lastConnection: number;
	        achievementPoints: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendInformations(param1: ICustomDataInput): void;
	    }
	    class FriendOnlineInformations extends FriendInformations implements INetworkType {
	        static ID: number;
	        playerId: number;
	        playerName: string;
	        level: number;
	        alignmentSide: number;
	        breed: number;
	        sex: boolean;
	        guildInfo: BasicGuildInformations;
	        moodSmileyId: number;
	        status: PlayerStatus;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendOnlineInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendOnlineInformations(param1: ICustomDataInput): void;
	    }
	    class FriendSpouseInformations implements INetworkType {
	        static ID: number;
	        spouseAccountId: number;
	        spouseId: number;
	        spouseName: string;
	        spouseLevel: number;
	        breed: number;
	        sex: number;
	        spouseEntityLook: EntityLook;
	        guildInfo: BasicGuildInformations;
	        alignmentSide: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendSpouseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendSpouseInformations(param1: ICustomDataInput): void;
	    }
	    class FriendSpouseOnlineInformations extends FriendSpouseInformations implements INetworkType {
	        static ID: number;
	        mapId: number;
	        subAreaId: number;
	        inFight: boolean;
	        followSpouse: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendSpouseOnlineInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendSpouseOnlineInformations(param1: ICustomDataInput): void;
	    }
	    class IgnoredInformations extends AbstractContactInformations implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredInformations(param1: ICustomDataInput): void;
	    }
	    class IgnoredOnlineInformations extends IgnoredInformations implements INetworkType {
	        static ID: number;
	        playerId: number;
	        playerName: string;
	        breed: number;
	        sex: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredOnlineInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredOnlineInformations(param1: ICustomDataInput): void;
	    }
	    class GuildEmblem implements INetworkType {
	        static ID: number;
	        symbolShape: number;
	        symbolColor: number;
	        backgroundShape: number;
	        backgroundColor: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildEmblem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildEmblem(param1: ICustomDataInput): void;
	    }
	    class GuildMember extends CharacterMinimalInformations implements INetworkType {
	        static ID: number;
	        breed: number;
	        sex: boolean;
	        rank: number;
	        givenExperience: number;
	        experienceGivenPercent: number;
	        rights: number;
	        connected: number;
	        alignmentSide: number;
	        hoursSinceLastConnection: number;
	        moodSmileyId: number;
	        accountId: number;
	        achievementPoints: number;
	        status: PlayerStatus;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildMember(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildMember(param1: ICustomDataInput): void;
	    }
	    class AdditionalTaxCollectorInformations implements INetworkType {
	        static ID: number;
	        collectorCallerName: string;
	        date: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorBasicInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorBasicInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorBasicInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorComplementaryInformations implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorComplementaryInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorComplementaryInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorFightersInformation implements INetworkType {
	        static ID: number;
	        collectorId: number;
	        allyCharactersInformations: CharacterMinimalPlusLookInformations[];
	        enemyCharactersInformations: CharacterMinimalPlusLookInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorFightersInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorFightersInformation(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorGuildInformations extends TaxCollectorComplementaryInformations implements INetworkType {
	        static ID: number;
	        guild: BasicGuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorGuildInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorGuildInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorInformations implements INetworkType {
	        static ID: number;
	        uniqueId: number;
	        firtNameId: number;
	        lastNameId: number;
	        additionalInfos: AdditionalTaxCollectorInformations;
	        worldX: number;
	        worldY: number;
	        subAreaId: number;
	        state: number;
	        look: EntityLook;
	        complements: TaxCollectorComplementaryInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorLootInformations extends TaxCollectorComplementaryInformations implements INetworkType {
	        static ID: number;
	        kamas: number;
	        experience: number;
	        pods: number;
	        itemsValue: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorLootInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorLootInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorWaitingForHelpInformations extends TaxCollectorComplementaryInformations implements INetworkType {
	        static ID: number;
	        waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataInput): void;
	    }
	    class AccountHouseInformations implements INetworkType {
	        static ID: number;
	        houseId: number;
	        modelId: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccountHouseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccountHouseInformations(param1: ICustomDataInput): void;
	    }
	    class HouseInformations implements INetworkType {
	        static ID: number;
	        houseId: number;
	        doorsOnMap: number[];
	        ownerName: string;
	        isOnSale: boolean;
	        isSaleLocked: boolean;
	        modelId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformations(param1: ICustomDataInput): void;
	    }
	    class HouseInformationsExtended extends HouseInformations implements INetworkType {
	        static ID: number;
	        guildInfo: GuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformationsExtended(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformationsExtended(param1: ICustomDataInput): void;
	    }
	    class HouseInformationsForGuild implements INetworkType {
	        static ID: number;
	        houseId: number;
	        modelId: number;
	        ownerName: string;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        skillListIds: number[];
	        guildshareParams: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformationsForGuild(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformationsForGuild(param1: ICustomDataInput): void;
	    }
	    class HouseInformationsForSell implements INetworkType {
	        static ID: number;
	        modelId: number;
	        ownerName: string;
	        ownerConnected: boolean;
	        worldX: number;
	        worldY: number;
	        subAreaId: number;
	        nbRoom: number;
	        nbChest: number;
	        skillListIds: number[];
	        isLocked: boolean;
	        price: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformationsForSell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformationsForSell(param1: ICustomDataInput): void;
	    }
	    class HouseInformationsInside implements INetworkType {
	        static ID: number;
	        houseId: number;
	        modelId: number;
	        ownerId: number;
	        ownerName: string;
	        worldX: number;
	        worldY: number;
	        price: number;
	        isLocked: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformationsInside(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformationsInside(param1: ICustomDataInput): void;
	    }
	    class Idol implements INetworkType {
	        static ID: number;
	        id: number;
	        xpBonusPercent: number;
	        dropBonusPercent: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Idol(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Idol(param1: ICustomDataInput): void;
	    }
	    class PartyIdol extends Idol implements INetworkType {
	        static ID: number;
	        ownersIds: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyIdol(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyIdol(param1: ICustomDataInput): void;
	    }
	    class InteractiveElement implements INetworkType {
	        static ID: number;
	        elementId: number;
	        elementTypeId: number;
	        enabledSkills: InteractiveElementSkill[];
	        disabledSkills: InteractiveElementSkill[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveElement(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveElement(param1: ICustomDataInput): void;
	    }
	    class InteractiveElementNamedSkill extends InteractiveElementSkill implements INetworkType {
	        static ID: number;
	        nameId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveElementNamedSkill(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveElementNamedSkill(param1: ICustomDataInput): void;
	    }
	    class InteractiveElementSkill implements INetworkType {
	        static ID: number;
	        skillId: number;
	        skillInstanceUid: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveElementSkill(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveElementSkill(param1: ICustomDataInput): void;
	    }
	    class InteractiveElementWithAgeBonus extends InteractiveElement implements INetworkType {
	        static ID: number;
	        ageBonus: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveElementWithAgeBonus(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveElementWithAgeBonus(param1: ICustomDataInput): void;
	    }
	    class MapObstacle implements INetworkType {
	        static ID: number;
	        obstacleCellId: number;
	        state: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapObstacle(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapObstacle(param1: ICustomDataInput): void;
	    }
	    class StatedElement implements INetworkType {
	        static ID: number;
	        elementId: number;
	        elementCellId: number;
	        elementState: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatedElement(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatedElement(param1: ICustomDataInput): void;
	    }
	    class SkillActionDescription implements INetworkType {
	        static ID: number;
	        skillId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SkillActionDescription(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SkillActionDescription(param1: ICustomDataInput): void;
	    }
	    class SkillActionDescriptionCollect extends SkillActionDescriptionTimed implements INetworkType {
	        static ID: number;
	        min: number;
	        max: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SkillActionDescriptionCollect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SkillActionDescriptionCollect(param1: ICustomDataInput): void;
	    }
	    class SkillActionDescriptionCraft extends SkillActionDescription implements INetworkType {
	        static ID: number;
	        probability: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SkillActionDescriptionCraft(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SkillActionDescriptionCraft(param1: ICustomDataInput): void;
	    }
	    class SkillActionDescriptionTimed extends SkillActionDescription implements INetworkType {
	        static ID: number;
	        time: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SkillActionDescriptionTimed(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SkillActionDescriptionTimed(param1: ICustomDataInput): void;
	    }
	    class IdolsPreset implements INetworkType {
	        static ID: number;
	        presetId: number;
	        symbolId: number;
	        idolId: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolsPreset(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolsPreset(param1: ICustomDataInput): void;
	    }
	    class Preset implements INetworkType {
	        static ID: number;
	        presetId: number;
	        symbolId: number;
	        mount: boolean;
	        objects: PresetItem[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Preset(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Preset(param1: ICustomDataInput): void;
	    }
	    class PresetItem implements INetworkType {
	        static ID: number;
	        position: number;
	        objGid: number;
	        objUid: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PresetItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PresetItem(param1: ICustomDataInput): void;
	    }
	    class EntityLook implements INetworkType {
	        static ID: number;
	        bonesId: number;
	        skins: number[];
	        indexedColors: number[];
	        scales: number[];
	        subentities: SubEntity[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EntityLook(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EntityLook(param1: ICustomDataInput): void;
	    }
	    class IndexedEntityLook implements INetworkType {
	        static ID: number;
	        look: EntityLook;
	        index: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IndexedEntityLook(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IndexedEntityLook(param1: ICustomDataInput): void;
	    }
	    class SubEntity implements INetworkType {
	        static ID: number;
	        bindingPointCategory: number;
	        bindingPointIndex: number;
	        subEntityLook: EntityLook;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SubEntity(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SubEntity(param1: ICustomDataInput): void;
	    }
	    class ItemDurability implements INetworkType {
	        static ID: number;
	        durability: number;
	        durabilityMax: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ItemDurability(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ItemDurability(param1: ICustomDataInput): void;
	    }
	    class MountClientData implements INetworkType {
	        static ID: number;
	        id: number;
	        model: number;
	        ancestor: number[];
	        behaviors: number[];
	        name: string;
	        sex: boolean;
	        ownerId: number;
	        experience: number;
	        experienceForLevel: number;
	        experienceForNextLevel: number;
	        level: number;
	        isRideable: boolean;
	        maxPods: number;
	        isWild: boolean;
	        stamina: number;
	        staminaMax: number;
	        maturity: number;
	        maturityForAdult: number;
	        energy: number;
	        energyMax: number;
	        serenity: number;
	        aggressivityMax: number;
	        serenityMax: number;
	        love: number;
	        loveMax: number;
	        fecondationTime: number;
	        isFecondationReady: boolean;
	        boostLimiter: number;
	        boostMax: number;
	        reproductionCount: number;
	        reproductionCountMax: number;
	        effectList: ObjectEffectInteger[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountClientData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountClientData(param1: ICustomDataInput): void;
	    }
	    class UpdateMountBoost implements INetworkType {
	        static ID: number;
	        type: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_UpdateMountBoost(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_UpdateMountBoost(param1: ICustomDataInput): void;
	    }
	    class UpdateMountIntBoost extends UpdateMountBoost implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_UpdateMountIntBoost(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_UpdateMountIntBoost(param1: ICustomDataInput): void;
	    }
	    class MountInformationsForPaddock implements INetworkType {
	        static ID: number;
	        modelId: number;
	        name: string;
	        ownerName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountInformationsForPaddock(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountInformationsForPaddock(param1: ICustomDataInput): void;
	    }
	    class PaddockAbandonnedInformations extends PaddockBuyableInformations implements INetworkType {
	        static ID: number;
	        guildId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockAbandonnedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockAbandonnedInformations(param1: ICustomDataInput): void;
	    }
	    class PaddockBuyableInformations extends PaddockInformations implements INetworkType {
	        static ID: number;
	        price: number;
	        locked: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockBuyableInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockBuyableInformations(param1: ICustomDataInput): void;
	    }
	    class PaddockContentInformations extends PaddockInformations implements INetworkType {
	        static ID: number;
	        paddockId: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        abandonned: boolean;
	        mountsInformations: MountInformationsForPaddock[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockContentInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockContentInformations(param1: ICustomDataInput): void;
	    }
	    class PaddockInformations implements INetworkType {
	        static ID: number;
	        maxOutdoorMount: number;
	        maxItems: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockInformations(param1: ICustomDataInput): void;
	    }
	    class PaddockInformationsForSell implements INetworkType {
	        static ID: number;
	        guildOwner: string;
	        worldX: number;
	        worldY: number;
	        subAreaId: number;
	        nbMount: number;
	        nbObject: number;
	        price: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockInformationsForSell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockInformationsForSell(param1: ICustomDataInput): void;
	    }
	    class PaddockItem extends ObjectItemInRolePlay implements INetworkType {
	        static ID: number;
	        durability: ItemDurability;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockItem(param1: ICustomDataInput): void;
	    }
	    class PaddockPrivateInformations extends PaddockAbandonnedInformations implements INetworkType {
	        static ID: number;
	        guildInfo: GuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockPrivateInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockPrivateInformations(param1: ICustomDataInput): void;
	    }
	    class AllianceInsiderPrismInformation extends PrismInformation implements INetworkType {
	        static ID: number;
	        lastTimeSlotModificationDate: number;
	        lastTimeSlotModificationAuthorGuildId: number;
	        lastTimeSlotModificationAuthorId: number;
	        lastTimeSlotModificationAuthorName: string;
	        modulesObjects: ObjectItem[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInsiderPrismInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInsiderPrismInformation(param1: ICustomDataInput): void;
	    }
	    class AlliancePrismInformation extends PrismInformation implements INetworkType {
	        static ID: number;
	        alliance: AllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlliancePrismInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlliancePrismInformation(param1: ICustomDataInput): void;
	    }
	    class PrismFightersInformation implements INetworkType {
	        static ID: number;
	        subAreaId: number;
	        waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;
	        allyCharactersInformations: CharacterMinimalPlusLookInformations[];
	        enemyCharactersInformations: CharacterMinimalPlusLookInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightersInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightersInformation(param1: ICustomDataInput): void;
	    }
	    class PrismGeolocalizedInformation extends PrismSubareaEmptyInfo implements INetworkType {
	        static ID: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        prism: PrismInformation;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismGeolocalizedInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismGeolocalizedInformation(param1: ICustomDataInput): void;
	    }
	    class PrismInformation implements INetworkType {
	        static ID: number;
	        typeId: number;
	        state: number;
	        nextVulnerabilityDate: number;
	        placementDate: number;
	        rewardTokenCount: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismInformation(param1: ICustomDataInput): void;
	    }
	    class PrismSubareaEmptyInfo implements INetworkType {
	        static ID: number;
	        subAreaId: number;
	        allianceId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismSubareaEmptyInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismSubareaEmptyInfo(param1: ICustomDataInput): void;
	    }
	    class Shortcut implements INetworkType {
	        static ID: number;
	        slot: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Shortcut(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Shortcut(param1: ICustomDataInput): void;
	    }
	    class ShortcutEmote extends Shortcut implements INetworkType {
	        static ID: number;
	        emoteId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutEmote(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutEmote(param1: ICustomDataInput): void;
	    }
	    class ShortcutObject extends Shortcut implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutObject(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutObject(param1: ICustomDataInput): void;
	    }
	    class ShortcutObjectIdolsPreset extends ShortcutObject implements INetworkType {
	        static ID: number;
	        presetId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutObjectIdolsPreset(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutObjectIdolsPreset(param1: ICustomDataInput): void;
	    }
	    class ShortcutObjectItem extends ShortcutObject implements INetworkType {
	        static ID: number;
	        itemUID: number;
	        itemGID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutObjectItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutObjectItem(param1: ICustomDataInput): void;
	    }
	    class ShortcutObjectPreset extends ShortcutObject implements INetworkType {
	        static ID: number;
	        presetId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutObjectPreset(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutObjectPreset(param1: ICustomDataInput): void;
	    }
	    class ShortcutSmiley extends Shortcut implements INetworkType {
	        static ID: number;
	        smileyId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutSmiley(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutSmiley(param1: ICustomDataInput): void;
	    }
	    class ShortcutSpell extends Shortcut implements INetworkType {
	        static ID: number;
	        spellId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutSpell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutSpell(param1: ICustomDataInput): void;
	    }
	    class AbstractSocialGroupInfos implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractSocialGroupInfos(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractSocialGroupInfos(param1: ICustomDataInput): void;
	    }
	    class AllianceFactSheetInformations extends AllianceInformations implements INetworkType {
	        static ID: number;
	        creationDate: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceFactSheetInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceFactSheetInformations(param1: ICustomDataInput): void;
	    }
	    class AllianceVersatileInformations implements INetworkType {
	        static ID: number;
	        allianceId: number;
	        nbGuilds: number;
	        nbMembers: number;
	        nbSubarea: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceVersatileInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceVersatileInformations(param1: ICustomDataInput): void;
	    }
	    class AlliancedGuildFactSheetInformations extends GuildInformations implements INetworkType {
	        static ID: number;
	        allianceInfos: BasicNamedAllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataInput): void;
	    }
	    class GuildFactSheetInformations extends GuildInformations implements INetworkType {
	        static ID: number;
	        leaderId: number;
	        guildLevel: number;
	        nbMembers: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFactSheetInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFactSheetInformations(param1: ICustomDataInput): void;
	    }
	    class GuildInAllianceVersatileInformations extends GuildVersatileInformations implements INetworkType {
	        static ID: number;
	        allianceId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataInput): void;
	    }
	    class GuildInsiderFactSheetInformations extends GuildFactSheetInformations implements INetworkType {
	        static ID: number;
	        leaderName: string;
	        nbConnectedMembers: number;
	        nbTaxCollectors: number;
	        lastActivity: number;
	        enabled: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataInput): void;
	    }
	    class GuildVersatileInformations implements INetworkType {
	        static ID: number;
	        guildId: number;
	        leaderId: number;
	        guildLevel: number;
	        nbMembers: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildVersatileInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildVersatileInformations(param1: ICustomDataInput): void;
	    }
	    class StartupActionAddObject implements INetworkType {
	        static ID: number;
	        uid: number;
	        title: string;
	        text: string;
	        descUrl: string;
	        pictureUrl: string;
	        items: ObjectItemInformationWithQuantity[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StartupActionAddObject(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StartupActionAddObject(param1: ICustomDataInput): void;
	    }
	    class TrustCertificate implements INetworkType {
	        static ID: number;
	        id: number;
	        hash: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TrustCertificate(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TrustCertificate(param1: ICustomDataInput): void;
	    }
	    class ContentPart implements INetworkType {
	        static ID: number;
	        id: string;
	        state: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ContentPart(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ContentPart(param1: ICustomDataInput): void;
	    }
	    class Version implements INetworkType {
	        static ID: number;
	        major: number;
	        minor: number;
	        release: number;
	        revision: number;
	        patch: number;
	        buildType: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Version(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Version(param1: ICustomDataInput): void;
	    }
	    class VersionExtended extends Version implements INetworkType {
	        static ID: number;
	        install: number;
	        technology: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_VersionExtended(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_VersionExtended(param1: ICustomDataInput): void;
	    }
	    class KrosmasterFigure implements INetworkType {
	        static ID: number;
	        uid: string;
	        figure: number;
	        pedestal: number;
	        bound: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterFigure(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterFigure(param1: ICustomDataInput): void;
	    }
	    class MessageReceiver {
	        private static _list;
	        constructor();
	        static parse(param1: ICustomDataInput, param2: number, param3: number): INetworkMessage;
	    }
	    class ProtocolTypeManager {
	        private static _list;
	        constructor();
	        static getInstance(networkType: any, param2: number): INetworkType;
	    }
	    class Binary64 {
	        low: number;
	        high: number;
	        constructor(low?: number, high?: number);
	        div(n: number): number;
	        mul(n: number): void;
	        add(n: number): void;
	        bitwiseNot(n: number): void;
	    }
	    class BooleanByteWrapper {
	        static setFlag(param1?: number, param2?: number, param3?: boolean): number;
	        static getFlag(param1: number, param2: number): boolean;
	    }
	    interface ICustomDataOutput {
	        writeVarInt(param1: number): void;
	        writeVarShort(param1: number): void;
	        writeVarLong(param1: number): void;
	        writeBytes(param1: ByteArray, param2?: number, param3?: number): void;
	        writeBoolean(param1: boolean): void;
	        writeByte(param1: number): void;
	        writeShort(param1: number): void;
	        writeInt(param1: number): void;
	        writeUnsignedInt(param1: number): void;
	        writeFloat(param1: number): void;
	        writeDouble(param1: number): void;
	        writeMultiByte(param1: string, param2: string): void;
	        writeUTF(param1: string): void;
	        writeUTFBytes(param1: string): void;
	        writeObject(param1: any): void;
	    }
	    interface ICustomDataInput {
	        readVarInt(): number;
	        readVarUhInt(): number;
	        readVarShort(): number;
	        readVarUhShort(): number;
	        readVarLong(): number;
	        readVarUhLong(): number;
	        readBytes(param1: ByteArray, param2?: number, param3?: number): void;
	        readBoolean(): boolean;
	        readByte(): number;
	        readUnsignedByte(): number;
	        readShort(): number;
	        readUnsignedShort(): number;
	        readInt(): number;
	        readUnsignedInt(): number;
	        readFloat(): number;
	        readDouble(): number;
	        readMultiByte(param1: number, param2: string): string;
	        readUTF(): string;
	        readUTFBytes(param1: number): string;
	        bytesAvailable: number;
	        readObject(): any;
	    }
	    class CustomDataWrapper implements ICustomDataOutput, ICustomDataInput {
	        private static INT_SIZE;
	        private static SHORT_SIZE;
	        private static SHORT_MIN_VALUE;
	        private static SHORT_MAX_VALUE;
	        private static UNSIGNED_SHORT_MAX_VALUE;
	        private static CHUNCK_BIT_SIZE;
	        private static MAX_ENCODING_LENGTH;
	        private static MASK_10000000;
	        private static MASK_01111111;
	        private _data;
	        constructor(data: ByteArray);
	        position: number;
	        readVarInt(): number;
	        readVarUhInt(): number;
	        readVarShort(): number;
	        readVarUhShort(): number;
	        readVarLong(): number;
	        readVarUhLong(): number;
	        readBytes(param1: ByteArray, param2?: number, param3?: number): void;
	        readBoolean(): boolean;
	        readByte(): number;
	        readUnsignedByte(): number;
	        readShort(): number;
	        readUnsignedShort(): number;
	        readInt(): number;
	        readUnsignedInt(): number;
	        readFloat(): number;
	        readDouble(): number;
	        readMultiByte(param1: number, param2: string): string;
	        readUTF(): string;
	        readUTFBytes(param1: number): string;
	        bytesAvailable: number;
	        readObject(): any;
	        endian: string;
	        writeVarInt(param1: number): void;
	        writeVarShort(param1: number): void;
	        writeVarLong(param1: number): void;
	        writeBytes(param1: ByteArray, param2?: number, param3?: number): void;
	        writeBoolean(param1: boolean): void;
	        writeByte(param1: number): void;
	        writeShort(param1: number): void;
	        writeInt(param1: number): void;
	        writeUnsignedInt(param1: number): void;
	        writeFloat(param1: number): void;
	        writeDouble(param1: number): void;
	        writeMultiByte(param1: string, param2: string): void;
	        writeUTF(param1: string): void;
	        writeUTFBytes(param1: string): void;
	        writeObject(param1: any): void;
	        private readInt64(param1);
	        private readUInt64(param1);
	        private writeint32(param1, param2);
	    }
	    class NetworkMessage {
	        static BIT_RIGHT_SHIFT_LEN_PACKET_ID: number;
	        static writePacket(param1: ICustomDataOutput, param2: number, param3: ByteArray): void;
	        private static computeTypeLen(param1);
	        private static subComputeStaticHeader(param1, param2);
	    }
	    interface INetworkMessage {
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        getMessageId(): number;
	        reset(): void;
	    }
	    interface INetworkType {
	        serialize(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        getTypeId(): number;
	        reset(): void;
	    }
	}
	export = Protocol;

}
