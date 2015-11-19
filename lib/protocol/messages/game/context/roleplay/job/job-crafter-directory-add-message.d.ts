/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import JobCrafterDirectoryListEntry = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-list-entry');
declare class JobCrafterDirectoryAddMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    listEntry: JobCrafterDirectoryListEntry;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobCrafterDirectoryAddMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobCrafterDirectoryAddMessage(param1: ICustomDataInput): void;
}
export = JobCrafterDirectoryAddMessage;
