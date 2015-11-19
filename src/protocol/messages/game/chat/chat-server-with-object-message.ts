/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ChatServerMessage = require('./chat-server-message');
import ObjectItem = require('../../../types/game/data/items/object-item');

class ChatServerWithObjectMessage extends ChatServerMessage {
    public static ID: number = 883;

    objects: ObjectItem[];

    constructor() {
        this.objects = [];
        super();
    }

    public getMessageId(): number {
        return ChatServerWithObjectMessage.ID;
    }

    public reset(): void {
        this.objects = [];
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
        this.serializeAs_ChatServerWithObjectMessage(param1);
    }

    public serializeAs_ChatServerWithObjectMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ChatServerMessage(param1);
        param1.writeShort(this.objects.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.objects.length) {
            (this.objects[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChatServerWithObjectMessage(param1);
    }

    public deserializeAs_ChatServerWithObjectMessage(param1: ICustomDataInput): void {
        var _loc4_: ObjectItem = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.objects.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ChatServerWithObjectMessage;
