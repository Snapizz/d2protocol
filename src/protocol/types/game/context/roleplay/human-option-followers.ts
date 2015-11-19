/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import HumanOption = require('./human-option');
import IndexedEntityLook = require('../../look/indexed-entity-look');

class HumanOptionFollowers extends HumanOption implements INetworkType {
    public static ID: number = 410;

    followingCharactersLook: IndexedEntityLook[];

    constructor() {
        this.followingCharactersLook = [];
        super();
    }

    public getTypeId(): number {
        return HumanOptionFollowers.ID;
    }

    public reset(): void {
        this.followingCharactersLook = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HumanOptionFollowers(param1);
    }

    public serializeAs_HumanOptionFollowers(param1: ICustomDataOutput): void {
        super.serializeAs_HumanOption(param1);
        param1.writeShort(this.followingCharactersLook.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.followingCharactersLook.length) {
            (this.followingCharactersLook[_loc2_]).serializeAs_IndexedEntityLook(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HumanOptionFollowers(param1);
    }

    public deserializeAs_HumanOptionFollowers(param1: ICustomDataInput): void {
        var _loc4_: IndexedEntityLook = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new IndexedEntityLook();
            _loc4_.deserialize(param1);
            this.followingCharactersLook.push(_loc4_);
            _loc3_++;
        }

    }
}

export = HumanOptionFollowers;
