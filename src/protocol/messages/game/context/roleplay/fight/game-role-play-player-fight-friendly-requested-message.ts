/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class GameRolePlayPlayerFightFriendlyRequestedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5937;

    fightId: number;
    sourceId: number;
    targetId: number;

    constructor() {
        this.fightId = 0;
        this.sourceId = 0;
        this.targetId = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayPlayerFightFriendlyRequestedMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.sourceId = 0;
        this.targetId = 0;
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
        this.serializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(param1);
    }

    public serializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(param1: ICustomDataOutput): void {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        if (this.sourceId < 0) {
            throw new Error('Forbidden value (' + this.sourceId + ') on element sourceId.');
        }
        param1.writeVarInt(this.sourceId);
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element targetId.');
        }
        param1.writeVarInt(this.targetId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(param1);
    }

    public deserializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(param1: ICustomDataInput): void {
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameRolePlayPlayerFightFriendlyRequestedMessage.fightId.');
        }
        this.sourceId = param1.readVarUhInt();
        if (this.sourceId < 0) {
            throw new Error('Forbidden value (' + this.sourceId + ') on element of GameRolePlayPlayerFightFriendlyRequestedMessage.sourceId.');
        }
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element of GameRolePlayPlayerFightFriendlyRequestedMessage.targetId.');
        }

    }
}

export = GameRolePlayPlayerFightFriendlyRequestedMessage;
