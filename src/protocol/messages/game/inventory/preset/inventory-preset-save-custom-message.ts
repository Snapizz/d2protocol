/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class InventoryPresetSaveCustomMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6329;

    presetId: number;
    symbolId: number;
    itemsPositions: number[];
    itemsUids: number[];

    constructor() {
        this.presetId = 0;
        this.symbolId = 0;
        this.itemsPositions = [];
        this.itemsUids = [];
        super();
    }

    public getMessageId(): number {
        return InventoryPresetSaveCustomMessage.ID;
    }

    public reset(): void {
        this.presetId = 0;
        this.symbolId = 0;
        this.itemsPositions = [];
        this.itemsUids = [];
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
        this.serializeAs_InventoryPresetSaveCustomMessage(param1);
    }

    public serializeAs_InventoryPresetSaveCustomMessage(param1: ICustomDataOutput): void {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
        }
        param1.writeByte(this.symbolId);
        param1.writeShort(this.itemsPositions.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.itemsPositions.length) {
            param1.writeByte(this.itemsPositions[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.itemsUids.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.itemsUids.length) {
            if (this.itemsUids[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.itemsUids[_loc3_] + ') on element 4 (starting at 1) of itemsUids.');
            }
            param1.writeVarInt(this.itemsUids[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InventoryPresetSaveCustomMessage(param1);
    }

    public deserializeAs_InventoryPresetSaveCustomMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetSaveCustomMessage.presetId.');
        }
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element of InventoryPresetSaveCustomMessage.symbolId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUnsignedByte();
            if (_loc6_ < 0 || _loc6_ > 255) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of itemsPositions.');
            }
            this.itemsPositions.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhInt();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of itemsUids.');
            }
            this.itemsUids.push(_loc7_);
            _loc5_++;
        }

    }
}

export = InventoryPresetSaveCustomMessage;
