/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class TreasureHuntRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6488;

    questLevel: number;
    questType: number;

    constructor() {
        this.questLevel = 0;
        this.questType = 0;
        super();
    }

    public getMessageId(): number {
        return TreasureHuntRequestMessage.ID;
    }

    public reset(): void {
        this.questLevel = 0;
        this.questType = 0;
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
        this.serializeAs_TreasureHuntRequestMessage(param1);
    }

    public serializeAs_TreasureHuntRequestMessage(param1: ICustomDataOutput): void {
        if (this.questLevel < 1 || this.questLevel > 200) {
            throw new Error('Forbidden value (' + this.questLevel + ') on element questLevel.');
        }
        param1.writeByte(this.questLevel);
        param1.writeByte(this.questType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntRequestMessage(param1);
    }

    public deserializeAs_TreasureHuntRequestMessage(param1: ICustomDataInput): void {
        this.questLevel = param1.readUnsignedByte();
        if (this.questLevel < 1 || this.questLevel > 200) {
            throw new Error('Forbidden value (' + this.questLevel + ') on element of TreasureHuntRequestMessage.questLevel.');
        }
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntRequestMessage.questType.');
        }

    }
}

export = TreasureHuntRequestMessage;
