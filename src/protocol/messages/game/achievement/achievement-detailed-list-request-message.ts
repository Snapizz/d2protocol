/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AchievementDetailedListRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6357;

    categoryId: number;

    constructor() {
        this.categoryId = 0;
        super();
    }

    public getMessageId(): number {
        return AchievementDetailedListRequestMessage.ID;
    }

    public reset(): void {
        this.categoryId = 0;
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
        this.serializeAs_AchievementDetailedListRequestMessage(param1);
    }

    public serializeAs_AchievementDetailedListRequestMessage(param1: ICustomDataOutput): void {
        if (this.categoryId < 0) {
            throw new Error('Forbidden value (' + this.categoryId + ') on element categoryId.');
        }
        param1.writeVarShort(this.categoryId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AchievementDetailedListRequestMessage(param1);
    }

    public deserializeAs_AchievementDetailedListRequestMessage(param1: ICustomDataInput): void {
        this.categoryId = param1.readVarUhShort();
        if (this.categoryId < 0) {
            throw new Error('Forbidden value (' + this.categoryId + ') on element of AchievementDetailedListRequestMessage.categoryId.');
        }

    }
}

export = AchievementDetailedListRequestMessage;
