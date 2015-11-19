/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class EmoteAddMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5644;

    emoteId: number;

    constructor() {
        this.emoteId = 0;
        super();
    }

    public getMessageId(): number {
        return EmoteAddMessage.ID;
    }

    public reset(): void {
        this.emoteId = 0;
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
        this.serializeAs_EmoteAddMessage(param1);
    }

    public serializeAs_EmoteAddMessage(param1: ICustomDataOutput): void {
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
        }
        param1.writeByte(this.emoteId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_EmoteAddMessage(param1);
    }

    public deserializeAs_EmoteAddMessage(param1: ICustomDataInput): void {
        this.emoteId = param1.readUnsignedByte();
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element of EmoteAddMessage.emoteId.');
        }

    }
}

export = EmoteAddMessage;
