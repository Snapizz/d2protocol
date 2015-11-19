/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class EmotePlayAbstractMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5690;

    emoteId: number;
    emoteStartTime: number;

    constructor() {
        this.emoteId = 0;
        this.emoteStartTime = 0;
        super();
    }

    public getMessageId(): number {
        return EmotePlayAbstractMessage.ID;
    }

    public reset(): void {
        this.emoteId = 0;
        this.emoteStartTime = 0;
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
        this.serializeAs_EmotePlayAbstractMessage(param1);
    }

    public serializeAs_EmotePlayAbstractMessage(param1: ICustomDataOutput): void {
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
        }
        param1.writeByte(this.emoteId);
        if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.emoteStartTime + ') on element emoteStartTime.');
        }
        param1.writeDouble(this.emoteStartTime);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_EmotePlayAbstractMessage(param1);
    }

    public deserializeAs_EmotePlayAbstractMessage(param1: ICustomDataInput): void {
        this.emoteId = param1.readUnsignedByte();
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element of EmotePlayAbstractMessage.emoteId.');
        }
        this.emoteStartTime = param1.readDouble();
        if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.emoteStartTime + ') on element of EmotePlayAbstractMessage.emoteStartTime.');
        }

    }
}

export = EmotePlayAbstractMessage;
