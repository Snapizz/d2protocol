/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class QuestStepStartedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6096;

    questId: number;
    stepId: number;

    constructor() {
        this.questId = 0;
        this.stepId = 0;
        super();
    }

    public getMessageId(): number {
        return QuestStepStartedMessage.ID;
    }

    public reset(): void {
        this.questId = 0;
        this.stepId = 0;
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
        this.serializeAs_QuestStepStartedMessage(param1);
    }

    public serializeAs_QuestStepStartedMessage(param1: ICustomDataOutput): void {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element stepId.');
        }
        param1.writeVarShort(this.stepId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_QuestStepStartedMessage(param1);
    }

    public deserializeAs_QuestStepStartedMessage(param1: ICustomDataInput): void {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestStepStartedMessage.questId.');
        }
        this.stepId = param1.readVarUhShort();
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element of QuestStepStartedMessage.stepId.');
        }

    }
}

export = QuestStepStartedMessage;
