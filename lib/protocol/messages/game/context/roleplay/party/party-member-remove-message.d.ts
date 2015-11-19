/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyEventMessage = require('./abstract-party-event-message');
declare class PartyMemberRemoveMessage extends AbstractPartyEventMessage {
    static ID: number;
    leavingPlayerId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyMemberRemoveMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyMemberRemoveMessage(param1: ICustomDataInput): void;
}
export = PartyMemberRemoveMessage;
