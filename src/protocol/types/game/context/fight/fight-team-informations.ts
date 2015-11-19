/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTeamMemberInformations = require('./fight-team-member-informations');
import AbstractFightTeamInformations = require('./abstract-fight-team-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class FightTeamInformations extends AbstractFightTeamInformations implements INetworkType {
    public static ID: number = 33;

    teamMembers: FightTeamMemberInformations[];

    constructor() {
        this.teamMembers = [];
        super();
    }

    public getTypeId(): number {
        return FightTeamInformations.ID;
    }

    public reset(): void {
        this.teamMembers = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTeamInformations(param1);
    }

    public serializeAs_FightTeamInformations(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractFightTeamInformations(param1);
        param1.writeShort(this.teamMembers.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.teamMembers.length) {
            param1.writeShort((this.teamMembers[_loc2_]).getTypeId());
            (this.teamMembers[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTeamInformations(param1);
    }

    public deserializeAs_FightTeamInformations(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: FightTeamMemberInformations = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <FightTeamMemberInformations>ProtocolTypeManager.getInstance(FightTeamMemberInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.teamMembers.push(_loc5_);
            _loc3_++;
        }

    }
}

export = FightTeamInformations;
