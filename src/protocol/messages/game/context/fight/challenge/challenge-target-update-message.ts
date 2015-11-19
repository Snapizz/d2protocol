/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class ChallengeTargetUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6123;

    challengeId: number;
    targetId: number;

    constructor() {
        this.challengeId = 0;
        this.targetId = 0;
        super();
    }

    public getMessageId(): number {
        return ChallengeTargetUpdateMessage.ID;
    }

    public reset(): void {
        this.challengeId = 0;
        this.targetId = 0;
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
        this.serializeAs_ChallengeTargetUpdateMessage(param1);
    }

    public serializeAs_ChallengeTargetUpdateMessage(param1: ICustomDataOutput): void {
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element challengeId.');
        }
        param1.writeVarShort(this.challengeId);
        param1.writeInt(this.targetId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChallengeTargetUpdateMessage(param1);
    }

    public deserializeAs_ChallengeTargetUpdateMessage(param1: ICustomDataInput): void {
        this.challengeId = param1.readVarUhShort();
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element of ChallengeTargetUpdateMessage.challengeId.');
        }
        this.targetId = param1.readInt();

    }
}

export = ChallengeTargetUpdateMessage;
