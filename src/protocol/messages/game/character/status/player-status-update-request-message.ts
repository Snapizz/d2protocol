/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import PlayerStatus = require('../../../../types/game/character/status/player-status');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class PlayerStatusUpdateRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6387;

    status: PlayerStatus;

    constructor() {
        this.status = new PlayerStatus();
        super();
    }

    public getMessageId(): number {
        return PlayerStatusUpdateRequestMessage.ID;
    }

    public reset(): void {
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
        this.serializeAs_PlayerStatusUpdateRequestMessage(param1);
    }

    public serializeAs_PlayerStatusUpdateRequestMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PlayerStatusUpdateRequestMessage(param1);
    }

    public deserializeAs_PlayerStatusUpdateRequestMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);

    }
}

export = PlayerStatusUpdateRequestMessage;
