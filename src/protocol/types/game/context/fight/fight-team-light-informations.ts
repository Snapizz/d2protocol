/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractFightTeamInformations = require('./abstract-fight-team-informations');

class FightTeamLightInformations extends AbstractFightTeamInformations implements INetworkType {
    public static ID: number = 115;

    teamMembersCount: number;
    meanLevel: number;
    hasFriend: boolean;
    hasGuildMember: boolean;
    hasAllianceMember: boolean;
    hasGroupMember: boolean;
    hasMyTaxCollector: boolean;

    constructor() {
        this.teamMembersCount = 0;
        this.meanLevel = 0;
        this.hasFriend = false;
        this.hasGuildMember = false;
        this.hasAllianceMember = false;
        this.hasGroupMember = false;
        this.hasMyTaxCollector = false;
        super();
    }

    public getTypeId(): number {
        return FightTeamLightInformations.ID;
    }

    public reset(): void {
        this.teamMembersCount = 0;
        this.meanLevel = 0;
        this.hasFriend = false;
        this.hasGuildMember = false;
        this.hasAllianceMember = false;
        this.hasGroupMember = false;
        this.hasMyTaxCollector = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTeamLightInformations(param1);
    }

    public serializeAs_FightTeamLightInformations(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractFightTeamInformations(param1);
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.hasFriend);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.hasGuildMember);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.hasAllianceMember);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.hasGroupMember);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.hasMyTaxCollector);
        param1.writeByte(_loc2_);
        if (this.teamMembersCount < 0) {
            throw new Error('Forbidden value (' + this.teamMembersCount + ') on element teamMembersCount.');
        }
        param1.writeByte(this.teamMembersCount);
        if (this.meanLevel < 0) {
            throw new Error('Forbidden value (' + this.meanLevel + ') on element meanLevel.');
        }
        param1.writeVarInt(this.meanLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTeamLightInformations(param1);
    }

    public deserializeAs_FightTeamLightInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readByte();
        this.hasFriend = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.hasGuildMember = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.hasAllianceMember = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.hasGroupMember = BooleanByteWrapper.getFlag(_loc2_, 3);
        this.hasMyTaxCollector = BooleanByteWrapper.getFlag(_loc2_, 4);
        this.teamMembersCount = param1.readByte();
        if (this.teamMembersCount < 0) {
            throw new Error('Forbidden value (' + this.teamMembersCount + ') on element of FightTeamLightInformations.teamMembersCount.');
        }
        this.meanLevel = param1.readVarUhInt();
        if (this.meanLevel < 0) {
            throw new Error('Forbidden value (' + this.meanLevel + ') on element of FightTeamLightInformations.meanLevel.');
        }

    }
}

export = FightTeamLightInformations;
