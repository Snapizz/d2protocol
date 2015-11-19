/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class EnabledChannelsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 892;

    channels: number[];
    disallowed: number[];

    constructor() {
        this.channels = [];
        this.disallowed = [];
        super();
    }

    public getMessageId(): number {
        return EnabledChannelsMessage.ID;
    }

    public reset(): void {
        this.channels = [];
        this.disallowed = [];
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
        this.serializeAs_EnabledChannelsMessage(param1);
    }

    public serializeAs_EnabledChannelsMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.channels.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.channels.length) {
            param1.writeByte(this.channels[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.disallowed.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.disallowed.length) {
            param1.writeByte(this.disallowed[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_EnabledChannelsMessage(param1);
    }

    public deserializeAs_EnabledChannelsMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readByte();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of channels.');
            }
            this.channels.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readByte();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of disallowed.');
            }
            this.disallowed.push(_loc7_);
            _loc5_++;
        }

    }
}

export = EnabledChannelsMessage;
