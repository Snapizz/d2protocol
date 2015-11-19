/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class CharacterCapabilitiesMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6339;

    guildEmblemSymbolCategories: number;

    constructor() {
        this.guildEmblemSymbolCategories = 0;
        super();
    }

    public getMessageId(): number {
        return CharacterCapabilitiesMessage.ID;
    }

    public reset(): void {
        this.guildEmblemSymbolCategories = 0;
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
        this.serializeAs_CharacterCapabilitiesMessage(param1);
    }

    public serializeAs_CharacterCapabilitiesMessage(param1: ICustomDataOutput): void {
        if (this.guildEmblemSymbolCategories < 0) {
            throw new Error('Forbidden value (' + this.guildEmblemSymbolCategories + ') on element guildEmblemSymbolCategories.');
        }
        param1.writeVarInt(this.guildEmblemSymbolCategories);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterCapabilitiesMessage(param1);
    }

    public deserializeAs_CharacterCapabilitiesMessage(param1: ICustomDataInput): void {
        this.guildEmblemSymbolCategories = param1.readVarUhInt();
        if (this.guildEmblemSymbolCategories < 0) {
            throw new Error('Forbidden value (' + this.guildEmblemSymbolCategories + ') on element of CharacterCapabilitiesMessage.guildEmblemSymbolCategories.');
        }

    }
}

export = CharacterCapabilitiesMessage;
