/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import JobAllowMultiCraftRequestMessage = require('./job-allow-multi-craft-request-message');
declare class JobMultiCraftAvailableSkillsMessage extends JobAllowMultiCraftRequestMessage {
    static ID: number;
    playerId: number;
    skills: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobMultiCraftAvailableSkillsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobMultiCraftAvailableSkillsMessage(param1: ICustomDataInput): void;
}
export = JobMultiCraftAvailableSkillsMessage;
