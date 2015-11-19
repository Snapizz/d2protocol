/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');

class PartyInvitationCancelledForGuestMessage extends AbstractPartyMessage {
    public static ID: number = 6256;

    cancelerId: number;

    constructor() {
        this.cancelerId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyInvitationCancelledForGuestMessage.ID;
    }

    public reset(): void {
        this.cancelerId = 0;
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PartyInvitationCancelledForGuestMessage(param1);
    }

    public serializeAs_PartyInvitationCancelledForGuestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        if (this.cancelerId < 0) {
            throw new Error('Forbidden value (' + this.cancelerId + ') on element cancelerId.');
        }
        param1.writeVarInt(this.cancelerId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyInvitationCancelledForGuestMessage(param1);
    }

    public deserializeAs_PartyInvitationCancelledForGuestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.cancelerId = param1.readVarUhInt();
        if (this.cancelerId < 0) {
            throw new Error('Forbidden value (' + this.cancelerId + ') on element of PartyInvitationCancelledForGuestMessage.cancelerId.');
        }

    }
}

export = PartyInvitationCancelledForGuestMessage;
