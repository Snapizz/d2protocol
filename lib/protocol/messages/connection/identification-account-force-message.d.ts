/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
import IdentificationMessage = require('./identification-message');
declare class IdentificationAccountForceMessage extends IdentificationMessage {
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
export = IdentificationAccountForceMessage;
