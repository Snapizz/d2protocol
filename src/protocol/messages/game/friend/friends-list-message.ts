/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import FriendInformations = require('../../../types/game/friend/friend-informations');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class FriendsListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 4002;

    friendsList: FriendInformations[];

    constructor() {
        this.friendsList = [];
        super();
    }

    public getMessageId(): number {
        return FriendsListMessage.ID;
    }

    public reset(): void {
        this.friendsList = [];
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
        this.serializeAs_FriendsListMessage(param1);
    }

    public serializeAs_FriendsListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.friendsList.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.friendsList.length) {
            param1.writeShort((this.friendsList[_loc2_]).getTypeId());
            (this.friendsList[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FriendsListMessage(param1);
    }

    public deserializeAs_FriendsListMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: FriendInformations = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <FriendInformations>ProtocolTypeManager.getInstance(FriendInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.friendsList.push(_loc5_);
            _loc3_++;
        }

    }
}

export = FriendsListMessage;
