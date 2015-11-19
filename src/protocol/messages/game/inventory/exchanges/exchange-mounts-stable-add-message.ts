/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MountClientData = require('../../../../types/game/mount/mount-client-data');

class ExchangeMountsStableAddMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6555;

    mountDescription: MountClientData[];

    constructor() {
        this.mountDescription = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeMountsStableAddMessage.ID;
    }

    public reset(): void {
        this.mountDescription = [];
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
        this.serializeAs_ExchangeMountsStableAddMessage(param1);
    }

    public serializeAs_ExchangeMountsStableAddMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.mountDescription.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.mountDescription.length) {
            (this.mountDescription[_loc2_]).serializeAs_MountClientData(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeMountsStableAddMessage(param1);
    }

    public deserializeAs_ExchangeMountsStableAddMessage(param1: ICustomDataInput): void {
        var _loc4_: MountClientData = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new MountClientData();
            _loc4_.deserialize(param1);
            this.mountDescription.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeMountsStableAddMessage;
