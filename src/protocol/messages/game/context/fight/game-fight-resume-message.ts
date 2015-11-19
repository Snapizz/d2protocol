/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightSpectateMessage = require('./game-fight-spectate-message');
import GameFightSpellCooldown = require('../../../../types/game/context/fight/game-fight-spell-cooldown');
import FightDispellableEffectExtendedInformations = require('../../../../types/game/action/fight/fight-dispellable-effect-extended-informations');
import GameActionMark = require('../../../../types/game/actions/fight/game-action-mark');
import Idol = require('../../../../types/game/idol/idol');

class GameFightResumeMessage extends GameFightSpectateMessage {
    public static ID: number = 6067;

    spellCooldowns: GameFightSpellCooldown[];
    summonCount: number;
    bombCount: number;

    constructor() {
        this.spellCooldowns = [];
        this.summonCount = 0;
        this.bombCount = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightResumeMessage.ID;
    }

    public reset(): void {
        this.spellCooldowns = [];
        this.summonCount = 0;
        this.bombCount = 0;
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
        this.serializeAs_GameFightResumeMessage(param1);
    }

    public serializeAs_GameFightResumeMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightSpectateMessage(param1);
        param1.writeShort(this.spellCooldowns.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.spellCooldowns.length) {
            (this.spellCooldowns[_loc2_]).serializeAs_GameFightSpellCooldown(param1);
            _loc2_++;
        }
        if (this.summonCount < 0) {
            throw new Error('Forbidden value (' + this.summonCount + ') on element summonCount.');
        }
        param1.writeByte(this.summonCount);
        if (this.bombCount < 0) {
            throw new Error('Forbidden value (' + this.bombCount + ') on element bombCount.');
        }
        param1.writeByte(this.bombCount);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightResumeMessage(param1);
    }

    public deserializeAs_GameFightResumeMessage(param1: ICustomDataInput): void {
        var _loc4_: GameFightSpellCooldown = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new GameFightSpellCooldown();
            _loc4_.deserialize(param1);
            this.spellCooldowns.push(_loc4_);
            _loc3_++;
        }
        this.summonCount = param1.readByte();
        if (this.summonCount < 0) {
            throw new Error('Forbidden value (' + this.summonCount + ') on element of GameFightResumeMessage.summonCount.');
        }
        this.bombCount = param1.readByte();
        if (this.bombCount < 0) {
            throw new Error('Forbidden value (' + this.bombCount + ') on element of GameFightResumeMessage.bombCount.');
        }

    }
}

export = GameFightResumeMessage;
