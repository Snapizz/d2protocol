/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import JobCrafterDirectorySettings = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-settings');
declare class JobCrafterDirectoryDefineSettingsMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    settings: JobCrafterDirectorySettings;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_JobCrafterDirectoryDefineSettingsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_JobCrafterDirectoryDefineSettingsMessage(param1: ICustomDataInput): void;
}
export = JobCrafterDirectoryDefineSettingsMessage;
