/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AlternativeMonstersInGroupLightInformations = require('./alternative-monsters-in-group-light-informations');
import GroupMonsterStaticInformations = require('./group-monster-static-informations');

class GroupMonsterStaticInformationsWithAlternatives extends GroupMonsterStaticInformations implements INetworkType {
    public static ID: number = 396;

    alternatives: AlternativeMonstersInGroupLightInformations[];

    constructor() {
        this.alternatives = [];
        super();
    }

    public getTypeId(): number {
        return GroupMonsterStaticInformationsWithAlternatives.ID;
    }

    public reset(): void {
        this.alternatives = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GroupMonsterStaticInformationsWithAlternatives(param1);
    }

    public serializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataOutput): void {
        super.serializeAs_GroupMonsterStaticInformations(param1);
        param1.writeShort(this.alternatives.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.alternatives.length) {
            (this.alternatives[_loc2_]).serializeAs_AlternativeMonstersInGroupLightInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GroupMonsterStaticInformationsWithAlternatives(param1);
    }

    public deserializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataInput): void {
        var _loc4_: AlternativeMonstersInGroupLightInformations = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new AlternativeMonstersInGroupLightInformations();
            _loc4_.deserialize(param1);
            this.alternatives.push(_loc4_);
            _loc3_++;
        }

    }
}

export = GroupMonsterStaticInformationsWithAlternatives;
