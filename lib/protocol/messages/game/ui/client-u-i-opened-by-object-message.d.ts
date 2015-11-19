/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ClientUIOpenedMessage = require('./client-u-i-opened-message');
declare class ClientUIOpenedByObjectMessage extends ClientUIOpenedMessage {
    static ID: number;
    uid: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ClientUIOpenedByObjectMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ClientUIOpenedByObjectMessage(param1: ICustomDataInput): void;
}
export = ClientUIOpenedByObjectMessage;
