/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectEffect = require('../../../../types/game/data/items/effects/object-effect');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class SetUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5503;

    setId: number;
    setObjects: number[];
    setEffects: ObjectEffect[];

    constructor() {
        this.setId = 0;
        this.setObjects = [];
        this.setEffects = [];
        super();
    }

    public getMessageId(): number {
        return SetUpdateMessage.ID;
    }

    public reset(): void {
        this.setId = 0;
        this.setObjects = [];
        this.setEffects = [];
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
        this.serializeAs_SetUpdateMessage(param1);
    }

    public serializeAs_SetUpdateMessage(param1: ICustomDataOutput): void {
        if (this.setId < 0) {
            throw new Error('Forbidden value (' + this.setId + ') on element setId.');
        }
        param1.writeVarShort(this.setId);
        param1.writeShort(this.setObjects.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.setObjects.length) {
            if (this.setObjects[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.setObjects[_loc2_] + ') on element 2 (starting at 1) of setObjects.');
            }
            param1.writeVarShort(this.setObjects[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.setEffects.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.setEffects.length) {
            param1.writeShort((this.setEffects[_loc3_]).getTypeId());
            (this.setEffects[_loc3_]).serialize(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SetUpdateMessage(param1);
    }

    public deserializeAs_SetUpdateMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        var _loc8_: ObjectEffect = null;
        this.setId = param1.readVarUhShort();
        if (this.setId < 0) {
            throw new Error('Forbidden value (' + this.setId + ') on element of SetUpdateMessage.setId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of setObjects.');
            }
            this.setObjects.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readUnsignedShort();
            _loc8_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc7_);
            _loc8_.deserialize(param1);
            this.setEffects.push(_loc8_);
            _loc5_++;
        }

    }
}

export = SetUpdateMessage;
