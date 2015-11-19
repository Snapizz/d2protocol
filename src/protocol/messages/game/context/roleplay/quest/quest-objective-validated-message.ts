/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class QuestObjectiveValidatedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6098;

    questId: number;
    objectiveId: number;

    constructor() {
        this.questId = 0;
        this.objectiveId = 0;
        super();
    }

    public getMessageId(): number {
        return QuestObjectiveValidatedMessage.ID;
    }

    public reset(): void {
        this.questId = 0;
        this.objectiveId = 0;
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
        this.serializeAs_QuestObjectiveValidatedMessage(param1);
    }

    public serializeAs_QuestObjectiveValidatedMessage(param1: ICustomDataOutput): void {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);
        if (this.objectiveId < 0) {
            throw new Error('Forbidden value (' + this.objectiveId + ') on element objectiveId.');
        }
        param1.writeVarShort(this.objectiveId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_QuestObjectiveValidatedMessage(param1);
    }

    public deserializeAs_QuestObjectiveValidatedMessage(param1: ICustomDataInput): void {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestObjectiveValidatedMessage.questId.');
        }
        this.objectiveId = param1.readVarUhShort();
        if (this.objectiveId < 0) {
            throw new Error('Forbidden value (' + this.objectiveId + ') on element of QuestObjectiveValidatedMessage.objectiveId.');
        }

    }
}

export = QuestObjectiveValidatedMessage;
