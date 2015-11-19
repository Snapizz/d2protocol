/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class ChallengeTargetsListRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5614;

    challengeId: number;

    constructor() {
        this.challengeId = 0;
        super();
    }

    public getMessageId(): number {
        return ChallengeTargetsListRequestMessage.ID;
    }

    public reset(): void {
        this.challengeId = 0;
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
        this.serializeAs_ChallengeTargetsListRequestMessage(param1);
    }

    public serializeAs_ChallengeTargetsListRequestMessage(param1: ICustomDataOutput): void {
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element challengeId.');
        }
        param1.writeVarShort(this.challengeId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChallengeTargetsListRequestMessage(param1);
    }

    public deserializeAs_ChallengeTargetsListRequestMessage(param1: ICustomDataInput): void {
        this.challengeId = param1.readVarUhShort();
        if (this.challengeId < 0) {
            throw new Error('Forbidden value (' + this.challengeId + ') on element of ChallengeTargetsListRequestMessage.challengeId.');
        }

    }
}

export = ChallengeTargetsListRequestMessage;
