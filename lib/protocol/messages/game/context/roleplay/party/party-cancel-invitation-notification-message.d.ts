/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import AbstractPartyEventMessage = require('./abstract-party-event-message');
declare class PartyCancelInvitationNotificationMessage extends AbstractPartyEventMessage {
    static ID: number;
    cancelerId: number;
    guestId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyCancelInvitationNotificationMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyCancelInvitationNotificationMessage(param1: ICustomDataInput): void;
}
export = PartyCancelInvitationNotificationMessage;
