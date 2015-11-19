/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class UpdateLifePointsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5658;

    lifePoints: number;
    maxLifePoints: number;

    constructor() {
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        super();
    }

    public getMessageId(): number {
        return UpdateLifePointsMessage.ID;
    }

    public reset(): void {
        this.lifePoints = 0;
        this.maxLifePoints = 0;
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
        this.serializeAs_UpdateLifePointsMessage(param1);
    }

    public serializeAs_UpdateLifePointsMessage(param1: ICustomDataOutput): void {
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
        }
        param1.writeVarInt(this.lifePoints);
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
        }
        param1.writeVarInt(this.maxLifePoints);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_UpdateLifePointsMessage(param1);
    }

    public deserializeAs_UpdateLifePointsMessage(param1: ICustomDataInput): void {
        this.lifePoints = param1.readVarUhInt();
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element of UpdateLifePointsMessage.lifePoints.');
        }
        this.maxLifePoints = param1.readVarUhInt();
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of UpdateLifePointsMessage.maxLifePoints.');
        }

    }
}

export = UpdateLifePointsMessage;
