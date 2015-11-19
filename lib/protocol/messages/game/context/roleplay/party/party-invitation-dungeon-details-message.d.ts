/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import PartyInvitationDetailsMessage = require('./party-invitation-details-message');
declare class PartyInvitationDungeonDetailsMessage extends PartyInvitationDetailsMessage {
    static ID: number;
    dungeonId: number;
    playersDungeonReady: boolean[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyInvitationDungeonDetailsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyInvitationDungeonDetailsMessage(param1: ICustomDataInput): void;
}
export = PartyInvitationDungeonDetailsMessage;
