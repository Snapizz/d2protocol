/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class HelloConnectMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 3;

    salt: string;
    key: number[];

    constructor() {
        this.salt = '';
        this.key = [];
        super();
    }

    public getMessageId(): number {
        return HelloConnectMessage.ID;
    }

    public reset(): void {
        this.salt = '';
        this.key = [];
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
        this.serializeAs_HelloConnectMessage(param1);
    }

    public serializeAs_HelloConnectMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.salt);
        param1.writeVarInt(this.key.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.key.length) {
            param1.writeByte(this.key[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HelloConnectMessage(param1);
    }

    public deserializeAs_HelloConnectMessage(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        this.salt = param1.readUTF();
        var _loc2_: number = param1.readVarInt();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readByte();
            this.key.push(_loc4_);
            _loc3_++;
        }

    }
}

export = HelloConnectMessage;
