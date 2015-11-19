/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightTriggerGlyphTrapMessage extends AbstractGameActionMessage {
    public static ID: number = 5741;

    markId: number;
    triggeringCharacterId: number;
    triggeredSpellId: number;

    constructor() {
        this.markId = 0;
        this.triggeringCharacterId = 0;
        this.triggeredSpellId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightTriggerGlyphTrapMessage.ID;
    }

    public reset(): void {
        this.markId = 0;
        this.triggeringCharacterId = 0;
        this.triggeredSpellId = 0;
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
        this.serializeAs_GameActionFightTriggerGlyphTrapMessage(param1);
    }

    public serializeAs_GameActionFightTriggerGlyphTrapMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeShort(this.markId);
        param1.writeInt(this.triggeringCharacterId);
        if (this.triggeredSpellId < 0) {
            throw new Error('Forbidden value (' + this.triggeredSpellId + ') on element triggeredSpellId.');
        }
        param1.writeVarShort(this.triggeredSpellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightTriggerGlyphTrapMessage(param1);
    }

    public deserializeAs_GameActionFightTriggerGlyphTrapMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.markId = param1.readShort();
        this.triggeringCharacterId = param1.readInt();
        this.triggeredSpellId = param1.readVarUhShort();
        if (this.triggeredSpellId < 0) {
            throw new Error('Forbidden value (' + this.triggeredSpellId + ') on element of GameActionFightTriggerGlyphTrapMessage.triggeredSpellId.');
        }

    }
}

export = GameActionFightTriggerGlyphTrapMessage;
