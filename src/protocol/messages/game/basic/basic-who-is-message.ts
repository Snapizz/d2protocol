/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AbstractSocialGroupInfos = require('../../../types/game/social/abstract-social-group-infos');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class BasicWhoIsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 180;

    self: boolean;
    position: number;
    accountNickname: string;
    accountId: number;
    playerName: string;
    playerId: number;
    areaId: number;
    socialGroups: AbstractSocialGroupInfos[];
    verbose: boolean;
    playerState: number;

    constructor() {
        this.self = false;
        this.position = -1;
        this.accountNickname = '';
        this.accountId = 0;
        this.playerName = '';
        this.playerId = 0;
        this.areaId = 0;
        this.socialGroups = [];
        this.verbose = false;
        this.playerState = 99;
        super();
    }

    public getMessageId(): number {
        return BasicWhoIsMessage.ID;
    }

    public reset(): void {
        this.self = false;
        this.position = -1;
        this.accountNickname = '';
        this.accountId = 0;
        this.playerName = '';
        this.playerId = 0;
        this.areaId = 0;
        this.socialGroups = [];
        this.verbose = false;
        this.playerState = 99;
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
        this.serializeAs_BasicWhoIsMessage(param1);
    }

    public serializeAs_BasicWhoIsMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.self);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.verbose);
        param1.writeByte(_loc2_);
        param1.writeByte(this.position);
        param1.writeUTF(this.accountNickname);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        param1.writeUTF(this.playerName);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeShort(this.areaId);
        param1.writeShort(this.socialGroups.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.socialGroups.length) {
            param1.writeShort((this.socialGroups[_loc3_]).getTypeId());
            (this.socialGroups[_loc3_]).serialize(param1);
            _loc3_++;
        }
        param1.writeByte(this.playerState);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicWhoIsMessage(param1);
    }

    public deserializeAs_BasicWhoIsMessage(param1: ICustomDataInput): void {
        var _loc5_: number = 0;
        var _loc6_: AbstractSocialGroupInfos = null;
        var _loc2_: number = param1.readByte();
        this.self = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.verbose = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.position = param1.readByte();
        this.accountNickname = param1.readUTF();
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of BasicWhoIsMessage.accountId.');
        }
        this.playerName = param1.readUTF();
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of BasicWhoIsMessage.playerId.');
        }
        this.areaId = param1.readShort();
        var _loc3_: number = param1.readUnsignedShort();
        var _loc4_: number = 0;
        while (_loc4_ < _loc3_) {
        _loc5_ = param1.readUnsignedShort();
            _loc6_ = <AbstractSocialGroupInfos>ProtocolTypeManager.getInstance(AbstractSocialGroupInfos, _loc5_);
            _loc6_.deserialize(param1);
            this.socialGroups.push(_loc6_);
            _loc4_++;
        }
        this.playerState = param1.readByte();
        if (this.playerState < 0) {
            throw new Error('Forbidden value (' + this.playerState + ') on element of BasicWhoIsMessage.playerState.');
        }

    }
}

export = BasicWhoIsMessage;
