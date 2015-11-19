/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobCrafterDirectorySettings = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-settings');

class JobCrafterDirectoryDefineSettingsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5649;

    settings: JobCrafterDirectorySettings;

    constructor() {
        this.settings = new JobCrafterDirectorySettings();
        super();
    }

    public getMessageId(): number {
        return JobCrafterDirectoryDefineSettingsMessage.ID;
    }

    public reset(): void {
        this.settings = new JobCrafterDirectorySettings();
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
        this.serializeAs_JobCrafterDirectoryDefineSettingsMessage(param1);
    }

    public serializeAs_JobCrafterDirectoryDefineSettingsMessage(param1: ICustomDataOutput): void {
        this.settings.serializeAs_JobCrafterDirectorySettings(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobCrafterDirectoryDefineSettingsMessage(param1);
    }

    public deserializeAs_JobCrafterDirectoryDefineSettingsMessage(param1: ICustomDataInput): void {
        this.settings = new JobCrafterDirectorySettings();
        this.settings.deserialize(param1);

    }
}

export = JobCrafterDirectoryDefineSettingsMessage;
