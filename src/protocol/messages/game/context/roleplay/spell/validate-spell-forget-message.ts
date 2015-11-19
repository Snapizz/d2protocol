/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class ValidateSpellForgetMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1700;

    spellId: number;

    constructor() {
        this.spellId = 0;
        super();
    }

    public getMessageId(): number {
        return ValidateSpellForgetMessage.ID;
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
        this.serializeAs_ValidateSpellForgetMessage(param1);
    }

    public serializeAs_ValidateSpellForgetMessage(param1: ICustomDataOutput): void {
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ValidateSpellForgetMessage(param1);
    }

    public deserializeAs_ValidateSpellForgetMessage(param1: ICustomDataInput): void {
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of ValidateSpellForgetMessage.spellId.');
        }

    }
}

export = ValidateSpellForgetMessage;
