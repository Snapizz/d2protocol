/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeObjectMessage = require('./exchange-object-message');
import ObjectItem = require('../../../../types/game/data/items/object-item');

class ExchangeObjectsAddedMessage extends ExchangeObjectMessage {
    public static ID: number = 6535;

    object: ObjectItem[];

    constructor() {
        this.object = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeObjectsAddedMessage.ID;
    }

    public reset(): void {
        this.object = [];
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ExchangeObjectsAddedMessage(param1);
    }

    public serializeAs_ExchangeObjectsAddedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeObjectMessage(param1);
        param1.writeShort(this.object.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.object.length) {
            (this.object[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeObjectsAddedMessage(param1);
    }

    public deserializeAs_ExchangeObjectsAddedMessage(param1: ICustomDataInput): void {
        var _loc4_: ObjectItem = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.object.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeObjectsAddedMessage;
