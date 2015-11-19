/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MonsterInGroupLightInformations = require('./monster-in-group-light-informations');
import MonsterInGroupInformations = require('./monster-in-group-informations');

class GroupMonsterStaticInformations implements INetworkType {
    public static ID: number = 140;

    mainCreatureLightInfos: MonsterInGroupLightInformations;
    underlings: MonsterInGroupInformations[];

    constructor() {
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.underlings = [];
    }

    public getTypeId(): number {
        return GroupMonsterStaticInformations.ID;
    }

    public reset(): void {
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.underlings = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GroupMonsterStaticInformations(param1);
    }

    public serializeAs_GroupMonsterStaticInformations(param1: ICustomDataOutput): void {
        this.mainCreatureLightInfos.serializeAs_MonsterInGroupLightInformations(param1);
        param1.writeShort(this.underlings.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.underlings.length) {
            (this.underlings[_loc2_]).serializeAs_MonsterInGroupInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GroupMonsterStaticInformations(param1);
    }

    public deserializeAs_GroupMonsterStaticInformations(param1: ICustomDataInput): void {
        var _loc4_: MonsterInGroupInformations = null;
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.mainCreatureLightInfos.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new MonsterInGroupInformations();
            _loc4_.deserialize(param1);
            this.underlings.push(_loc4_);
            _loc3_++;
        }

    }
}

export = GroupMonsterStaticInformations;
