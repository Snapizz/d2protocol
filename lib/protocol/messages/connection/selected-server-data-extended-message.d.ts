/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
import SelectedServerDataMessage = require('./selected-server-data-message');
declare class SelectedServerDataExtendedMessage extends SelectedServerDataMessage {
    static ID: number;
    serverIds: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataInput): void;
}
export = SelectedServerDataExtendedMessage;
