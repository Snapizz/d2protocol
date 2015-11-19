/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class GameRolePlaySpellAnimMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6114;

    casterId: number;
    targetCellId: number;
    spellId: number;
    spellLevel: number;

    constructor() {
        this.casterId = 0;
        this.targetCellId = 0;
        this.spellId = 0;
        this.spellLevel = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlaySpellAnimMessage.ID;
    }

    public reset(): void {
        this.casterId = 0;
        this.targetCellId = 0;
        this.spellId = 0;
        this.spellLevel = 0;
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
        this.serializeAs_GameRolePlaySpellAnimMessage(param1);
    }

    public serializeAs_GameRolePlaySpellAnimMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.casterId);
        if (this.targetCellId < 0 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element targetCellId.');
        }
        param1.writeVarShort(this.targetCellId);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
        }
        param1.writeByte(this.spellLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlaySpellAnimMessage(param1);
    }

    public deserializeAs_GameRolePlaySpellAnimMessage(param1: ICustomDataInput): void {
        this.casterId = param1.readInt();
        this.targetCellId = param1.readVarUhShort();
        if (this.targetCellId < 0 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element of GameRolePlaySpellAnimMessage.targetCellId.');
        }
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameRolePlaySpellAnimMessage.spellId.');
        }
        this.spellLevel = param1.readByte();
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element of GameRolePlaySpellAnimMessage.spellLevel.');
        }

    }
}

export = GameRolePlaySpellAnimMessage;
