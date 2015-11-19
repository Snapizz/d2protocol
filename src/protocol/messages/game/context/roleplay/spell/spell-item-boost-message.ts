/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class SpellItemBoostMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6011;

    statId: number;
    spellId: number;
    value: number;

    constructor() {
        this.statId = 0;
        this.spellId = 0;
        this.value = 0;
        super();
    }

    public getMessageId(): number {
        return SpellItemBoostMessage.ID;
    }

    public reset(): void {
        this.statId = 0;
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
        this.serializeAs_SpellItemBoostMessage(param1);
    }

    public serializeAs_SpellItemBoostMessage(param1: ICustomDataOutput): void {
        if (this.statId < 0) {
            throw new Error('Forbidden value (' + this.statId + ') on element statId.');
        }
        param1.writeVarInt(this.statId);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        param1.writeVarShort(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SpellItemBoostMessage(param1);
    }

    public deserializeAs_SpellItemBoostMessage(param1: ICustomDataInput): void {
        this.statId = param1.readVarUhInt();
        if (this.statId < 0) {
            throw new Error('Forbidden value (' + this.statId + ') on element of SpellItemBoostMessage.statId.');
        }
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of SpellItemBoostMessage.spellId.');
        }
        this.value = param1.readVarShort();

    }
}

export = SpellItemBoostMessage;
