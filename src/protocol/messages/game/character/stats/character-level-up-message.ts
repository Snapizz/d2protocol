/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class CharacterLevelUpMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5670;

    newLevel: number;

    constructor() {
        this.newLevel = 0;
        super();
    }

    public getMessageId(): number {
        return CharacterLevelUpMessage.ID;
    }

    public reset(): void {
        this.newLevel = 0;
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
        this.serializeAs_CharacterLevelUpMessage(param1);
    }

    public serializeAs_CharacterLevelUpMessage(param1: ICustomDataOutput): void {
        if (this.newLevel < 2 || this.newLevel > 200) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element newLevel.');
        }
        param1.writeByte(this.newLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterLevelUpMessage(param1);
    }

    public deserializeAs_CharacterLevelUpMessage(param1: ICustomDataInput): void {
        this.newLevel = param1.readUnsignedByte();
        if (this.newLevel < 2 || this.newLevel > 200) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element of CharacterLevelUpMessage.newLevel.');
        }

    }
}

export = CharacterLevelUpMessage;
