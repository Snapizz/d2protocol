/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
import IdentificationSuccessMessage = require('./identification-success-message');
declare class IdentificationSuccessWithLoginTokenMessage extends IdentificationSuccessMessage {
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
export = IdentificationSuccessWithLoginTokenMessage;
