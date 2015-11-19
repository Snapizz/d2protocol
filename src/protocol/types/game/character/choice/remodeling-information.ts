/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class RemodelingInformation implements INetworkType {
    public static ID: number = 480;

    name: string;
    breed: number;
    sex: boolean;
    cosmeticId: number;
    colors: number[];

    constructor() {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.cosmeticId = 0;
        this.colors = [];
    }

    public getTypeId(): number {
        return RemodelingInformation.ID;
    }

    public reset(): void {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.cosmeticId = 0;
        this.colors = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_RemodelingInformation(param1);
    }

    public serializeAs_RemodelingInformation(param1: ICustomDataOutput): void {
        param1.writeUTF(this.name);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
        }
        param1.writeVarShort(this.cosmeticId);
        param1.writeShort(this.colors.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.colors.length) {
            param1.writeInt(this.colors[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_RemodelingInformation(param1);
    }

    public deserializeAs_RemodelingInformation(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        this.name = param1.readUTF();
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();
        this.cosmeticId = param1.readVarUhShort();
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element of RemodelingInformation.cosmeticId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
            this.colors.push(_loc4_);
            _loc3_++;
        }

    }
}

export = RemodelingInformation;
