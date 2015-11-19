/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightLifePointsLostMessage extends AbstractGameActionMessage {
    public static ID: number = 6312;

    targetId: number;
    loss: number;
    permanentDamages: number;

    constructor() {
        this.targetId = 0;
        this.loss = 0;
        this.permanentDamages = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightLifePointsLostMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.loss = 0;
        this.permanentDamages = 0;
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
        this.serializeAs_GameActionFightLifePointsLostMessage(param1);
    }

    public serializeAs_GameActionFightLifePointsLostMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);
        if (this.loss < 0) {
            throw new Error('Forbidden value (' + this.loss + ') on element loss.');
        }
        param1.writeVarShort(this.loss);
        if (this.permanentDamages < 0) {
            throw new Error('Forbidden value (' + this.permanentDamages + ') on element permanentDamages.');
        }
        param1.writeVarShort(this.permanentDamages);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightLifePointsLostMessage(param1);
    }

    public deserializeAs_GameActionFightLifePointsLostMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();
        this.loss = param1.readVarUhShort();
        if (this.loss < 0) {
            throw new Error('Forbidden value (' + this.loss + ') on element of GameActionFightLifePointsLostMessage.loss.');
        }
        this.permanentDamages = param1.readVarUhShort();
        if (this.permanentDamages < 0) {
            throw new Error('Forbidden value (' + this.permanentDamages + ') on element of GameActionFightLifePointsLostMessage.permanentDamages.');
        }

    }
}

export = GameActionFightLifePointsLostMessage;
