/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ContactLookRequestMessage = require('./contact-look-request-message');
declare class ContactLookRequestByIdMessage extends ContactLookRequestMessage {
    static ID: number;
    playerId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ContactLookRequestByIdMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ContactLookRequestByIdMessage(param1: ICustomDataInput): void;
}
export = ContactLookRequestByIdMessage;
