/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class GameRolePlayPlayerFightRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5731;

    targetId: number;
    targetCellId: number;
    friendly: boolean;

    constructor() {
        this.targetId = 0;
        this.targetCellId = 0;
        this.friendly = false;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayPlayerFightRequestMessage.ID;
    }

    public reset(): void {
        this.targetId = 0;
        this.targetCellId = 0;
        this.friendly = false;
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
        this.serializeAs_GameRolePlayPlayerFightRequestMessage(param1);
    }

    public serializeAs_GameRolePlayPlayerFightRequestMessage(param1: ICustomDataOutput): void {
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element targetId.');
        }
        param1.writeVarInt(this.targetId);
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element targetCellId.');
        }
        param1.writeShort(this.targetCellId);
        param1.writeBoolean(this.friendly);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayPlayerFightRequestMessage(param1);
    }

    public deserializeAs_GameRolePlayPlayerFightRequestMessage(param1: ICustomDataInput): void {
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element of GameRolePlayPlayerFightRequestMessage.targetId.');
        }
        this.targetCellId = param1.readShort();
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element of GameRolePlayPlayerFightRequestMessage.targetCellId.');
        }
        this.friendly = param1.readBoolean();

    }
}

export = GameRolePlayPlayerFightRequestMessage;
