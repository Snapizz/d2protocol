/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightResumeMessage = require('./game-fight-resume-message');
import GameFightResumeSlaveInfo = require('../../../../types/game/context/fight/game-fight-resume-slave-info');
import FightDispellableEffectExtendedInformations = require('../../../../types/game/action/fight/fight-dispellable-effect-extended-informations');
import GameActionMark = require('../../../../types/game/actions/fight/game-action-mark');
import Idol = require('../../../../types/game/idol/idol');
import GameFightSpellCooldown = require('../../../../types/game/context/fight/game-fight-spell-cooldown');

class GameFightResumeWithSlavesMessage extends GameFightResumeMessage {
    public static ID: number = 6215;

    slavesInfo: GameFightResumeSlaveInfo[];

    constructor() {
        this.slavesInfo = [];
        super();
    }

    public getMessageId(): number {
        return GameFightResumeWithSlavesMessage.ID;
    }

    public reset(): void {
        this.slavesInfo = [];
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
        this.serializeAs_GameFightResumeWithSlavesMessage(param1);
    }

    public serializeAs_GameFightResumeWithSlavesMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightResumeMessage(param1);
        param1.writeShort(this.slavesInfo.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.slavesInfo.length) {
            (this.slavesInfo[_loc2_]).serializeAs_GameFightResumeSlaveInfo(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightResumeWithSlavesMessage(param1);
    }

    public deserializeAs_GameFightResumeWithSlavesMessage(param1: ICustomDataInput): void {
        var _loc4_: GameFightResumeSlaveInfo = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new GameFightResumeSlaveInfo();
            _loc4_.deserialize(param1);
            this.slavesInfo.push(_loc4_);
            _loc3_++;
        }

    }
}

export = GameFightResumeWithSlavesMessage;
