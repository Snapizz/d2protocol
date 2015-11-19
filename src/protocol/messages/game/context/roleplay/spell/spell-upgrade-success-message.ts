/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class SpellUpgradeSuccessMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1201;

    spellId: number;
    spellLevel: number;

    constructor() {
        this.spellId = 0;
        this.spellLevel = 0;
        super();
    }

    public getMessageId(): number {
        return SpellUpgradeSuccessMessage.ID;
    }

    public reset(): void {
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
        this.serializeAs_SpellUpgradeSuccessMessage(param1);
    }

    public serializeAs_SpellUpgradeSuccessMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.spellId);
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
        }
        param1.writeByte(this.spellLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SpellUpgradeSuccessMessage(param1);
    }

    public deserializeAs_SpellUpgradeSuccessMessage(param1: ICustomDataInput): void {
        this.spellId = param1.readInt();
        this.spellLevel = param1.readByte();
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element of SpellUpgradeSuccessMessage.spellLevel.');
        }

    }
}

export = SpellUpgradeSuccessMessage;
