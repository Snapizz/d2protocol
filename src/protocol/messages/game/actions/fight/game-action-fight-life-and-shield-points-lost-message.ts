/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameActionFightLifePointsLostMessage = require('./game-action-fight-life-points-lost-message');

class GameActionFightLifeAndShieldPointsLostMessage extends GameActionFightLifePointsLostMessage {
    public static ID: number = 6310;

    shieldLoss: number;

    constructor() {
        this.shieldLoss = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightLifeAndShieldPointsLostMessage.ID;
    }

    public reset(): void {
        this.shieldLoss = 0;
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
        this.serializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1);
    }

    public serializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameActionFightLifePointsLostMessage(param1);
        if (this.shieldLoss < 0) {
            throw new Error('Forbidden value (' + this.shieldLoss + ') on element shieldLoss.');
        }
        param1.writeVarShort(this.shieldLoss);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1);
    }

    public deserializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.shieldLoss = param1.readVarUhShort();
        if (this.shieldLoss < 0) {
            throw new Error('Forbidden value (' + this.shieldLoss + ') on element of GameActionFightLifeAndShieldPointsLostMessage.shieldLoss.');
        }

    }
}

export = GameActionFightLifeAndShieldPointsLostMessage;
