/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class IgnoredDeleteResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5677;

    success: boolean;
    name: string;
    session: boolean;

    constructor() {
        this.success = false;
        this.name = '';
        this.session = false;
        super();
    }

    public getMessageId(): number {
        return IgnoredDeleteResultMessage.ID;
    }

    public reset(): void {
        this.success = false;
        this.name = '';
        this.session = false;
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
        this.serializeAs_IgnoredDeleteResultMessage(param1);
    }

    public serializeAs_IgnoredDeleteResultMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.success);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.session);
        param1.writeByte(_loc2_);
        param1.writeUTF(this.name);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IgnoredDeleteResultMessage(param1);
    }

    public deserializeAs_IgnoredDeleteResultMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.success = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.session = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.name = param1.readUTF();

    }
}

export = IgnoredDeleteResultMessage;
