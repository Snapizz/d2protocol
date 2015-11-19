/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class InventoryPresetUseResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6163;

    presetId: number;
    code: number;
    unlinkedPosition: number[];

    constructor() {
        this.presetId = 0;
        this.code = 3;
        this.unlinkedPosition = [];
        super();
    }

    public getMessageId(): number {
        return InventoryPresetUseResultMessage.ID;
    }

    public reset(): void {
        this.presetId = 0;
        this.code = 3;
        this.unlinkedPosition = [];
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
        this.serializeAs_InventoryPresetUseResultMessage(param1);
    }

    public serializeAs_InventoryPresetUseResultMessage(param1: ICustomDataOutput): void {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        param1.writeByte(this.code);
        param1.writeShort(this.unlinkedPosition.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.unlinkedPosition.length) {
            param1.writeByte(this.unlinkedPosition[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InventoryPresetUseResultMessage(param1);
    }

    public deserializeAs_InventoryPresetUseResultMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetUseResultMessage.presetId.');
        }
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error('Forbidden value (' + this.code + ') on element of InventoryPresetUseResultMessage.code.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedByte();
            if (_loc4_ < 0 || _loc4_ > 255) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of unlinkedPosition.');
            }
            this.unlinkedPosition.push(_loc4_);
            _loc3_++;
        }

    }
}

export = InventoryPresetUseResultMessage;
