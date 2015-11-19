/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightSpellImmunityMessage extends AbstractGameActionMessage {
    public static ID: number = 6221;

    targetId: number;
    spellId: number;

    constructor() {
        this.targetId = 0;
        this.spellId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightSpellImmunityMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.spellId = 0;
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
        this.serializeAs_GameActionFightSpellImmunityMessage(param1);
    }

    public serializeAs_GameActionFightSpellImmunityMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightSpellImmunityMessage(param1);
    }

    public deserializeAs_GameActionFightSpellImmunityMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightSpellImmunityMessage.spellId.');
        }

    }
}

export = GameActionFightSpellImmunityMessage;
