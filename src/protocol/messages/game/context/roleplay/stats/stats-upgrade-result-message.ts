/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class StatsUpgradeResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5609;

    result: number;
    nbCharacBoost: number;

    constructor() {
        this.result = 0;
        this.nbCharacBoost = 0;
        super();
    }

    public getMessageId(): number {
        return StatsUpgradeResultMessage.ID;
    }

    public reset(): void {
        this.result = 0;
        this.nbCharacBoost = 0;
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
        this.serializeAs_StatsUpgradeResultMessage(param1);
    }

    public serializeAs_StatsUpgradeResultMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.result);
        if (this.nbCharacBoost < 0) {
            throw new Error('Forbidden value (' + this.nbCharacBoost + ') on element nbCharacBoost.');
        }
        param1.writeVarShort(this.nbCharacBoost);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StatsUpgradeResultMessage(param1);
    }

    public deserializeAs_StatsUpgradeResultMessage(param1: ICustomDataInput): void {
        this.result = param1.readByte();
        this.nbCharacBoost = param1.readVarUhShort();
        if (this.nbCharacBoost < 0) {
            throw new Error('Forbidden value (' + this.nbCharacBoost + ') on element of StatsUpgradeResultMessage.nbCharacBoost.');
        }

    }
}

export = StatsUpgradeResultMessage;
