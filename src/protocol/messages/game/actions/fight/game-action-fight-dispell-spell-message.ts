/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameActionFightDispellMessage = require('./game-action-fight-dispell-message');

class GameActionFightDispellSpellMessage extends GameActionFightDispellMessage {
    public static ID: number = 6176;

    spellId: number;

    constructor() {
        this.spellId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightDispellSpellMessage.ID;
    }

    public reset(): void {
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
        this.serializeAs_GameActionFightDispellSpellMessage(param1);
    }

    public serializeAs_GameActionFightDispellSpellMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameActionFightDispellMessage(param1);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightDispellSpellMessage(param1);
    }

    public deserializeAs_GameActionFightDispellSpellMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightDispellSpellMessage.spellId.');
        }

    }
}

export = GameActionFightDispellSpellMessage;
