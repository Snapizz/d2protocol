/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObjectUseMessage = require('./object-use-message');
declare class ObjectUseOnCellMessage extends ObjectUseMessage {
    static ID: number;
    cells: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ObjectUseOnCellMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ObjectUseOnCellMessage(param1: ICustomDataInput): void;
}
export = ObjectUseOnCellMessage;
