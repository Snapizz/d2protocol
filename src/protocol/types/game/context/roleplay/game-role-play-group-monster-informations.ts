/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GroupMonsterStaticInformations = require('./group-monster-static-informations');
import GameRolePlayActorInformations = require('./game-role-play-actor-informations');
import EntityLook = require('../../look/entity-look');
import EntityDispositionInformations = require('./../entity-disposition-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameRolePlayGroupMonsterInformations extends GameRolePlayActorInformations implements INetworkType {
    public static ID: number = 160;

    staticInfos: GroupMonsterStaticInformations;
    creationTime: number;
    ageBonusRate: number;
    lootShare: number;
    alignmentSide: number;
    keyRingBonus: boolean;
    hasHardcoreDrop: boolean;
    hasAVARewardToken: boolean;

    constructor() {
        this.staticInfos = new GroupMonsterStaticInformations();
        this.creationTime = 0;
        this.ageBonusRate = 0;
        this.lootShare = 0;
        this.alignmentSide = 0;
        this.keyRingBonus = false;
        this.hasHardcoreDrop = false;
        this.hasAVARewardToken = false;
        super();
    }

    public getTypeId(): number {
        return GameRolePlayGroupMonsterInformations.ID;
    }

    public reset(): void {
        this.staticInfos = new GroupMonsterStaticInformations();
        this.creationTime = 0;
        this.ageBonusRate = 0;
        this.lootShare = 0;
        this.alignmentSide = 0;
        this.keyRingBonus = false;
        this.hasHardcoreDrop = false;
        this.hasAVARewardToken = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameRolePlayGroupMonsterInformations(param1);
    }

    public serializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GameRolePlayActorInformations(param1);
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.keyRingBonus);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.hasHardcoreDrop);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.hasAVARewardToken);
        param1.writeByte(_loc2_);
        param1.writeShort(this.staticInfos.getTypeId());
        this.staticInfos.serialize(param1);
        if (this.creationTime < 0 || this.creationTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.creationTime + ') on element creationTime.');
        }
        param1.writeDouble(this.creationTime);
        if (this.ageBonusRate < 0) {
            throw new Error('Forbidden value (' + this.ageBonusRate + ') on element ageBonusRate.');
        }
        param1.writeInt(this.ageBonusRate);
        if (this.lootShare < -1 || this.lootShare > 8) {
            throw new Error('Forbidden value (' + this.lootShare + ') on element lootShare.');
        }
        param1.writeByte(this.lootShare);
        param1.writeByte(this.alignmentSide);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayGroupMonsterInformations(param1);
    }

    public deserializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readByte();
        this.keyRingBonus = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.hasHardcoreDrop = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.hasAVARewardToken = BooleanByteWrapper.getFlag(_loc2_, 2);
        var _loc3_: number = param1.readUnsignedShort();
        this.staticInfos = <GroupMonsterStaticInformations>ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc3_);
        this.staticInfos.deserialize(param1);
        this.creationTime = param1.readDouble();
        if (this.creationTime < 0 || this.creationTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.creationTime + ') on element of GameRolePlayGroupMonsterInformations.creationTime.');
        }
        this.ageBonusRate = param1.readInt();
        if (this.ageBonusRate < 0) {
            throw new Error('Forbidden value (' + this.ageBonusRate + ') on element of GameRolePlayGroupMonsterInformations.ageBonusRate.');
        }
        this.lootShare = param1.readByte();
        if (this.lootShare < -1 || this.lootShare > 8) {
            throw new Error('Forbidden value (' + this.lootShare + ') on element of GameRolePlayGroupMonsterInformations.lootShare.');
        }
        this.alignmentSide = param1.readByte();

    }
}

export = GameRolePlayGroupMonsterInformations;
