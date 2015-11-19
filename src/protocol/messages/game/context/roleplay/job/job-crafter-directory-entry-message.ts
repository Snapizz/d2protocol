/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobCrafterDirectoryEntryPlayerInfo = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-entry-player-info');
import JobCrafterDirectoryEntryJobInfo = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-entry-job-info');
import EntityLook = require('../../../../../types/game/look/entity-look');

class JobCrafterDirectoryEntryMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6044;

    playerInfo: JobCrafterDirectoryEntryPlayerInfo;
    jobInfoList: JobCrafterDirectoryEntryJobInfo[];
    playerLook: EntityLook;

    constructor() {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfoList = [];
        this.playerLook = new EntityLook();
        super();
    }

    public getMessageId(): number {
        return JobCrafterDirectoryEntryMessage.ID;
    }

    public reset(): void {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfoList = [];
        this.playerLook = new EntityLook();
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
        this.serializeAs_JobCrafterDirectoryEntryMessage(param1);
    }

    public serializeAs_JobCrafterDirectoryEntryMessage(param1: ICustomDataOutput): void {
        this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
        param1.writeShort(this.jobInfoList.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.jobInfoList.length) {
            (this.jobInfoList[_loc2_]).serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
            _loc2_++;
        }
        this.playerLook.serializeAs_EntityLook(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobCrafterDirectoryEntryMessage(param1);
    }

    public deserializeAs_JobCrafterDirectoryEntryMessage(param1: ICustomDataInput): void {
        var _loc4_: JobCrafterDirectoryEntryJobInfo = null;
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.playerInfo.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new JobCrafterDirectoryEntryJobInfo();
            _loc4_.deserialize(param1);
            this.jobInfoList.push(_loc4_);
            _loc3_++;
        }
        this.playerLook = new EntityLook();
        this.playerLook.deserialize(param1);

    }
}

export = JobCrafterDirectoryEntryMessage;
