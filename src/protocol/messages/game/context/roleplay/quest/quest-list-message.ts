/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import QuestActiveInformations = require('../../../../../types/game/context/roleplay/quest/quest-active-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class QuestListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5626;

    finishedQuestsIds: number[];
    finishedQuestsCounts: number[];
    activeQuests: QuestActiveInformations[];
    reinitDoneQuestsIds: number[];

    constructor() {
        this.finishedQuestsIds = [];
        this.finishedQuestsCounts = [];
        this.activeQuests = [];
        this.reinitDoneQuestsIds = [];
        super();
    }

    public getMessageId(): number {
        return QuestListMessage.ID;
    }

    public reset(): void {
        this.finishedQuestsIds = [];
        this.finishedQuestsCounts = [];
        this.activeQuests = [];
        this.reinitDoneQuestsIds = [];
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
        this.serializeAs_QuestListMessage(param1);
    }

    public serializeAs_QuestListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.finishedQuestsIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.finishedQuestsIds.length) {
            if (this.finishedQuestsIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.finishedQuestsIds[_loc2_] + ') on element 1 (starting at 1) of finishedQuestsIds.');
            }
            param1.writeVarShort(this.finishedQuestsIds[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.finishedQuestsCounts.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.finishedQuestsCounts.length) {
            if (this.finishedQuestsCounts[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.finishedQuestsCounts[_loc3_] + ') on element 2 (starting at 1) of finishedQuestsCounts.');
            }
            param1.writeVarShort(this.finishedQuestsCounts[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.activeQuests.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.activeQuests.length) {
            param1.writeShort((this.activeQuests[_loc4_]).getTypeId());
            (this.activeQuests[_loc4_]).serialize(param1);
            _loc4_++;
        }
        param1.writeShort(this.reinitDoneQuestsIds.length);
        var _loc5_: number = 0;
        while (_loc5_ < this.reinitDoneQuestsIds.length) {
            if (this.reinitDoneQuestsIds[_loc5_] < 0) {
                throw new Error('Forbidden value (' + this.reinitDoneQuestsIds[_loc5_] + ') on element 4 (starting at 1) of reinitDoneQuestsIds.');
            }
            param1.writeVarShort(this.reinitDoneQuestsIds[_loc5_]);
            _loc5_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_QuestListMessage(param1);
    }

    public deserializeAs_QuestListMessage(param1: ICustomDataInput): void {
        var _loc10_: number = 0;
        var _loc11_: number = 0;
        var _loc12_: number = 0;
        var _loc13_: QuestActiveInformations = null;
        var _loc14_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc10_ = param1.readVarUhShort();
            if (_loc10_ < 0) {
                throw new Error('Forbidden value (' + _loc10_ + ') on elements of finishedQuestsIds.');
            }
            this.finishedQuestsIds.push(_loc10_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc11_ = param1.readVarUhShort();
            if (_loc11_ < 0) {
                throw new Error('Forbidden value (' + _loc11_ + ') on elements of finishedQuestsCounts.');
            }
            this.finishedQuestsCounts.push(_loc11_);
            _loc5_++;
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc12_ = param1.readUnsignedShort();
            _loc13_ = <QuestActiveInformations>ProtocolTypeManager.getInstance(QuestActiveInformations, _loc12_);
            _loc13_.deserialize(param1);
            this.activeQuests.push(_loc13_);
            _loc7_++;
        }
        var _loc8_: number = param1.readUnsignedShort();
        var _loc9_: number = 0;
        while (_loc9_ < _loc8_) {
        _loc14_ = param1.readVarUhShort();
            if (_loc14_ < 0) {
                throw new Error('Forbidden value (' + _loc14_ + ') on elements of reinitDoneQuestsIds.');
            }
            this.reinitDoneQuestsIds.push(_loc14_);
            _loc9_++;
        }

    }
}

export = QuestListMessage;
