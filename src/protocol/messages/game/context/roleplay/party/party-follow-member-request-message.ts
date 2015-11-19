/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');

class PartyFollowMemberRequestMessage extends AbstractPartyMessage {
    public static ID: number = 5577;

    playerId: number;

    constructor() {
        this.playerId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyFollowMemberRequestMessage.ID;
    }

    public reset(): void {
        this.playerId = 0;
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
        this.serializeAs_PartyFollowMemberRequestMessage(param1);
    }

    public serializeAs_PartyFollowMemberRequestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyFollowMemberRequestMessage(param1);
    }

    public deserializeAs_PartyFollowMemberRequestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of PartyFollowMemberRequestMessage.playerId.');
        }

    }
}

export = PartyFollowMemberRequestMessage;
