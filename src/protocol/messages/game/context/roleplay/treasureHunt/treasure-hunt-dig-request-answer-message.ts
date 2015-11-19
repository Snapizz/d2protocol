/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class TreasureHuntDigRequestAnswerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6484;

    questType: number;
    result: number;

    constructor() {
        this.questType = 0;
        this.result = 0;
        super();
    }

    public getMessageId(): number {
        return TreasureHuntDigRequestAnswerMessage.ID;
    }

    public reset(): void {
        this.questType = 0;
        this.result = 0;
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
        this.serializeAs_TreasureHuntDigRequestAnswerMessage(param1);
    }

    public serializeAs_TreasureHuntDigRequestAnswerMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.questType);
        param1.writeByte(this.result);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntDigRequestAnswerMessage(param1);
    }

    public deserializeAs_TreasureHuntDigRequestAnswerMessage(param1: ICustomDataInput): void {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntDigRequestAnswerMessage.questType.');
        }
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of TreasureHuntDigRequestAnswerMessage.result.');
        }

    }
}

export = TreasureHuntDigRequestAnswerMessage;
