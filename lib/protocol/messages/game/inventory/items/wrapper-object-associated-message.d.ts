/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import SymbioticObjectAssociatedMessage = require('./symbiotic-object-associated-message');
declare class WrapperObjectAssociatedMessage extends SymbioticObjectAssociatedMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_WrapperObjectAssociatedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_WrapperObjectAssociatedMessage(param1: ICustomDataInput): void;
}
export = WrapperObjectAssociatedMessage;
