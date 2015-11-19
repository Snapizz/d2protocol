/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class DecraftedItemStackInfo implements INetworkType {
    public static ID: number = 481;

    objectUID: number;
    bonusMin: number;
    bonusMax: number;
    runesId: number[];
    runesQty: number[];

    constructor() {
        this.objectUID = 0;
        this.bonusMin = 0;
        this.bonusMax = 0;
        this.runesId = [];
        this.runesQty = [];
    }

    public getTypeId(): number {
        return DecraftedItemStackInfo.ID;
    }

    public reset(): void {
        this.objectUID = 0;
        this.bonusMin = 0;
        this.bonusMax = 0;
        this.runesId = [];
        this.runesQty = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_DecraftedItemStackInfo(param1);
    }

    public serializeAs_DecraftedItemStackInfo(param1: ICustomDataOutput): void {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        param1.writeFloat(this.bonusMin);
        param1.writeFloat(this.bonusMax);
        param1.writeShort(this.runesId.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.runesId.length) {
            if (this.runesId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.runesId[_loc2_] + ') on element 4 (starting at 1) of runesId.');
            }
            param1.writeVarShort(this.runesId[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.runesQty.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.runesQty.length) {
            if (this.runesQty[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.runesQty[_loc3_] + ') on element 5 (starting at 1) of runesQty.');
            }
            param1.writeVarInt(this.runesQty[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_DecraftedItemStackInfo(param1);
    }

    public deserializeAs_DecraftedItemStackInfo(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of DecraftedItemStackInfo.objectUID.');
        }
        this.bonusMin = param1.readFloat();
        this.bonusMax = param1.readFloat();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of runesId.');
            }
            this.runesId.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhInt();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of runesQty.');
            }
            this.runesQty.push(_loc7_);
            _loc5_++;
        }

    }
}

export = DecraftedItemStackInfo;
