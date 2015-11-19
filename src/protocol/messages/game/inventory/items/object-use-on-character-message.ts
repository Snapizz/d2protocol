/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectUseMessage = require('./object-use-message');

class ObjectUseOnCharacterMessage extends ObjectUseMessage {
    public static ID: number = 3003;

    characterId: number;

    constructor() {
        this.characterId = 0;
        super();
    }

    public getMessageId(): number {
        return ObjectUseOnCharacterMessage.ID;
    }

    public reset(): void {
        this.characterId = 0;
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
        this.serializeAs_ObjectUseOnCharacterMessage(param1);
    }

    public serializeAs_ObjectUseOnCharacterMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectUseMessage(param1);
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeVarInt(this.characterId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectUseOnCharacterMessage(param1);
    }

    public deserializeAs_ObjectUseOnCharacterMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.characterId = param1.readVarUhInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of ObjectUseOnCharacterMessage.characterId.');
        }

    }
}

export = ObjectUseOnCharacterMessage;
