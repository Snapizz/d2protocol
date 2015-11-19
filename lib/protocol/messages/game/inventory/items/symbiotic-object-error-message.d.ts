/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObjectErrorMessage = require('./object-error-message');
declare class SymbioticObjectErrorMessage extends ObjectErrorMessage {
    static ID: number;
    errorCode: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_SymbioticObjectErrorMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_SymbioticObjectErrorMessage(param1: ICustomDataInput): void;
}
export = SymbioticObjectErrorMessage;
