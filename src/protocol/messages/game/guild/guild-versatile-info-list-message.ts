/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildVersatileInformations = require('../../../types/game/social/guild-versatile-informations');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class GuildVersatileInfoListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6435;

    guilds: GuildVersatileInformations[];

    constructor() {
        this.guilds = [];
        super();
    }

    public getMessageId(): number {
        return GuildVersatileInfoListMessage.ID;
    }

    public reset(): void {
        this.guilds = [];
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
        this.serializeAs_GuildVersatileInfoListMessage(param1);
    }

    public serializeAs_GuildVersatileInfoListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.guilds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.guilds.length) {
            param1.writeShort((this.guilds[_loc2_]).getTypeId());
            (this.guilds[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildVersatileInfoListMessage(param1);
    }

    public deserializeAs_GuildVersatileInfoListMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: GuildVersatileInformations = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <GuildVersatileInformations>ProtocolTypeManager.getInstance(GuildVersatileInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.guilds.push(_loc5_);
            _loc3_++;
        }

    }
}

export = GuildVersatileInfoListMessage;
