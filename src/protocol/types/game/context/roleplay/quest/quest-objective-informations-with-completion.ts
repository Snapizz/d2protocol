/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import QuestObjectiveInformations = require('./quest-objective-informations');

class QuestObjectiveInformationsWithCompletion extends QuestObjectiveInformations implements INetworkType {
    public static ID: number = 386;

    curCompletion: number;
    maxCompletion: number;

    constructor() {
        this.curCompletion = 0;
        this.maxCompletion = 0;
        super();
    }

    public getTypeId(): number {
        return QuestObjectiveInformationsWithCompletion.ID;
    }

    public reset(): void {
        this.curCompletion = 0;
        this.maxCompletion = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_QuestObjectiveInformationsWithCompletion(param1);
    }

    public serializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataOutput): void {
        super.serializeAs_QuestObjectiveInformations(param1);
        if (this.curCompletion < 0) {
            throw new Error('Forbidden value (' + this.curCompletion + ') on element curCompletion.');
        }
        param1.writeVarShort(this.curCompletion);
        if (this.maxCompletion < 0) {
            throw new Error('Forbidden value (' + this.maxCompletion + ') on element maxCompletion.');
        }
        param1.writeVarShort(this.maxCompletion);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_QuestObjectiveInformationsWithCompletion(param1);
    }

    public deserializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.curCompletion = param1.readVarUhShort();
        if (this.curCompletion < 0) {
            throw new Error('Forbidden value (' + this.curCompletion + ') on element of QuestObjectiveInformationsWithCompletion.curCompletion.');
        }
        this.maxCompletion = param1.readVarUhShort();
        if (this.maxCompletion < 0) {
            throw new Error('Forbidden value (' + this.maxCompletion + ') on element of QuestObjectiveInformationsWithCompletion.maxCompletion.');
        }

    }
}

export = QuestObjectiveInformationsWithCompletion;
