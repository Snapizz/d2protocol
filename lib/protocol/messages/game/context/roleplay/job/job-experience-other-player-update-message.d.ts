/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import JobExperienceUpdateMessage = require('./job-experience-update-message');
declare class JobExperienceOtherPlayerUpdateMessage extends JobExperienceUpdateMessage {
    static ID: number;
    playerId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobExperienceOtherPlayerUpdateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobExperienceOtherPlayerUpdateMessage(param1: ICustomDataInput): void;
}
export = JobExperienceOtherPlayerUpdateMessage;
