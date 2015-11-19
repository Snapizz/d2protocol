/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import PresetItem = require('./preset-item');

class Preset implements INetworkType {
    public static ID: number = 355;

    presetId: number;
    symbolId: number;
    mount: boolean;
    objects: PresetItem[];

    constructor() {
        this.presetId = 0;
        this.symbolId = 0;
        this.mount = false;
        this.objects = [];
    }

    public getTypeId(): number {
        return Preset.ID;
    }

    public reset(): void {
        this.presetId = 0;
        this.symbolId = 0;
        this.mount = false;
        this.objects = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_Preset(param1);
    }

    public serializeAs_Preset(param1: ICustomDataOutput): void {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
        }
        param1.writeByte(this.symbolId);
        param1.writeBoolean(this.mount);
        param1.writeShort(this.objects.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.objects.length) {
            (this.objects[_loc2_]).serializeAs_PresetItem(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_Preset(param1);
    }

    public deserializeAs_Preset(param1: ICustomDataInput): void {
        var _loc4_: PresetItem = null;
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of Preset.presetId.');
        }
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element of Preset.symbolId.');
        }
        this.mount = param1.readBoolean();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new PresetItem();
            _loc4_.deserialize(param1);
            this.objects.push(_loc4_);
            _loc3_++;
        }

    }
}

export = Preset;
