/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightTurnStartMessage = require('./game-fight-turn-start-message');

class GameFightTurnResumeMessage extends GameFightTurnStartMessage {
    public static ID: number = 6307;

    remainingTime: number;

    constructor() {
        this.remainingTime = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightTurnResumeMessage.ID;
    }

    public reset(): void {
        this.remainingTime = 0;
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
        this.serializeAs_GameFightTurnResumeMessage(param1);
    }

    public serializeAs_GameFightTurnResumeMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightTurnStartMessage(param1);
        if (this.remainingTime < 0) {
            throw new Error('Forbidden value (' + this.remainingTime + ') on element remainingTime.');
        }
        param1.writeVarInt(this.remainingTime);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightTurnResumeMessage(param1);
    }

    public deserializeAs_GameFightTurnResumeMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.remainingTime = param1.readVarUhInt();
        if (this.remainingTime < 0) {
            throw new Error('Forbidden value (' + this.remainingTime + ') on element of GameFightTurnResumeMessage.remainingTime.');
        }

    }
}

export = GameFightTurnResumeMessage;
