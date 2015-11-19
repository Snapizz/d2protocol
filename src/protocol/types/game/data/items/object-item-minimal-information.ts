/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import Item = require('./item');
import ObjectEffect = require('./effects/object-effect');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class ObjectItemMinimalInformation extends Item implements INetworkType {
    public static ID: number = 124;

    objectGID: number;
    effects: ObjectEffect[];

    constructor() {
        this.objectGID = 0;
        this.effects = [];
        super();
    }

    public getTypeId(): number {
        return ObjectItemMinimalInformation.ID;
    }

    public reset(): void {
        this.objectGID = 0;
        this.effects = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectItemMinimalInformation(param1);
    }

    public serializeAs_ObjectItemMinimalInformation(param1: ICustomDataOutput): void {
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

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectItemMinimalInformation(param1);
    }

    public deserializeAs_ObjectItemMinimalInformation(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: ObjectEffect = null;
        super.deserialize(param1);
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemMinimalInformation.objectGID.');
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

    }
}

export = ObjectItemMinimalInformation;
