/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyEventMessage = require('./abstract-party-event-message');
declare class PartyRefuseInvitationNotificationMessage extends AbstractPartyEventMessage {
    static ID: number;
    guestId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyRefuseInvitationNotificationMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyRefuseInvitationNotificationMessage(param1: ICustomDataInput): void;
}
export = PartyRefuseInvitationNotificationMessage;
