/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Idol = require('./idol');

class PartyIdol extends Idol implements INetworkType {
    public static ID: number = 490;

    ownersIds: number[];

    constructor() {
        this.ownersIds = [];
        super();
    }

    public getTypeId(): number {
        return PartyIdol.ID;
    }

    public reset(): void {
        this.ownersIds = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PartyIdol(param1);
    }

    public serializeAs_PartyIdol(param1: ICustomDataOutput): void {
        super.serializeAs_Idol(param1);
        param1.writeShort(this.ownersIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.ownersIds.length) {
            param1.writeInt(this.ownersIds[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyIdol(param1);
    }

    public deserializeAs_PartyIdol(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
            this.ownersIds.push(_loc4_);
            _loc3_++;
        }

    }
}

export = PartyIdol;
