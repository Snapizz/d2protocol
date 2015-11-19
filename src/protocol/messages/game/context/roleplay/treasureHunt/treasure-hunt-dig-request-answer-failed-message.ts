/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import TreasureHuntDigRequestAnswerMessage = require('./treasure-hunt-dig-request-answer-message');

class TreasureHuntDigRequestAnswerFailedMessage extends TreasureHuntDigRequestAnswerMessage {
    public static ID: number = 6509;

    wrongFlagCount: number;

    constructor() {
        this.wrongFlagCount = 0;
        super();
    }

    public getMessageId(): number {
        return TreasureHuntDigRequestAnswerFailedMessage.ID;
    }

    public reset(): void {
        this.wrongFlagCount = 0;
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
        this.serializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1);
    }

    public serializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_TreasureHuntDigRequestAnswerMessage(param1);
        if (this.wrongFlagCount < 0) {
            throw new Error('Forbidden value (' + this.wrongFlagCount + ') on element wrongFlagCount.');
        }
        param1.writeByte(this.wrongFlagCount);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1);
    }

    public deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.wrongFlagCount = param1.readByte();
        if (this.wrongFlagCount < 0) {
            throw new Error('Forbidden value (' + this.wrongFlagCount + ') on element of TreasureHuntDigRequestAnswerFailedMessage.wrongFlagCount.');
        }

    }
}

export = TreasureHuntDigRequestAnswerFailedMessage;
