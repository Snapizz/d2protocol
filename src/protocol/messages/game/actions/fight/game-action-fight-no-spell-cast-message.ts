/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameActionFightNoSpellCastMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6132;

    spellLevelId: number;

    constructor() {
        this.spellLevelId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightNoSpellCastMessage.ID;
    }

    public reset(): void {
        this.spellLevelId = 0;
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
        this.serializeAs_GameActionFightNoSpellCastMessage(param1);
    }

    public serializeAs_GameActionFightNoSpellCastMessage(param1: ICustomDataOutput): void {
        if (this.spellLevelId < 0) {
            throw new Error('Forbidden value (' + this.spellLevelId + ') on element spellLevelId.');
        }
        param1.writeVarInt(this.spellLevelId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightNoSpellCastMessage(param1);
    }

    public deserializeAs_GameActionFightNoSpellCastMessage(param1: ICustomDataInput): void {
        this.spellLevelId = param1.readVarUhInt();
        if (this.spellLevelId < 0) {
            throw new Error('Forbidden value (' + this.spellLevelId + ') on element of GameActionFightNoSpellCastMessage.spellLevelId.');
        }

    }
}

export = GameActionFightNoSpellCastMessage;
