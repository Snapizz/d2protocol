/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AchievementFinishedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6208;

    id: number;
    finishedlevel: number;

    constructor() {
        this.id = 0;
        this.finishedlevel = 0;
        super();
    }

    public getMessageId(): number {
        return AchievementFinishedMessage.ID;
    }

    public reset(): void {
        this.id = 0;
        this.finishedlevel = 0;
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
        this.serializeAs_AchievementFinishedMessage(param1);
    }

    public serializeAs_AchievementFinishedMessage(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error('Forbidden value (' + this.finishedlevel + ') on element finishedlevel.');
        }
        param1.writeByte(this.finishedlevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AchievementFinishedMessage(param1);
    }

    public deserializeAs_AchievementFinishedMessage(param1: ICustomDataInput): void {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of AchievementFinishedMessage.id.');
        }
        this.finishedlevel = param1.readUnsignedByte();
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error('Forbidden value (' + this.finishedlevel + ') on element of AchievementFinishedMessage.finishedlevel.');
        }

    }
}

export = AchievementFinishedMessage;
