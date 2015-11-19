/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class SellerBuyerDescriptor implements INetworkType {
    public static ID: number = 121;

    quantities: number[];
    types: number[];
    taxPercentage: number;
    taxModificationPercentage: number;
    maxItemLevel: number;
    maxItemPerAccount: number;
    npcContextualId: number;
    unsoldDelay: number;

    constructor() {
        this.quantities = [];
        this.types = [];
        this.taxPercentage = 0;
        this.taxModificationPercentage = 0;
        this.maxItemLevel = 0;
        this.maxItemPerAccount = 0;
        this.npcContextualId = 0;
        this.unsoldDelay = 0;
    }

    public getTypeId(): number {
        return SellerBuyerDescriptor.ID;
    }

    public reset(): void {
        this.quantities = [];
        this.types = [];
        this.taxPercentage = 0;
        this.taxModificationPercentage = 0;
        this.maxItemLevel = 0;
        this.maxItemPerAccount = 0;
        this.npcContextualId = 0;
        this.unsoldDelay = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_SellerBuyerDescriptor(param1);
    }

    public serializeAs_SellerBuyerDescriptor(param1: ICustomDataOutput): void {
        param1.writeShort(this.quantities.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.quantities.length) {
            if (this.quantities[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.quantities[_loc2_] + ') on element 1 (starting at 1) of quantities.');
            }
            param1.writeVarInt(this.quantities[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.types.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.types.length) {
            if (this.types[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.types[_loc3_] + ') on element 2 (starting at 1) of types.');
            }
            param1.writeVarInt(this.types[_loc3_]);
            _loc3_++;
        }
        param1.writeFloat(this.taxPercentage);
        param1.writeFloat(this.taxModificationPercentage);
        if (this.maxItemLevel < 0 || this.maxItemLevel > 255) {
            throw new Error('Forbidden value (' + this.maxItemLevel + ') on element maxItemLevel.');
        }
        param1.writeByte(this.maxItemLevel);
        if (this.maxItemPerAccount < 0) {
            throw new Error('Forbidden value (' + this.maxItemPerAccount + ') on element maxItemPerAccount.');
        }
        param1.writeVarInt(this.maxItemPerAccount);
        param1.writeInt(this.npcContextualId);
        if (this.unsoldDelay < 0) {
            throw new Error('Forbidden value (' + this.unsoldDelay + ') on element unsoldDelay.');
        }
        param1.writeVarShort(this.unsoldDelay);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SellerBuyerDescriptor(param1);
    }

    public deserializeAs_SellerBuyerDescriptor(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhInt();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of quantities.');
            }
            this.quantities.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhInt();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of types.');
            }
            this.types.push(_loc7_);
            _loc5_++;
        }
        this.taxPercentage = param1.readFloat();
        this.taxModificationPercentage = param1.readFloat();
        this.maxItemLevel = param1.readUnsignedByte();
        if (this.maxItemLevel < 0 || this.maxItemLevel > 255) {
            throw new Error('Forbidden value (' + this.maxItemLevel + ') on element of SellerBuyerDescriptor.maxItemLevel.');
        }
        this.maxItemPerAccount = param1.readVarUhInt();
        if (this.maxItemPerAccount < 0) {
            throw new Error('Forbidden value (' + this.maxItemPerAccount + ') on element of SellerBuyerDescriptor.maxItemPerAccount.');
        }
        this.npcContextualId = param1.readInt();
        this.unsoldDelay = param1.readVarUhShort();
        if (this.unsoldDelay < 0) {
            throw new Error('Forbidden value (' + this.unsoldDelay + ') on element of SellerBuyerDescriptor.unsoldDelay.');
        }

    }
}

export = SellerBuyerDescriptor;
