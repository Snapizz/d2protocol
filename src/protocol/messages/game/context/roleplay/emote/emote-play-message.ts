/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import EmotePlayAbstractMessage = require('./emote-play-abstract-message');

class EmotePlayMessage extends EmotePlayAbstractMessage {
    public static ID: number = 5683;

    actorId: number;
    accountId: number;

    constructor() {
        this.actorId = 0;
        this.accountId = 0;
        super();
    }

    public getMessageId(): number {
        return EmotePlayMessage.ID;
    }

    public reset(): void {
        this.actorId = 0;
        this.accountId = 0;
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
        this.serializeAs_EmotePlayMessage(param1);
    }

    public serializeAs_EmotePlayMessage(param1: ICustomDataOutput): void {
        super.serializeAs_EmotePlayAbstractMessage(param1);
        param1.writeInt(this.actorId);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_EmotePlayMessage(param1);
    }

    public deserializeAs_EmotePlayMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.actorId = param1.readInt();
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of EmotePlayMessage.accountId.');
        }

    }
}

export = EmotePlayMessage;
