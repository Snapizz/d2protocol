/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightSpellCooldownVariationMessage extends AbstractGameActionMessage {
    public static ID: number = 6219;

    targetId: number;
    spellId: number;
    value: number;

    constructor() {
        this.targetId = 0;
        this.spellId = 0;
        this.value = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightSpellCooldownVariationMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.spellId = 0;
        this.value = 0;
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
        this.serializeAs_GameActionFightSpellCooldownVariationMessage(param1);
    }

    public serializeAs_GameActionFightSpellCooldownVariationMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeInt(this.targetId);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        param1.writeVarShort(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightSpellCooldownVariationMessage(param1);
    }

    public deserializeAs_GameActionFightSpellCooldownVariationMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.targetId = param1.readInt();
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightSpellCooldownVariationMessage.spellId.');
        }
        this.value = param1.readVarShort();

    }
}

export = GameActionFightSpellCooldownVariationMessage;
