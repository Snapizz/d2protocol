/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import PartyInvitationDetailsMessage = require('./party-invitation-details-message');
import PartyInvitationMemberInformations = require('../../../../../types/game/context/roleplay/party/party-invitation-member-informations');
import PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');

class PartyInvitationDungeonDetailsMessage extends PartyInvitationDetailsMessage {
    public static ID: number = 6262;

    dungeonId: number;
    playersDungeonReady: boolean[];

    constructor() {
        this.dungeonId = 0;
        this.playersDungeonReady = [];
        super();
    }

    public getMessageId(): number {
        return PartyInvitationDungeonDetailsMessage.ID;
    }

    public reset(): void {
        this.dungeonId = 0;
        this.playersDungeonReady = [];
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
        this.serializeAs_PartyInvitationDungeonDetailsMessage(param1);
    }

    public serializeAs_PartyInvitationDungeonDetailsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_PartyInvitationDetailsMessage(param1);
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        param1.writeShort(this.playersDungeonReady.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.playersDungeonReady.length) {
            param1.writeBoolean(this.playersDungeonReady[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyInvitationDungeonDetailsMessage(param1);
    }

    public deserializeAs_PartyInvitationDungeonDetailsMessage(param1: ICustomDataInput): void {
        var _loc4_: any = false;
        super.deserialize(param1);
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of PartyInvitationDungeonDetailsMessage.dungeonId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readBoolean();
            this.playersDungeonReady.push(_loc4_);
            _loc3_++;
        }

    }
}

export = PartyInvitationDungeonDetailsMessage;
