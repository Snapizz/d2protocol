/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
import IdentificationFailedMessage = require('./identification-failed-message');
declare class IdentificationFailedBannedMessage extends IdentificationFailedMessage {
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
export = IdentificationFailedBannedMessage;
