/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class QuestObjectiveInformations implements INetworkType {
    public static ID: number = 385;

    objectiveId: number;
    objectiveStatus: boolean;
    dialogParams: string[];

    constructor() {
        this.objectiveId = 0;
        this.objectiveStatus = false;
        this.dialogParams = [];
    }

    public getTypeId(): number {
        return QuestObjectiveInformations.ID;
    }

    public reset(): void {
        this.objectiveId = 0;
        this.objectiveStatus = false;
        this.dialogParams = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_QuestObjectiveInformations(param1);
    }

    public serializeAs_QuestObjectiveInformations(param1: ICustomDataOutput): void {
        if (this.objectiveId < 0) {
            throw new Error('Forbidden value (' + this.objectiveId + ') on element objectiveId.');
        }
        param1.writeVarShort(this.objectiveId);
        param1.writeBoolean(this.objectiveStatus);
        param1.writeShort(this.dialogParams.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.dialogParams.length) {
            param1.writeUTF(this.dialogParams[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_QuestObjectiveInformations(param1);
    }

    public deserializeAs_QuestObjectiveInformations(param1: ICustomDataInput): void {
        var _loc4_: string = null;
        this.objectiveId = param1.readVarUhShort();
        if (this.objectiveId < 0) {
            throw new Error('Forbidden value (' + this.objectiveId + ') on element of QuestObjectiveInformations.objectiveId.');
        }
        this.objectiveStatus = param1.readBoolean();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUTF();
            this.dialogParams.push(_loc4_);
            _loc3_++;
        }

    }
}

export = QuestObjectiveInformations;
