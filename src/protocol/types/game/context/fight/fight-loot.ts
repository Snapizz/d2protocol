/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class FightLoot implements INetworkType {
    public static ID: number = 41;

    objects: number[];
    kamas: number;

    constructor() {
        this.objects = [];
        this.kamas = 0;
    }

    public getTypeId(): number {
        return FightLoot.ID;
    }

    public reset(): void {
        this.objects = [];
        this.kamas = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightLoot(param1);
    }

    public serializeAs_FightLoot(param1: ICustomDataOutput): void {
        param1.writeShort(this.objects.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.objects.length) {
            if (this.objects[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.objects[_loc2_] + ') on element 1 (starting at 1) of objects.');
            }
            param1.writeVarShort(this.objects[_loc2_]);
            _loc2_++;
        }
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
        }
        param1.writeVarInt(this.kamas);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightLoot(param1);
    }

    public deserializeAs_FightLoot(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of objects.');
            }
            this.objects.push(_loc4_);
            _loc3_++;
        }
        this.kamas = param1.readVarUhInt();
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element of FightLoot.kamas.');
        }

    }
}

export = FightLoot;
