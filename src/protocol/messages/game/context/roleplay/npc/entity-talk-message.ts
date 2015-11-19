/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class EntityTalkMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6110;

    entityId: number;
    textId: number;
    parameters: string[];

    constructor() {
        this.entityId = 0;
        this.textId = 0;
        this.parameters = [];
        super();
    }

    public getMessageId(): number {
        return EntityTalkMessage.ID;
    }

    public reset(): void {
        this.entityId = 0;
        this.textId = 0;
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
        this.serializeAs_EntityTalkMessage(param1);
    }

    public serializeAs_EntityTalkMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.entityId);
        if (this.textId < 0) {
            throw new Error('Forbidden value (' + this.textId + ') on element textId.');
        }
        param1.writeVarShort(this.textId);
        param1.writeShort(this.parameters.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.parameters.length) {
            param1.writeUTF(this.parameters[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_EntityTalkMessage(param1);
    }

    public deserializeAs_EntityTalkMessage(param1: ICustomDataInput): void {
        var _loc4_: string = null;
        this.entityId = param1.readInt();
        this.textId = param1.readVarUhShort();
        if (this.textId < 0) {
            throw new Error('Forbidden value (' + this.textId + ') on element of EntityTalkMessage.textId.');
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

export = EntityTalkMessage;
