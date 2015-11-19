/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class HouseInformations implements INetworkType {
    public static ID: number = 111;

    houseId: number;
    doorsOnMap: number[];
    ownerName: string;
    isOnSale: boolean;
    isSaleLocked: boolean;
    modelId: number;

    constructor() {
        this.houseId = 0;
        this.doorsOnMap = [];
        this.ownerName = '';
        this.isOnSale = false;
        this.isSaleLocked = false;
        this.modelId = 0;
    }

    public getTypeId(): number {
        return HouseInformations.ID;
    }

    public reset(): void {
        this.houseId = 0;
        this.doorsOnMap = [];
        this.ownerName = '';
        this.isOnSale = false;
        this.isSaleLocked = false;
        this.modelId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HouseInformations(param1);
    }

    public serializeAs_HouseInformations(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.isOnSale);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isSaleLocked);
        param1.writeByte(_loc2_);
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        param1.writeShort(this.doorsOnMap.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.doorsOnMap.length) {
            if (this.doorsOnMap[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.doorsOnMap[_loc3_] + ') on element 2 (starting at 1) of doorsOnMap.');
            }
            param1.writeInt(this.doorsOnMap[_loc3_]);
            _loc3_++;
        }
        param1.writeUTF(this.ownerName);
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeVarShort(this.modelId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseInformations(param1);
    }

    public deserializeAs_HouseInformations(param1: ICustomDataInput): void {
        var _loc5_: number = 0;
        var _loc2_: number = param1.readByte();
        this.isOnSale = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.isSaleLocked = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseInformations.houseId.');
        }
        var _loc3_: number = param1.readUnsignedShort();
        var _loc4_: number = 0;
        while (_loc4_ < _loc3_) {
        _loc5_ = param1.readInt();
            if (_loc5_ < 0) {
                throw new Error('Forbidden value (' + _loc5_ + ') on elements of doorsOnMap.');
            }
            this.doorsOnMap.push(_loc5_);
            _loc4_++;
        }
        this.ownerName = param1.readUTF();
        this.modelId = param1.readVarUhShort();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of HouseInformations.modelId.');
        }

    }
}

export = HouseInformations;
