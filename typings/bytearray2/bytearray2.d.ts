/// <reference path="../node/node.d.ts" />

declare module 'bytearray2' {
    class ByteArray {
        private static BUFFER_SIZE;
        endian: ByteArray.Endian;
        objectEncoding: number;
        position: number;
        shareable: boolean;
        buffer: Buffer;
        constructor(buffer?: Buffer | ByteArray, size?: number);
        bytesAvailable: number;
        length: number;
	    /**
	     * In a single atomic operation,
	     * compares an number value in this byte array with another number value and,
	     * if they match, swaps those bytes with another value.
	     */
        atomicCompareAndSwapIntAt(byteIndex: number, expectedValue: number, newValue: number): number;
	    /**
	     * In a single atomic operation,
	     * compares this byte array's length with a provided value and,
	     * if they match, changes the length of this byte array.
	     */
        atomicCompareAndSwapLength(expectedLength: number, newLength: number): number;
	    /**
	     * Clears the contents of the byte array and resets the length and position properties to 0.
	     * Calling this method explicitly frees up the memory used by the ByteArray instance.
	     */
        clear(): void;
	    /**
	     * Compresses the byte array. The entire byte array is compressed.
	     * After the call, the length property of the ByteArray is set to the new length.
	     * The position property is set to the end of the byte array.
	     */
        compress(algorithm?: ByteArray.CompressionAlgorithm): void;
	    /**
	     * Compresses the byte array using the deflate compression algorithm. The entire byte array is compressed.
	     */
        deflate(): void;
	    /**
	     * Decompresses the byte array using the deflate compression algorithm.
	     * The byte array must have been compressed using the same algorithm.
	     */
        inflate(): void;
	    /**
	     * Reads a Boolean value from the byte stream. A single byte is read, and true is returned if the byte is nonzero, false otherwise.
	     */
        readBoolean(): boolean;
	    /**
	     * Reads a signed byte from the byte stream.
	     */
        readByte(): number;
	    /**
	     * Reads the number of data bytes, specified by the length parameter, from the byte stream.
	     * The bytes are read into the ByteArray object specified by the bytes parameter,
	     * and the bytes are written into the destination ByteArray starting at the position specified by offset.
	     */
        readBytes(bytes: ByteArray, offset?: number, length?: number): void;
	    /**
	     * Reads an IEEE 754 double-precision (64-bit) floating-point number from the byte stream.
	     */
        readDouble(): number;
	    /**
	     * Reads an IEEE 754 single-precision (32-bit) floating-point number from the byte stream.
	     */
        readFloat(): number;
	    /**
	     * Reads a signed 32-bit integer from the byte stream.
	     */
        readInt(): number;
	    /**
	     * Reads a multibyte string of specified length from the byte stream using the specified character set.
	     */
        readMultiByte(length: number, charSet?: string): string;
	    /**
	     * Reads an object from the byte array, encoded in AMF serialized format.
	     */
        readObject(): any;
	    /**
	     * Reads a signed 16-bit integer from the byte stream.
	     */
        readShort(): number;
	    /**
	     * Reads an unsigned byte from the byte stream.
	     */
        readUnsignedByte(): number;
	    /**
	     * Reads an unsigned 32-bit integer from the byte stream.
	     */
        readUnsignedInt(): number;
	    /**
	     * Reads an unsigned 16-bit integer from the byte stream
	     */
        readUnsignedShort(): number;
	    /**
	     * Reads a UTF-8 string from the byte stream.
	     * The string is assumed to be prefixed with an unsigned short indicating the length in bytes.
	     */
        readUTF(): string;
	    /**
	     * Reads a sequence of UTF-8 bytes specified by the length parameter from the byte stream and returns a string.
	     */
        readUTFBytes(length: number): string;
	    /**
	     * Provides an overridable method for customizing the JSON encoding of values in an ByteArray object.
	     */
        toJSON(k: string): any;
	    /**
	     * Converts the byte array to a string.
	     * If the data in the array begins with a Unicode byte order mark, the application will honor that mark when converting to a string.
	     * If System.useCodePage is set to true,
	     * the application will treat the data in the array as being in the current system code page when converting.
	     */
        toString(encoding?: string, offset?: number, length?: number): string;
	    /**
	     * Decompresses the byte array. After the call,
	     * the length property of the ByteArray is set to the new length. The position property is set to 0.
	     */
        uncompress(algorithm?: ByteArray.CompressionAlgorithm): void;
	    /**
	     * Writes a Boolean value.
	     */
        writeBoolean(value: boolean): number;
	    /**
	     * Writes a byte to the byte stream.
	     */
        writeByte(value: number): number;
	    /**
	     * Writes a sequence of length bytes from the specified byte array, bytes,
	     * starting offset(zero-based index) bytes into the byte stream.
	     */
        writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
	    /**
	     * Writes an IEEE 754 double-precision (64-bit) floating-point number to the byte stream.
	     */
        writeDouble(value: number): number;
	    /**
	     * Writes an IEEE 754 single-precision (32-bit) floating-point number to the byte stream.
	     */
        writeFloat(value: number): number;
	    /**
	     * Writes a 32-bit signed integer to the byte stream.
	     */
        writeInt(value: number): number;
	    /**
	     * Writes a multibyte string to the byte stream using the specified character set.
	     */
        writeMultiByte(value: string, charSet?: string): number;
	    /**
	     * Writes an object into the byte array in AMF serialized format.
	     */
        writeObject(object: any): void;
	    /**
	     * Writes a 16-bit integer to the byte stream.
	     */
        writeShort(value: number): number;
	    /**
	     * Writes a 32-bit unsigned integer to the byte stream.
	     */
        writeUnsignedInt(value: number): number;
	    /**
	     * Writes a 16-bit unsigned integer to the byte stream.
	     */
        writeUnsignedShort(value: number): number;
	    /**
	     * Writes a 8-bit unsigned integer to the byte stream.
	     */
        writeUnsignedByte(value: number): number;
	    /**
	     * Writes a UTF-8 string to the byte stream.
	     */
        writeUTF(value: string): number;
	    /**
	     * Writes a UTF-8 string to the byte stream.
	     */
        writeUTFBytes(value: string): number;
	    /**
	     * Update position with number after use it
	     */
        private updatePosition(n);
    }
    module ByteArray {
        export enum Endian {
            Big = 0,
            Little = 1,
        }
        export enum CompressionAlgorithm {
            Deflate = 0,
            Lzma = 1,
            Zlib = 2,
        }
    }
    export = ByteArray;
}
