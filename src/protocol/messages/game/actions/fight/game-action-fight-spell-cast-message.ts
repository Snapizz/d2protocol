/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionFightTargetedAbilityMessage = require('./abstract-game-action-fight-targeted-ability-message');

class GameActionFightSpellCastMessage extends AbstractGameActionFightTargetedAbilityMessage {
    public static ID: number = 1010;

    spellId: number;
    spellLevel: number;
    portalsIds: number[];

    constructor() {
        this.spellId = 0;
        this.spellLevel = 0;
        this.portalsIds = [];
        super();
    }

    public getMessageId(): number {
        return GameActionFightSpellCastMessage.ID;
    }

    public reset(): void {
        this.spellId = 0;
        this.spellLevel = 0;
        this.portalsIds = [];
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
        this.serializeAs_GameActionFightSpellCastMessage(param1);
    }

    public serializeAs_GameActionFightSpellCastMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionFightTargetedAbilityMessage(param1);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
        }
        param1.writeByte(this.spellLevel);
        param1.writeShort(this.portalsIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.portalsIds.length) {
            param1.writeShort(this.portalsIds[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightSpellCastMessage(param1);
    }

    public deserializeAs_GameActionFightSpellCastMessage(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        super.deserialize(param1);
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightSpellCastMessage.spellId.');
        }
        this.spellLevel = param1.readByte();
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element of GameActionFightSpellCastMessage.spellLevel.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readShort();
            this.portalsIds.push(_loc4_);
            _loc3_++;
        }

    }
}

export = GameActionFightSpellCastMessage;
