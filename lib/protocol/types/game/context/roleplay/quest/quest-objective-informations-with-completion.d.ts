/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import QuestObjectiveInformations = require('./quest-objective-informations');
declare class QuestObjectiveInformationsWithCompletion extends QuestObjectiveInformations implements INetworkType {
    static ID: number;
    curCompletion: number;
    maxCompletion: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataInput): void;
}
export = QuestObjectiveInformationsWithCompletion;
