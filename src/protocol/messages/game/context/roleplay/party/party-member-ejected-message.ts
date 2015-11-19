/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import PartyMemberRemoveMessage = require('./party-member-remove-message');

class PartyMemberEjectedMessage extends PartyMemberRemoveMessage {
    public static ID: number = 6252;

    kickerId: number;

    constructor() {
        this.kickerId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyMemberEjectedMessage.ID;
    }

    public reset(): void {
        this.kickerId = 0;
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
        this.serializeAs_PartyMemberEjectedMessage(param1);
    }

    public serializeAs_PartyMemberEjectedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_PartyMemberRemoveMessage(param1);
        if (this.kickerId < 0) {
            throw new Error('Forbidden value (' + this.kickerId + ') on element kickerId.');
        }
        param1.writeVarInt(this.kickerId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyMemberEjectedMessage(param1);
    }

    public deserializeAs_PartyMemberEjectedMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.kickerId = param1.readVarUhInt();
        if (this.kickerId < 0) {
            throw new Error('Forbidden value (' + this.kickerId + ') on element of PartyMemberEjectedMessage.kickerId.');
        }

    }
}

export = PartyMemberEjectedMessage;
