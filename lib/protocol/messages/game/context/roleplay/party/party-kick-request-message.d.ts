/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyMessage = require('./abstract-party-message');
declare class PartyKickRequestMessage extends AbstractPartyMessage {
    static ID: number;
    playerId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyKickRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyKickRequestMessage(param1: ICustomDataInput): void;
}
export = PartyKickRequestMessage;
