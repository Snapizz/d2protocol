/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class RawDataMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6253;

    content: ByteArray;

    constructor() {
        this.content = new ByteArray();
        super();
    }

    public getMessageId(): number {
        return RawDataMessage.ID;
    }

    public reset(): void {
        this.content = new ByteArray();
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
        this.serializeAs_RawDataMessage(param1);
    }

    public serializeAs_RawDataMessage(param1: ICustomDataOutput): void {
        param1.writeVarInt(this.content.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.content.length) {
            param1.writeByte(this.content.getArray()[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_RawDataMessage(param1);
    }

    public deserializeAs_RawDataMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readVarInt();
        param1.readBytes(this.content, 0, _loc2_);

    }
}

export = RawDataMessage;
