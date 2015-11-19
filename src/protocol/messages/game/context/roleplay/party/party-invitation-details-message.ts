/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');
import PartyInvitationMemberInformations = require('../../../../../types/game/context/roleplay/party/party-invitation-member-informations');
import PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');

class PartyInvitationDetailsMessage extends AbstractPartyMessage {
    public static ID: number = 6263;

    partyType: number;
    partyName: string;
    fromId: number;
    fromName: string;
    leaderId: number;
    members: PartyInvitationMemberInformations[];
    guests: PartyGuestInformations[];

    constructor() {
        this.partyType = 0;
        this.partyName = '';
        this.fromId = 0;
        this.fromName = '';
        this.leaderId = 0;
        this.members = [];
        this.guests = [];
        super();
    }

    public getMessageId(): number {
        return PartyInvitationDetailsMessage.ID;
    }

    public reset(): void {
        this.partyType = 0;
        this.partyName = '';
        this.fromId = 0;
        this.fromName = '';
        this.leaderId = 0;
        this.members = [];
        this.guests = [];
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
        this.serializeAs_PartyInvitationDetailsMessage(param1);
    }

    public serializeAs_PartyInvitationDetailsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        param1.writeByte(this.partyType);
        param1.writeUTF(this.partyName);
        if (this.fromId < 0) {
            throw new Error('Forbidden value (' + this.fromId + ') on element fromId.');
        }
        param1.writeVarInt(this.fromId);
        param1.writeUTF(this.fromName);
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element leaderId.');
        }
        param1.writeVarInt(this.leaderId);
        param1.writeShort(this.members.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.members.length) {
            (this.members[_loc2_]).serializeAs_PartyInvitationMemberInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.guests.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.guests.length) {
            (this.guests[_loc3_]).serializeAs_PartyGuestInformations(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyInvitationDetailsMessage(param1);
    }

    public deserializeAs_PartyInvitationDetailsMessage(param1: ICustomDataInput): void {
        var _loc6_: PartyInvitationMemberInformations = null;
        var _loc7_: PartyGuestInformations = null;
        super.deserialize(param1);
        this.partyType = param1.readByte();
        if (this.partyType < 0) {
            throw new Error('Forbidden value (' + this.partyType + ') on element of PartyInvitationDetailsMessage.partyType.');
        }
        this.partyName = param1.readUTF();
        this.fromId = param1.readVarUhInt();
        if (this.fromId < 0) {
            throw new Error('Forbidden value (' + this.fromId + ') on element of PartyInvitationDetailsMessage.fromId.');
        }
        this.fromName = param1.readUTF();
        this.leaderId = param1.readVarUhInt();
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element of PartyInvitationDetailsMessage.leaderId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = new PartyInvitationMemberInformations();
            _loc6_.deserialize(param1);
            this.members.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = new PartyGuestInformations();
            _loc7_.deserialize(param1);
            this.guests.push(_loc7_);
            _loc5_++;
        }

    }
}

export = PartyInvitationDetailsMessage;
