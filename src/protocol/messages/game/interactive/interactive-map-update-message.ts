/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import InteractiveElement = require('../../../types/game/interactive/interactive-element');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class InteractiveMapUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5002;

    interactiveElements: InteractiveElement[];

    constructor() {
        this.interactiveElements = [];
        super();
    }

    public getMessageId(): number {
        return InteractiveMapUpdateMessage.ID;
    }

    public reset(): void {
        this.interactiveElements = [];
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
        this.serializeAs_InteractiveMapUpdateMessage(param1);
    }

    public serializeAs_InteractiveMapUpdateMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.interactiveElements.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.interactiveElements.length) {
            param1.writeShort((this.interactiveElements[_loc2_]).getTypeId());
            (this.interactiveElements[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InteractiveMapUpdateMessage(param1);
    }

    public deserializeAs_InteractiveMapUpdateMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: InteractiveElement = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <InteractiveElement>ProtocolTypeManager.getInstance(InteractiveElement, _loc4_);
            _loc5_.deserialize(param1);
            this.interactiveElements.push(_loc5_);
            _loc3_++;
        }

    }
}

export = InteractiveMapUpdateMessage;
