/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import QuestObjectiveInformations = require('./quest-objective-informations');
import QuestActiveInformations = require('./quest-active-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class QuestActiveDetailedInformations extends QuestActiveInformations implements INetworkType {
    public static ID: number = 382;

    stepId: number;
    objectives: QuestObjectiveInformations[];

    constructor() {
        this.stepId = 0;
        this.objectives = [];
        super();
    }

    public getTypeId(): number {
        return QuestActiveDetailedInformations.ID;
    }

    public reset(): void {
        this.stepId = 0;
        this.objectives = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_QuestActiveDetailedInformations(param1);
    }

    public serializeAs_QuestActiveDetailedInformations(param1: ICustomDataOutput): void {
        super.serializeAs_QuestActiveInformations(param1);
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element stepId.');
        }
        param1.writeVarShort(this.stepId);
        param1.writeShort(this.objectives.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.objectives.length) {
            param1.writeShort((this.objectives[_loc2_]).getTypeId());
            (this.objectives[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_QuestActiveDetailedInformations(param1);
    }

    public deserializeAs_QuestActiveDetailedInformations(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: QuestObjectiveInformations = null;
        super.deserialize(param1);
        this.stepId = param1.readVarUhShort();
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element of QuestActiveDetailedInformations.stepId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <QuestObjectiveInformations>ProtocolTypeManager.getInstance(QuestObjectiveInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.objectives.push(_loc5_);
            _loc3_++;
        }

    }
}

export = QuestActiveDetailedInformations;
