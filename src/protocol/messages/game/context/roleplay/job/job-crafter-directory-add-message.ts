/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobCrafterDirectoryListEntry = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-list-entry');

class JobCrafterDirectoryAddMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5651;

    listEntry: JobCrafterDirectoryListEntry;

    constructor() {
        this.listEntry = new JobCrafterDirectoryListEntry();
        super();
    }

    public getMessageId(): number {
        return JobCrafterDirectoryAddMessage.ID;
    }

    public reset(): void {
        this.listEntry = new JobCrafterDirectoryListEntry();
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
        this.serializeAs_JobCrafterDirectoryAddMessage(param1);
    }

    public serializeAs_JobCrafterDirectoryAddMessage(param1: ICustomDataOutput): void {
        this.listEntry.serializeAs_JobCrafterDirectoryListEntry(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobCrafterDirectoryAddMessage(param1);
    }

    public deserializeAs_JobCrafterDirectoryAddMessage(param1: ICustomDataInput): void {
        this.listEntry = new JobCrafterDirectoryListEntry();
        this.listEntry.deserialize(param1);

    }
}

export = JobCrafterDirectoryAddMessage;
