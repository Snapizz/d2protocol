/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import UpdateLifePointsMessage = require('./update-life-points-message');

class LifePointsRegenEndMessage extends UpdateLifePointsMessage {
    public static ID: number = 5686;

    lifePointsGained: number;

    constructor() {
        this.lifePointsGained = 0;
        super();
    }

    public getMessageId(): number {
        return LifePointsRegenEndMessage.ID;
    }

    public reset(): void {
        this.lifePointsGained = 0;
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
        this.serializeAs_LifePointsRegenEndMessage(param1);
    }

    public serializeAs_LifePointsRegenEndMessage(param1: ICustomDataOutput): void {
        super.serializeAs_UpdateLifePointsMessage(param1);
        if (this.lifePointsGained < 0) {
            throw new Error('Forbidden value (' + this.lifePointsGained + ') on element lifePointsGained.');
        }
        param1.writeVarInt(this.lifePointsGained);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LifePointsRegenEndMessage(param1);
    }

    public deserializeAs_LifePointsRegenEndMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.lifePointsGained = param1.readVarUhInt();
        if (this.lifePointsGained < 0) {
            throw new Error('Forbidden value (' + this.lifePointsGained + ') on element of LifePointsRegenEndMessage.lifePointsGained.');
        }

    }
}

export = LifePointsRegenEndMessage;
