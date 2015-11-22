/// <reference path="../node/node.d.ts" />

declare module 'node-lzma' {
	module lzma {
		export function compress(buff: Buffer): Buffer;
		export function decompress(buff: Buffer): Buffer;
	}
}