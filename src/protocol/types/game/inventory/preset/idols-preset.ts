/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class IdolsPreset implements INetworkType {
    public static ID: number = 491;

    presetId: number;
    symbolId: number;
    idolId: number[];

    constructor() {
        this.presetId = 0;
        this.symbolId = 0;
        this.idolId = [];
    }

    public getTypeId(): number {
        return IdolsPreset.ID;
    }

    public reset(): void {
        this.presetId = 0;
        this.symbolId = 0;
        this.idolId = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_IdolsPreset(param1);
    }

    public serializeAs_IdolsPreset(param1: ICustomDataOutput): void {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
        }
        param1.writeByte(this.symbolId);
        param1.writeShort(this.idolId.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.idolId.length) {
            if (this.idolId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.idolId[_loc2_] + ') on element 3 (starting at 1) of idolId.');
            }
            param1.writeVarShort(this.idolId[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdolsPreset(param1);
    }

    public deserializeAs_IdolsPreset(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of IdolsPreset.presetId.');
        }
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element of IdolsPreset.symbolId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of idolId.');
            }
            this.idolId.push(_loc4_);
            _loc3_++;
        }

    }
}

export = IdolsPreset;
