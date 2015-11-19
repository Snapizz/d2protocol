/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import UpdateMountBoost = require('../../../../types/game/mount/update-mount-boost');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class UpdateMountBoostMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6179;

    rideId: number;
    boostToUpdateList: UpdateMountBoost[];

    constructor() {
        this.rideId = 0;
        this.boostToUpdateList = [];
        super();
    }

    public getMessageId(): number {
        return UpdateMountBoostMessage.ID;
    }

    public reset(): void {
        this.rideId = 0;
        this.boostToUpdateList = [];
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
        this.serializeAs_UpdateMountBoostMessage(param1);
    }

    public serializeAs_UpdateMountBoostMessage(param1: ICustomDataOutput): void {
        param1.writeVarInt(this.rideId);
        param1.writeShort(this.boostToUpdateList.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.boostToUpdateList.length) {
            param1.writeShort((this.boostToUpdateList[_loc2_]).getTypeId());
            (this.boostToUpdateList[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_UpdateMountBoostMessage(param1);
    }

    public deserializeAs_UpdateMountBoostMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: UpdateMountBoost = null;
        this.rideId = param1.readVarInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <UpdateMountBoost>ProtocolTypeManager.getInstance(UpdateMountBoost, _loc4_);
            _loc5_.deserialize(param1);
            this.boostToUpdateList.push(_loc5_);
            _loc3_++;
        }

    }
}

export = UpdateMountBoostMessage;
