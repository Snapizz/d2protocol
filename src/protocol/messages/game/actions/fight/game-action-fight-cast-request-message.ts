/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameActionFightCastRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1005;

    spellId: number;
    cellId: number;

    constructor() {
        this.spellId = 0;
        this.cellId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionFightCastRequestMessage.ID;
    }

    public reset(): void {
        this.spellId = 0;
        this.cellId = 0;
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
        this.serializeAs_GameActionFightCastRequestMessage(param1);
    }

    public serializeAs_GameActionFightCastRequestMessage(param1: ICustomDataOutput): void {
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeShort(this.cellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightCastRequestMessage(param1);
    }

    public deserializeAs_GameActionFightCastRequestMessage(param1: ICustomDataInput): void {
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightCastRequestMessage.spellId.');
        }
        this.cellId = param1.readShort();
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of GameActionFightCastRequestMessage.cellId.');
        }

    }
}

export = GameActionFightCastRequestMessage;
