/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class StatsUpgradeRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5610;

    useAdditionnal: boolean;
    statId: number;
    boostPoint: number;

    constructor() {
        this.useAdditionnal = false;
        this.statId = 11;
        this.boostPoint = 0;
        super();
    }

    public getMessageId(): number {
        return StatsUpgradeRequestMessage.ID;
    }

    public reset(): void {
        this.useAdditionnal = false;
        this.statId = 11;
        this.boostPoint = 0;
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
        this.serializeAs_StatsUpgradeRequestMessage(param1);
    }

    public serializeAs_StatsUpgradeRequestMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.useAdditionnal);
        param1.writeByte(this.statId);
        if (this.boostPoint < 0) {
            throw new Error('Forbidden value (' + this.boostPoint + ') on element boostPoint.');
        }
        param1.writeVarShort(this.boostPoint);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StatsUpgradeRequestMessage(param1);
    }

    public deserializeAs_StatsUpgradeRequestMessage(param1: ICustomDataInput): void {
        this.useAdditionnal = param1.readBoolean();
        this.statId = param1.readByte();
        if (this.statId < 0) {
            throw new Error('Forbidden value (' + this.statId + ') on element of StatsUpgradeRequestMessage.statId.');
        }
        this.boostPoint = param1.readVarUhShort();
        if (this.boostPoint < 0) {
            throw new Error('Forbidden value (' + this.boostPoint + ') on element of StatsUpgradeRequestMessage.boostPoint.');
        }

    }
}

export = StatsUpgradeRequestMessage;
