/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import EmotePlayAbstractMessage = require('./emote-play-abstract-message');

class EmotePlayMassiveMessage extends EmotePlayAbstractMessage {
    public static ID: number = 5691;

    actorIds: number[];

    constructor() {
        this.actorIds = [];
        super();
    }

    public getMessageId(): number {
        return EmotePlayMassiveMessage.ID;
    }

    public reset(): void {
        this.actorIds = [];
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
        this.serializeAs_EmotePlayMassiveMessage(param1);
    }

    public serializeAs_EmotePlayMassiveMessage(param1: ICustomDataOutput): void {
        super.serializeAs_EmotePlayAbstractMessage(param1);
        param1.writeShort(this.actorIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.actorIds.length) {
            param1.writeInt(this.actorIds[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_EmotePlayMassiveMessage(param1);
    }

    public deserializeAs_EmotePlayMassiveMessage(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
            this.actorIds.push(_loc4_);
            _loc3_++;
        }

    }
}

export = EmotePlayMassiveMessage;
