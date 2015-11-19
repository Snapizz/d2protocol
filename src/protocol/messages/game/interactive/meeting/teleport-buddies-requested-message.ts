/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class TeleportBuddiesRequestedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6302;

    dungeonId: number;
    inviterId: number;
    invalidBuddiesIds: number[];

    constructor() {
        this.dungeonId = 0;
        this.inviterId = 0;
        this.invalidBuddiesIds = [];
        super();
    }

    public getMessageId(): number {
        return TeleportBuddiesRequestedMessage.ID;
    }

    public reset(): void {
        this.dungeonId = 0;
        this.inviterId = 0;
        this.invalidBuddiesIds = [];
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
        this.serializeAs_TeleportBuddiesRequestedMessage(param1);
    }

    public serializeAs_TeleportBuddiesRequestedMessage(param1: ICustomDataOutput): void {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        if (this.inviterId < 0) {
            throw new Error('Forbidden value (' + this.inviterId + ') on element inviterId.');
        }
        param1.writeVarInt(this.inviterId);
        param1.writeShort(this.invalidBuddiesIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.invalidBuddiesIds.length) {
            if (this.invalidBuddiesIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.invalidBuddiesIds[_loc2_] + ') on element 3 (starting at 1) of invalidBuddiesIds.');
            }
            param1.writeVarInt(this.invalidBuddiesIds[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TeleportBuddiesRequestedMessage(param1);
    }

    public deserializeAs_TeleportBuddiesRequestedMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of TeleportBuddiesRequestedMessage.dungeonId.');
        }
        this.inviterId = param1.readVarUhInt();
        if (this.inviterId < 0) {
            throw new Error('Forbidden value (' + this.inviterId + ') on element of TeleportBuddiesRequestedMessage.inviterId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of invalidBuddiesIds.');
            }
            this.invalidBuddiesIds.push(_loc4_);
            _loc3_++;
        }

    }
}

export = TeleportBuddiesRequestedMessage;
