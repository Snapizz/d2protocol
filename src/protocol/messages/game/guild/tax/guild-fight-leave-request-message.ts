/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GuildFightLeaveRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5715;

    taxCollectorId: number;
    characterId: number;

    constructor() {
        this.taxCollectorId = 0;
        this.characterId = 0;
        super();
    }

    public getMessageId(): number {
        return GuildFightLeaveRequestMessage.ID;
    }

    public reset(): void {
        this.taxCollectorId = 0;
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
        this.serializeAs_GuildFightLeaveRequestMessage(param1);
    }

    public serializeAs_GuildFightLeaveRequestMessage(param1: ICustomDataOutput): void {
        if (this.taxCollectorId < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorId + ') on element taxCollectorId.');
        }
        param1.writeInt(this.taxCollectorId);
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeVarInt(this.characterId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildFightLeaveRequestMessage(param1);
    }

    public deserializeAs_GuildFightLeaveRequestMessage(param1: ICustomDataInput): void {
        this.taxCollectorId = param1.readInt();
        if (this.taxCollectorId < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorId + ') on element of GuildFightLeaveRequestMessage.taxCollectorId.');
        }
        this.characterId = param1.readVarUhInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of GuildFightLeaveRequestMessage.characterId.');
        }

    }
}

export = GuildFightLeaveRequestMessage;
