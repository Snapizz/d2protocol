/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import Item = require('./item');
import ObjectEffect = require('./effects/object-effect');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class ObjectItemToSellInHumanVendorShop extends Item implements INetworkType {
    public static ID: number = 359;

    objectGID: number;
    effects: ObjectEffect[];
    objectUID: number;
    quantity: number;
    objectPrice: number;
    publicPrice: number;

    constructor() {
        this.objectGID = 0;
        this.effects = [];
        this.objectUID = 0;
        this.quantity = 0;
        this.objectPrice = 0;
        this.publicPrice = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectItemToSellInHumanVendorShop.ID;
    }

    public reset(): void {
        this.objectGID = 0;
        this.effects = [];
        this.objectUID = 0;
        this.quantity = 0;
        this.objectPrice = 0;
        this.publicPrice = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectItemToSellInHumanVendorShop(param1);
    }

    public serializeAs_ObjectItemToSellInHumanVendorShop(param1: ICustomDataOutput): void {
        super.serializeAs_Item(param1);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);
        param1.writeShort(this.effects.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.effects.length) {
            param1.writeShort((this.effects[_loc2_]).getTypeId());
            (this.effects[_loc2_]).serialize(param1);
            _loc2_++;
        }
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
        if (this.objectPrice < 0) {
            throw new Error('Forbidden value (' + this.objectPrice + ') on element objectPrice.');
        }
        param1.writeVarInt(this.objectPrice);
        if (this.publicPrice < 0) {
            throw new Error('Forbidden value (' + this.publicPrice + ') on element publicPrice.');
        }
        param1.writeVarInt(this.publicPrice);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectItemToSellInHumanVendorShop(param1);
    }

    public deserializeAs_ObjectItemToSellInHumanVendorShop(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: ObjectEffect = null;
        super.deserialize(param1);
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemToSellInHumanVendorShop.objectGID.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
            _loc5_.deserialize(param1);
            this.effects.push(_loc5_);
            _loc3_++;
        }
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItemToSellInHumanVendorShop.objectUID.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemToSellInHumanVendorShop.quantity.');
        }
        this.objectPrice = param1.readVarUhInt();
        if (this.objectPrice < 0) {
            throw new Error('Forbidden value (' + this.objectPrice + ') on element of ObjectItemToSellInHumanVendorShop.objectPrice.');
        }
        this.publicPrice = param1.readVarUhInt();
        if (this.publicPrice < 0) {
            throw new Error('Forbidden value (' + this.publicPrice + ') on element of ObjectItemToSellInHumanVendorShop.publicPrice.');
        }

    }
}

export = ObjectItemToSellInHumanVendorShop;
