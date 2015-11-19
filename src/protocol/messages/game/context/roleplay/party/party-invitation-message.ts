/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');

class PartyInvitationMessage extends AbstractPartyMessage {
    public static ID: number = 5586;

    partyType: number;
    partyName: string;
    maxParticipants: number;
    fromId: number;
    fromName: string;
    toId: number;

    constructor() {
        this.partyType = 0;
        this.partyName = '';
        this.maxParticipants = 0;
        this.fromId = 0;
        this.fromName = '';
        this.toId = 0;
        super();
    }

    public getMessageId(): number {
        return PartyInvitationMessage.ID;
    }

    public reset(): void {
        this.partyType = 0;
        this.partyName = '';
        this.maxParticipants = 0;
        this.fromId = 0;
        this.fromName = '';
        this.toId = 0;
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
        this.serializeAs_PartyInvitationMessage(param1);
    }

    public serializeAs_PartyInvitationMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        param1.writeByte(this.partyType);
        param1.writeUTF(this.partyName);
        if (this.maxParticipants < 0) {
            throw new Error('Forbidden value (' + this.maxParticipants + ') on element maxParticipants.');
        }
        param1.writeByte(this.maxParticipants);
        if (this.fromId < 0) {
            throw new Error('Forbidden value (' + this.fromId + ') on element fromId.');
        }
        param1.writeVarInt(this.fromId);
        param1.writeUTF(this.fromName);
        if (this.toId < 0) {
            throw new Error('Forbidden value (' + this.toId + ') on element toId.');
        }
        param1.writeVarInt(this.toId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyInvitationMessage(param1);
    }

    public deserializeAs_PartyInvitationMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.partyType = param1.readByte();
        if (this.partyType < 0) {
            throw new Error('Forbidden value (' + this.partyType + ') on element of PartyInvitationMessage.partyType.');
        }
        this.partyName = param1.readUTF();
        this.maxParticipants = param1.readByte();
        if (this.maxParticipants < 0) {
            throw new Error('Forbidden value (' + this.maxParticipants + ') on element of PartyInvitationMessage.maxParticipants.');
        }
        this.fromId = param1.readVarUhInt();
        if (this.fromId < 0) {
            throw new Error('Forbidden value (' + this.fromId + ') on element of PartyInvitationMessage.fromId.');
        }
        this.fromName = param1.readUTF();
        this.toId = param1.readVarUhInt();
        if (this.toId < 0) {
            throw new Error('Forbidden value (' + this.toId + ') on element of PartyInvitationMessage.toId.');
        }

    }
}

export = PartyInvitationMessage;
