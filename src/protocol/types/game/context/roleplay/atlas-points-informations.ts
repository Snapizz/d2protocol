/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MapCoordinatesExtended = require('./../map-coordinates-extended');

class AtlasPointsInformations implements INetworkType {
    public static ID: number = 175;

    type: number;
    coords: MapCoordinatesExtended[];

    constructor() {
        this.type = 0;
        this.coords = [];
    }

    public getTypeId(): number {
        return AtlasPointsInformations.ID;
    }

    public reset(): void {
        this.type = 0;
        this.coords = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AtlasPointsInformations(param1);
    }

    public serializeAs_AtlasPointsInformations(param1: ICustomDataOutput): void {
        param1.writeByte(this.type);
        param1.writeShort(this.coords.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.coords.length) {
            (this.coords[_loc2_]).serializeAs_MapCoordinatesExtended(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AtlasPointsInformations(param1);
    }

    public deserializeAs_AtlasPointsInformations(param1: ICustomDataInput): void {
        var _loc4_: MapCoordinatesExtended = null;
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of AtlasPointsInformations.type.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new MapCoordinatesExtended();
            _loc4_.deserialize(param1);
            this.coords.push(_loc4_);
            _loc3_++;
        }

    }
}

export = AtlasPointsInformations;
