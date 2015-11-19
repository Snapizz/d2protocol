/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AllianceJoinedMessage = require('./alliance-joined-message');
declare class AllianceMembershipMessage extends AllianceJoinedMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AllianceMembershipMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AllianceMembershipMessage(param1: ICustomDataInput): void;
}
export = AllianceMembershipMessage;
