/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');

class PartyKickedByMessage extends AbstractPartyMessage {
    public static ID: number = 5590;

    kickerId: number;

    constructor() {
        this.kickerId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyKickedByMessage.ID;
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
        this.serializeAs_PartyKickedByMessage(param1);
    }

    public serializeAs_PartyKickedByMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        if (this.kickerId < 0) {
            throw new Error('Forbidden value (' + this.kickerId + ') on element kickerId.');
        }
        param1.writeVarInt(this.kickerId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyKickedByMessage(param1);
    }

    public deserializeAs_PartyKickedByMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.kickerId = param1.readVarUhInt();
        if (this.kickerId < 0) {
            throw new Error('Forbidden value (' + this.kickerId + ') on element of PartyKickedByMessage.kickerId.');
        }

    }
}

export = PartyKickedByMessage;
