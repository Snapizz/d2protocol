/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class LivingObjectMessageRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6066;

    msgId: number;
    parameters: string[];
    livingObject: number;

    constructor() {
        this.msgId = 0;
        this.parameters = [];
        this.livingObject = 0;
        super();
    }

    public getMessageId(): number {
        return LivingObjectMessageRequestMessage.ID;
    }

    public reset(): void {
        this.msgId = 0;
        this.parameters = [];
        this.livingObject = 0;
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
        this.serializeAs_LivingObjectMessageRequestMessage(param1);
    }

    public serializeAs_LivingObjectMessageRequestMessage(param1: ICustomDataOutput): void {
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
        if (this.livingObject < 0) {
            throw new Error('Forbidden value (' + this.livingObject + ') on element livingObject.');
        }
        param1.writeVarInt(this.livingObject);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LivingObjectMessageRequestMessage(param1);
    }

    public deserializeAs_LivingObjectMessageRequestMessage(param1: ICustomDataInput): void {
        var _loc4_: string = null;
        this.msgId = param1.readVarUhShort();
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element of LivingObjectMessageRequestMessage.msgId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUTF();
            this.parameters.push(_loc4_);
            _loc3_++;
        }
        this.livingObject = param1.readVarUhInt();
        if (this.livingObject < 0) {
            throw new Error('Forbidden value (' + this.livingObject + ') on element of LivingObjectMessageRequestMessage.livingObject.');
        }

    }
}

export = LivingObjectMessageRequestMessage;
