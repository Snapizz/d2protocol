/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import CharacterBaseInformations = require('../../../character/choice/character-base-informations');
import PartyCompanionBaseInformations = require('./companion/party-companion-base-informations');
import EntityLook = require('../../../look/entity-look');

class PartyInvitationMemberInformations extends CharacterBaseInformations implements INetworkType {
    public static ID: number = 376;

    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    companions: PartyCompanionBaseInformations[];

    constructor() {
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.companions = [];
        super();
    }

    public getTypeId(): number {
        return PartyInvitationMemberInformations.ID;
    }

    public reset(): void {
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.companions = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PartyInvitationMemberInformations(param1);
    }

    public serializeAs_PartyInvitationMemberInformations(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterBaseInformations(param1);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeShort(this.companions.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.companions.length) {
            (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyInvitationMemberInformations(param1);
    }

    public deserializeAs_PartyInvitationMemberInformations(param1: ICustomDataInput): void {
        var _loc4_: PartyCompanionBaseInformations = null;
        super.deserialize(param1);
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PartyInvitationMemberInformations.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PartyInvitationMemberInformations.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PartyInvitationMemberInformations.subAreaId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new PartyCompanionBaseInformations();
            _loc4_.deserialize(param1);
            this.companions.push(_loc4_);
            _loc3_++;
        }

    }
}

export = PartyInvitationMemberInformations;
