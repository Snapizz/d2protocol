/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ObjectItemInformationWithQuantity = require('../data/items/object-item-information-with-quantity');

class StartupActionAddObject implements INetworkType {
    public static ID: number = 52;

    uid: number;
    title: string;
    text: string;
    descUrl: string;
    pictureUrl: string;
    items: ObjectItemInformationWithQuantity[];

    constructor() {
        this.uid = 0;
        this.title = '';
        this.text = '';
        this.descUrl = '';
        this.pictureUrl = '';
        this.items = [];
    }

    public getTypeId(): number {
        return StartupActionAddObject.ID;
    }

    public reset(): void {
        this.uid = 0;
        this.title = '';
        this.text = '';
        this.descUrl = '';
        this.pictureUrl = '';
        this.items = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_StartupActionAddObject(param1);
    }

    public serializeAs_StartupActionAddObject(param1: ICustomDataOutput): void {
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeInt(this.uid);
        param1.writeUTF(this.title);
        param1.writeUTF(this.text);
        param1.writeUTF(this.descUrl);
        param1.writeUTF(this.pictureUrl);
        param1.writeShort(this.items.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.items.length) {
            (this.items[_loc2_]).serializeAs_ObjectItemInformationWithQuantity(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StartupActionAddObject(param1);
    }

    public deserializeAs_StartupActionAddObject(param1: ICustomDataInput): void {
        var _loc4_: ObjectItemInformationWithQuantity = null;
        this.uid = param1.readInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of StartupActionAddObject.uid.');
        }
        this.title = param1.readUTF();
        this.text = param1.readUTF();
        this.descUrl = param1.readUTF();
        this.pictureUrl = param1.readUTF();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItemInformationWithQuantity();
            _loc4_.deserialize(param1);
            this.items.push(_loc4_);
            _loc3_++;
        }

    }
}

export = StartupActionAddObject;
