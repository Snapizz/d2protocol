/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightLifePointsGainMessage extends AbstractGameActionMessage {
    public static ID: number = 6311;

    targetId: number;
    delta: number;

    constructor() {
        this.targetId = 0;
        this.delta = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightLifePointsGainMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.delta = 0;
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
        this.serializeAs_GameActionFightLifePointsGainMessage(param1);
    }

    public serializeAs_GameActionFightLifePointsGainMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);
        if (this.delta < 0) {
            throw new Error('Forbidden value (' + this.delta + ') on element delta.');
        }
        param1.writeVarInt(this.delta);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightLifePointsGainMessage(param1);
    }

    public deserializeAs_GameActionFightLifePointsGainMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();
        this.delta = param1.readVarUhInt();
        if (this.delta < 0) {
            throw new Error('Forbidden value (' + this.delta + ') on element of GameActionFightLifePointsGainMessage.delta.');
        }

    }
}

export = GameActionFightLifePointsGainMessage;
