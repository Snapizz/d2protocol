/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import PartyFollowMemberRequestMessage = require('./party-follow-member-request-message');
declare class PartyFollowThisMemberRequestMessage extends PartyFollowMemberRequestMessage {
    static ID: number;
    enabled: boolean;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyFollowThisMemberRequestMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyFollowThisMemberRequestMessage(param1: ICustomDataInput): void;
}
export = PartyFollowThisMemberRequestMessage;
