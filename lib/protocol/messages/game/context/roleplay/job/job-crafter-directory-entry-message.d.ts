/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import JobCrafterDirectoryEntryPlayerInfo = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-entry-player-info');
import JobCrafterDirectoryEntryJobInfo = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-entry-job-info');
import EntityLook = require('../../../../../types/game/look/entity-look');
declare class JobCrafterDirectoryEntryMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    playerInfo: JobCrafterDirectoryEntryPlayerInfo;
    jobInfoList: JobCrafterDirectoryEntryJobInfo[];
    playerLook: EntityLook;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobCrafterDirectoryEntryMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobCrafterDirectoryEntryMessage(param1: ICustomDataInput): void;
}
export = JobCrafterDirectoryEntryMessage;
