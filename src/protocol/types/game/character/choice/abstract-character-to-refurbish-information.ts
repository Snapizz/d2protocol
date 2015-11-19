/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractCharacterInformation = require('./../abstract-character-information');

class AbstractCharacterToRefurbishInformation extends AbstractCharacterInformation implements INetworkType {
    public static ID: number = 475;

    colors: number[];
    cosmeticId: number;

    constructor() {
        this.colors = [];
        this.cosmeticId = 0;
        super();
    }

    public getTypeId(): number {
        return AbstractCharacterToRefurbishInformation.ID;
    }

    public reset(): void {
        this.colors = [];
        this.cosmeticId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AbstractCharacterToRefurbishInformation(param1);
    }

    public serializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractCharacterInformation(param1);
        param1.writeShort(this.colors.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.colors.length) {
            param1.writeInt(this.colors[_loc2_]);
            _loc2_++;
        }
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
        }
        param1.writeVarInt(this.cosmeticId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AbstractCharacterToRefurbishInformation(param1);
    }

    public deserializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
            this.colors.push(_loc4_);
            _loc3_++;
        }
        this.cosmeticId = param1.readVarUhInt();
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element of AbstractCharacterToRefurbishInformation.cosmeticId.');
        }

    }
}

export = AbstractCharacterToRefurbishInformation;
