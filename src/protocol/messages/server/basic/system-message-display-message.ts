/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class SystemMessageDisplayMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 189;

    hangUp: boolean;
    msgId: number;
    parameters: string[];

    constructor() {
        this.hangUp = false;
        this.msgId = 0;
        this.parameters = [];
        super();
    }

    public getMessageId(): number {
        return SystemMessageDisplayMessage.ID;
    }

    public reset(): void {
        this.hangUp = false;
        this.msgId = 0;
        this.parameters = [];
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
        this.serializeAs_SystemMessageDisplayMessage(param1);
    }

    public serializeAs_SystemMessageDisplayMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.hangUp);
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element msgId.');
        }
        param1.writeVarShort(this.msgId);
        param1.writeShort(this.parameters.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.parameters.length) {
            param1.writeUTF(this.parameters[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SystemMessageDisplayMessage(param1);
    }

    public deserializeAs_SystemMessageDisplayMessage(param1: ICustomDataInput): void {
        var _loc4_: string = null;
        this.hangUp = param1.readBoolean();
        this.msgId = param1.readVarUhShort();
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element of SystemMessageDisplayMessage.msgId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUTF();
            this.parameters.push(_loc4_);
            _loc3_++;
        }

    }
}

export = SystemMessageDisplayMessage;
