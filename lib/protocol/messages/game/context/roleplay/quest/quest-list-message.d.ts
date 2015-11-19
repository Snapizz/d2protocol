/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import QuestActiveInformations = require('../../../../../types/game/context/roleplay/quest/quest-active-informations');
declare class QuestListMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    finishedQuestsIds: number[];
    finishedQuestsCounts: number[];
    activeQuests: QuestActiveInformations[];
    reinitDoneQuestsIds: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_QuestListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_QuestListMessage(param1: ICustomDataInput): void;
}
export = QuestListMessage;
