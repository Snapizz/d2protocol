/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MonsterInGroupLightInformations = require('./monster-in-group-light-informations');

class AlternativeMonstersInGroupLightInformations implements INetworkType {
    public static ID: number = 394;

    playerCount: number;
    monsters: MonsterInGroupLightInformations[];

    constructor() {
        this.playerCount = 0;
        this.monsters = [];
    }

    public getTypeId(): number {
        return AlternativeMonstersInGroupLightInformations.ID;
    }

    public reset(): void {
        this.playerCount = 0;
        this.monsters = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AlternativeMonstersInGroupLightInformations(param1);
    }

    public serializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataOutput): void {
        param1.writeInt(this.playerCount);
        param1.writeShort(this.monsters.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.monsters.length) {
            (this.monsters[_loc2_]).serializeAs_MonsterInGroupLightInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AlternativeMonstersInGroupLightInformations(param1);
    }

    public deserializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataInput): void {
        var _loc4_: MonsterInGroupLightInformations = null;
        this.playerCount = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new MonsterInGroupLightInformations();
            _loc4_.deserialize(param1);
            this.monsters.push(_loc4_);
            _loc3_++;
        }

    }
}

export = AlternativeMonstersInGroupLightInformations;
