/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AccountHouseInformations = require('../../../../../types/game/house/account-house-informations');

class AccountHouseMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6315;

    houses: AccountHouseInformations[];

    constructor() {
        this.houses = [];
        super();
    }

    public getMessageId(): number {
        return AccountHouseMessage.ID;
    }

    public reset(): void {
        this.houses = [];
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
        this.serializeAs_AccountHouseMessage(param1);
    }

    public serializeAs_AccountHouseMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.houses.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.houses.length) {
            (this.houses[_loc2_]).serializeAs_AccountHouseInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AccountHouseMessage(param1);
    }

    public deserializeAs_AccountHouseMessage(param1: ICustomDataInput): void {
        var _loc4_: AccountHouseInformations = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new AccountHouseInformations();
            _loc4_.deserialize(param1);
            this.houses.push(_loc4_);
            _loc3_++;
        }

    }
}

export = AccountHouseMessage;
