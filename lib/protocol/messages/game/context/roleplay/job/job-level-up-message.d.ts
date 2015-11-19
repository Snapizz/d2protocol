/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import JobDescription = require('../../../../../types/game/context/roleplay/job/job-description');
declare class JobLevelUpMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    newLevel: number;
    jobsDescription: JobDescription;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobLevelUpMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobLevelUpMessage(param1: ICustomDataInput): void;
}
export = JobLevelUpMessage;
