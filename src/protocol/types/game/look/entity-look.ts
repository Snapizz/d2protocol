/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import SubEntity = require('./sub-entity');

class EntityLook implements INetworkType {
    public static ID: number = 55;

    bonesId: number;
    skins: number[];
    indexedColors: number[];
    scales: number[];
    subentities: SubEntity[];

    constructor() {
        this.bonesId = 0;
        this.skins = [];
        this.indexedColors = [];
        this.scales = [];
        this.subentities = [];
    }

    public getTypeId(): number {
        return EntityLook.ID;
    }

    public reset(): void {
        this.bonesId = 0;
        this.skins = [];
        this.indexedColors = [];
        this.scales = [];
        this.subentities = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_EntityLook(param1);
    }

    public serializeAs_EntityLook(param1: ICustomDataOutput): void {
        if (this.bonesId < 0) {
            throw new Error('Forbidden value (' + this.bonesId + ') on element bonesId.');
        }
        param1.writeVarShort(this.bonesId);
        param1.writeShort(this.skins.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.skins.length) {
            if (this.skins[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.skins[_loc2_] + ') on element 2 (starting at 1) of skins.');
            }
            param1.writeVarShort(this.skins[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.indexedColors.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.indexedColors.length) {
            param1.writeInt(this.indexedColors[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.scales.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.scales.length) {
            param1.writeVarShort(this.scales[_loc4_]);
            _loc4_++;
        }
        param1.writeShort(this.subentities.length);
        var _loc5_: number = 0;
        while (_loc5_ < this.subentities.length) {
            (this.subentities[_loc5_]).serializeAs_SubEntity(param1);
            _loc5_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_EntityLook(param1);
    }

    public deserializeAs_EntityLook(param1: ICustomDataInput): void {
        var _loc10_: number = 0;
        var _loc11_: any = 0;
        var _loc12_: any = 0;
        var _loc13_: SubEntity = null;
        this.bonesId = param1.readVarUhShort();
        if (this.bonesId < 0) {
            throw new Error('Forbidden value (' + this.bonesId + ') on element of EntityLook.bonesId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc10_ = param1.readVarUhShort();
            if (_loc10_ < 0) {
                throw new Error('Forbidden value (' + _loc10_ + ') on elements of skins.');
            }
            this.skins.push(_loc10_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc11_ = param1.readInt();
            this.indexedColors.push(_loc11_);
            _loc5_++;
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc12_ = param1.readVarShort();
            this.scales.push(_loc12_);
            _loc7_++;
        }
        var _loc8_: number = param1.readUnsignedShort();
        var _loc9_: number = 0;
        while (_loc9_ < _loc8_) {
        _loc13_ = new SubEntity();
            _loc13_.deserialize(param1);
            this.subentities.push(_loc13_);
            _loc9_++;
        }

    }
}

export = EntityLook;
