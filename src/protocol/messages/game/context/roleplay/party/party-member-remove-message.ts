/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyEventMessage = require('./abstract-party-event-message');

class PartyMemberRemoveMessage extends AbstractPartyEventMessage {
    public static ID: number = 5579;

    leavingPlayerId: number;

    constructor() {
        this.leavingPlayerId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyMemberRemoveMessage.ID;
    }

    public reset(): void {
        this.leavingPlayerId = 0;
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
        this.serializeAs_PartyMemberRemoveMessage(param1);
    }

    public serializeAs_PartyMemberRemoveMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyEventMessage(param1);
        if (this.leavingPlayerId < 0) {
            throw new Error('Forbidden value (' + this.leavingPlayerId + ') on element leavingPlayerId.');
        }
        param1.writeVarInt(this.leavingPlayerId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyMemberRemoveMessage(param1);
    }

    public deserializeAs_PartyMemberRemoveMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.leavingPlayerId = param1.readVarUhInt();
        if (this.leavingPlayerId < 0) {
            throw new Error('Forbidden value (' + this.leavingPlayerId + ') on element of PartyMemberRemoveMessage.leavingPlayerId.');
        }

    }
}

export = PartyMemberRemoveMessage;
