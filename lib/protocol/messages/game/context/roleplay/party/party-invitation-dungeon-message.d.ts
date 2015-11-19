/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import PartyInvitationMessage = require('./party-invitation-message');
declare class PartyInvitationDungeonMessage extends PartyInvitationMessage {
    static ID: number;
    dungeonId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyInvitationDungeonMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyInvitationDungeonMessage(param1: ICustomDataInput): void;
}
export = PartyInvitationDungeonMessage;
