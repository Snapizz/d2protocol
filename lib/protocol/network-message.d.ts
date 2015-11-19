/// <reference path="../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import ByteArray = require('ts-bytearray');
import { ICustomDataOutput, ICustomDataInput } from './custom-data-wrapper';
declare module m {
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
}
export = m;
