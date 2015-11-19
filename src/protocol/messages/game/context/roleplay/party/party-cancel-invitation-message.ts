/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');

class PartyCancelInvitationMessage extends AbstractPartyMessage {
    public static ID: number = 6254;

    guestId: number;

    constructor() {
        this.guestId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyCancelInvitationMessage.ID;
    }

    public reset(): void {
        this.guestId = 0;
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
        this.serializeAs_PartyCancelInvitationMessage(param1);
    }

    public serializeAs_PartyCancelInvitationMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element guestId.');
        }
        param1.writeVarInt(this.guestId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyCancelInvitationMessage(param1);
    }

    public deserializeAs_PartyCancelInvitationMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.guestId = param1.readVarUhInt();
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element of PartyCancelInvitationMessage.guestId.');
        }

    }
}

export = PartyCancelInvitationMessage;
