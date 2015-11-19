/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import PlayerStatus = require('../../../../types/game/character/status/player-status');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class PlayerStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6386;

    accountId: number;
    playerId: number;
    status: PlayerStatus;

    constructor() {
        this.accountId = 0;
        this.playerId = 0;
        this.status = new PlayerStatus();
        super();
    }

    public getMessageId(): number {
        return PlayerStatusUpdateMessage.ID;
    }

    public reset(): void {
        this.accountId = 0;
        this.playerId = 0;
        this.status = new PlayerStatus();
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
        this.serializeAs_PlayerStatusUpdateMessage(param1);
    }

    public serializeAs_PlayerStatusUpdateMessage(param1: ICustomDataOutput): void {
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PlayerStatusUpdateMessage(param1);
    }

    public deserializeAs_PlayerStatusUpdateMessage(param1: ICustomDataInput): void {
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of PlayerStatusUpdateMessage.accountId.');
        }
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of PlayerStatusUpdateMessage.playerId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);

    }
}

export = PlayerStatusUpdateMessage;
