/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');
import PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations');
import PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class PartyJoinMessage extends AbstractPartyMessage {
    public static ID: number = 5576;

    partyType: number;
    partyLeaderId: number;
    maxParticipants: number;
    members: PartyMemberInformations[];
    guests: PartyGuestInformations[];
    restricted: boolean;
    partyName: string;

    constructor() {
        this.partyType = 0;
        this.partyLeaderId = 0;
        this.maxParticipants = 0;
        this.members = [];
        this.guests = [];
        this.restricted = false;
        this.partyName = '';
        super();
    }

    public getMessageId(): number {
        return PartyJoinMessage.ID;
    }

    public reset(): void {
        this.partyType = 0;
        this.partyLeaderId = 0;
        this.maxParticipants = 0;
        this.members = [];
        this.guests = [];
        this.restricted = false;
        this.partyName = '';
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
        this.serializeAs_PartyJoinMessage(param1);
    }

    public serializeAs_PartyJoinMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        param1.writeByte(this.partyType);
        if (this.partyLeaderId < 0) {
            throw new Error('Forbidden value (' + this.partyLeaderId + ') on element partyLeaderId.');
        }
        param1.writeVarInt(this.partyLeaderId);
        if (this.maxParticipants < 0) {
            throw new Error('Forbidden value (' + this.maxParticipants + ') on element maxParticipants.');
        }
        param1.writeByte(this.maxParticipants);
        param1.writeShort(this.members.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.members.length) {
            param1.writeShort((this.members[_loc2_]).getTypeId());
            (this.members[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.guests.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.guests.length) {
            (this.guests[_loc3_]).serializeAs_PartyGuestInformations(param1);
            _loc3_++;
        }
        param1.writeBoolean(this.restricted);
        param1.writeUTF(this.partyName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyJoinMessage(param1);
    }

    public deserializeAs_PartyJoinMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: PartyMemberInformations = null;
        var _loc8_: PartyGuestInformations = null;
        super.deserialize(param1);
        this.partyType = param1.readByte();
        if (this.partyType < 0) {
            throw new Error('Forbidden value (' + this.partyType + ') on element of PartyJoinMessage.partyType.');
        }
        this.partyLeaderId = param1.readVarUhInt();
        if (this.partyLeaderId < 0) {
            throw new Error('Forbidden value (' + this.partyLeaderId + ') on element of PartyJoinMessage.partyLeaderId.');
        }
        this.maxParticipants = param1.readByte();
        if (this.maxParticipants < 0) {
            throw new Error('Forbidden value (' + this.maxParticipants + ') on element of PartyJoinMessage.maxParticipants.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUnsignedShort();
            _loc7_ = <PartyMemberInformations>ProtocolTypeManager.getInstance(PartyMemberInformations, _loc6_);
            _loc7_.deserialize(param1);
            this.members.push(_loc7_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc8_ = new PartyGuestInformations();
            _loc8_.deserialize(param1);
            this.guests.push(_loc8_);
            _loc5_++;
        }
        this.restricted = param1.readBoolean();
        this.partyName = param1.readUTF();

    }
}

export = PartyJoinMessage;
