/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class TreasureHuntDigRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6485;

    questType: number;

    constructor() {
        this.questType = 0;
        super();
    }

    public getMessageId(): number {
        return TreasureHuntDigRequestMessage.ID;
    }

    public reset(): void {
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
        this.serializeAs_TreasureHuntDigRequestMessage(param1);
    }

    public serializeAs_TreasureHuntDigRequestMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.questType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntDigRequestMessage(param1);
    }

    public deserializeAs_TreasureHuntDigRequestMessage(param1: ICustomDataInput): void {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntDigRequestMessage.questType.');
        }

    }
}

export = TreasureHuntDigRequestMessage;
