/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class LifePointsRegenBeginMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5684;

    regenRate: number;

    constructor() {
        this.regenRate = 0;
        super();
    }

    public getMessageId(): number {
        return LifePointsRegenBeginMessage.ID;
    }

    public reset(): void {
        this.regenRate = 0;
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
        this.serializeAs_LifePointsRegenBeginMessage(param1);
    }

    public serializeAs_LifePointsRegenBeginMessage(param1: ICustomDataOutput): void {
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element regenRate.');
        }
        param1.writeByte(this.regenRate);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LifePointsRegenBeginMessage(param1);
    }

    public deserializeAs_LifePointsRegenBeginMessage(param1: ICustomDataInput): void {
        this.regenRate = param1.readUnsignedByte();
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element of LifePointsRegenBeginMessage.regenRate.');
        }

    }
}

export = LifePointsRegenBeginMessage;
