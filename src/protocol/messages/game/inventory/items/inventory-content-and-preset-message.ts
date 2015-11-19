/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import InventoryContentMessage = require('./inventory-content-message');
import Preset = require('../../../../types/game/inventory/preset/preset');
import IdolsPreset = require('../../../../types/game/inventory/preset/idols-preset');
import ObjectItem = require('../../../../types/game/data/items/object-item');

class InventoryContentAndPresetMessage extends InventoryContentMessage {
    public static ID: number = 6162;

    presets: Preset[];
    idolsPresets: IdolsPreset[];

    constructor() {
        this.presets = [];
        this.idolsPresets = [];
        super();
    }

    public getMessageId(): number {
        return InventoryContentAndPresetMessage.ID;
    }

    public reset(): void {
        this.presets = [];
        this.idolsPresets = [];
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
        this.serializeAs_InventoryContentAndPresetMessage(param1);
    }

    public serializeAs_InventoryContentAndPresetMessage(param1: ICustomDataOutput): void {
        super.serializeAs_InventoryContentMessage(param1);
        param1.writeShort(this.presets.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.presets.length) {
            (this.presets[_loc2_]).serializeAs_Preset(param1);
            _loc2_++;
        }
        param1.writeShort(this.idolsPresets.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.idolsPresets.length) {
            (this.idolsPresets[_loc3_]).serializeAs_IdolsPreset(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InventoryContentAndPresetMessage(param1);
    }

    public deserializeAs_InventoryContentAndPresetMessage(param1: ICustomDataInput): void {
        var _loc6_: Preset = null;
        var _loc7_: IdolsPreset = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = new Preset();
            _loc6_.deserialize(param1);
            this.presets.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = new IdolsPreset();
            _loc7_.deserialize(param1);
            this.idolsPresets.push(_loc7_);
            _loc5_++;
        }

    }
}

export = InventoryContentAndPresetMessage;
