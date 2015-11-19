/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class ChallengeInfoMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6022;

    challengeId: number;
    targetId: number;
    xpBonus: number;
    dropBonus: number;

    constructor() {
        this.challengeId = 0;
        this.targetId = 0;
        this.xpBonus = 0;
        this.dropBonus = 0;
        super();
    }

    public getMessageId(): number {
        return ChallengeInfoMessage.ID;
    }

    public reset(): void {
        this.challengeId = 0;
        this.targetId = 0;
        this.xpBonus = 0;
        this.dropBonus = 0;
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
        this.serializeAs_ChallengeInfoMessage(param1);
    }

    public serializeAs_ChallengeInfoMessage(param1: ICustomDataOutput): void {
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element challengeId.');
        }
        param1.writeVarShort(this.challengeId);
        param1.writeInt(this.targetId);
        if (this.xpBonus < 0) {
            throw new Error('Forbidden value (' + this.xpBonus + ') on element xpBonus.');
        }
        param1.writeVarInt(this.xpBonus);
        if (this.dropBonus < 0) {
            throw new Error('Forbidden value (' + this.dropBonus + ') on element dropBonus.');
        }
        param1.writeVarInt(this.dropBonus);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChallengeInfoMessage(param1);
    }

    public deserializeAs_ChallengeInfoMessage(param1: ICustomDataInput): void {
        this.challengeId = param1.readVarUhShort();
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element of ChallengeInfoMessage.challengeId.');
        }
        this.targetId = param1.readInt();
        this.xpBonus = param1.readVarUhInt();
        if (this.xpBonus < 0) {
            throw new Error('Forbidden value (' + this.xpBonus + ') on element of ChallengeInfoMessage.xpBonus.');
        }
        this.dropBonus = param1.readVarUhInt();
        if (this.dropBonus < 0) {
            throw new Error('Forbidden value (' + this.dropBonus + ') on element of ChallengeInfoMessage.dropBonus.');
        }

    }
}

export = ChallengeInfoMessage;
