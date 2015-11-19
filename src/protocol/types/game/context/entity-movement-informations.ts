/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class EntityMovementInformations implements INetworkType {
    public static ID: number = 63;

    id: number;
    steps: number[];

    constructor() {
        this.id = 0;
        this.steps = [];
    }

    public getTypeId(): number {
        return EntityMovementInformations.ID;
    }

    public reset(): void {
        this.id = 0;
        this.steps = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_EntityMovementInformations(param1);
    }

    public serializeAs_EntityMovementInformations(param1: ICustomDataOutput): void {
        param1.writeInt(this.id);
        param1.writeShort(this.steps.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.steps.length) {
            param1.writeByte(this.steps[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_EntityMovementInformations(param1);
    }

    public deserializeAs_EntityMovementInformations(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        this.id = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readByte();
            this.steps.push(_loc4_);
            _loc3_++;
        }

    }
}

export = EntityMovementInformations;
