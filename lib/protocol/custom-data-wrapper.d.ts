/// <reference path="../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import ByteArray = require('ts-bytearray');
declare module m {
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
}
export = m;
