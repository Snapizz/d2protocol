/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildMember = require('../../../types/game/guild/guild-member');

class GuildInformationsMembersMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5558;

    members: GuildMember[];

    constructor() {
        this.members = [];
        super();
    }

    public getMessageId(): number {
        return GuildInformationsMembersMessage.ID;
    }

    public reset(): void {
        this.members = [];
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
        this.serializeAs_GuildInformationsMembersMessage(param1);
    }

    public serializeAs_GuildInformationsMembersMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.members.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.members.length) {
            (this.members[_loc2_]).serializeAs_GuildMember(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInformationsMembersMessage(param1);
    }

    public deserializeAs_GuildInformationsMembersMessage(param1: ICustomDataInput): void {
        var _loc4_: GuildMember = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new GuildMember();
            _loc4_.deserialize(param1);
            this.members.push(_loc4_);
            _loc3_++;
        }

    }
}

export = GuildInformationsMembersMessage;
