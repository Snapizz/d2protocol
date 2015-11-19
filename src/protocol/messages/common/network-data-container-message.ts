/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class NetworkDataContainerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 2;

    content: ByteArray;

    constructor() {
        this.content = new ByteArray();
        super();
    }

    public getMessageId(): number {
        return NetworkDataContainerMessage.ID;
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
        this.serializeAs_NetworkDataContainerMessage(param1);
    }

    public serializeAs_NetworkDataContainerMessage(param1: ICustomDataOutput): void {
        param1.writeBytes(this.content);
        throw new Error('Not implemented');

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NetworkDataContainerMessage(param1);
    }

    public deserializeAs_NetworkDataContainerMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readVarInt();
        var _loc3_: ByteArray = new ByteArray();
        param1.readBytes(_loc3_, 0, _loc2_);
        _loc3_.uncompress();
        this.content = _loc3_;

    }
}

export = NetworkDataContainerMessage;
