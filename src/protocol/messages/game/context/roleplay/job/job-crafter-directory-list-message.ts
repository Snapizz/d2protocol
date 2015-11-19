/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobCrafterDirectoryListEntry = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-list-entry');

class JobCrafterDirectoryListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6046;

    listEntries: JobCrafterDirectoryListEntry[];

    constructor() {
        this.listEntries = [];
        super();
    }

    public getMessageId(): number {
        return JobCrafterDirectoryListMessage.ID;
    }

    public reset(): void {
        this.listEntries = [];
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
        this.serializeAs_JobCrafterDirectoryListMessage(param1);
    }

    public serializeAs_JobCrafterDirectoryListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.listEntries.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.listEntries.length) {
            (this.listEntries[_loc2_]).serializeAs_JobCrafterDirectoryListEntry(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobCrafterDirectoryListMessage(param1);
    }

    public deserializeAs_JobCrafterDirectoryListMessage(param1: ICustomDataInput): void {
        var _loc4_: JobCrafterDirectoryListEntry = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new JobCrafterDirectoryListEntry();
            _loc4_.deserialize(param1);
            this.listEntries.push(_loc4_);
            _loc3_++;
        }

    }
}

export = JobCrafterDirectoryListMessage;
