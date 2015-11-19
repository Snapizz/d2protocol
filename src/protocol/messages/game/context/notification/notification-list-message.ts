/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class NotificationListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6087;

    flags: number[];

    constructor() {
        this.flags = [];
        super();
    }

    public getMessageId(): number {
        return NotificationListMessage.ID;
    }

    public reset(): void {
        this.flags = [];
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
        this.serializeAs_NotificationListMessage(param1);
    }

    public serializeAs_NotificationListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.flags.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.flags.length) {
            param1.writeVarInt(this.flags[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NotificationListMessage(param1);
    }

    public deserializeAs_NotificationListMessage(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarInt();
            this.flags.push(_loc4_);
            _loc3_++;
        }

    }
}

export = NotificationListMessage;
