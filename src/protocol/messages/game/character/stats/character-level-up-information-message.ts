/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterLevelUpMessage = require('./character-level-up-message');

class CharacterLevelUpInformationMessage extends CharacterLevelUpMessage {
    public static ID: number = 6076;

    name: string;
    id: number;

    constructor() {
        this.name = '';
        this.id = 0;
        super();
    }

    public getMessageId(): number {
        return CharacterLevelUpInformationMessage.ID;
    }

    public reset(): void {
        this.name = '';
        this.id = 0;
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
        this.serializeAs_CharacterLevelUpInformationMessage(param1);
    }

    public serializeAs_CharacterLevelUpInformationMessage(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterLevelUpMessage(param1);
        param1.writeUTF(this.name);
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterLevelUpInformationMessage(param1);
    }

    public deserializeAs_CharacterLevelUpInformationMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.name = param1.readUTF();
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of CharacterLevelUpInformationMessage.id.');
        }

    }
}

export = CharacterLevelUpInformationMessage;
