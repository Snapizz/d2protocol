/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightExternalInformations = require('../../../../types/game/context/fight/fight-external-informations');

class MapRunningFightListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5743;

    fights: FightExternalInformations[];

    constructor() {
        this.fights = [];
        super();
    }

    public getMessageId(): number {
        return MapRunningFightListMessage.ID;
    }

    public reset(): void {
        this.fights = [];
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
        this.serializeAs_MapRunningFightListMessage(param1);
    }

    public serializeAs_MapRunningFightListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.fights.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.fights.length) {
            (this.fights[_loc2_]).serializeAs_FightExternalInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapRunningFightListMessage(param1);
    }

    public deserializeAs_MapRunningFightListMessage(param1: ICustomDataInput): void {
        var _loc4_: FightExternalInformations = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new FightExternalInformations();
            _loc4_.deserialize(param1);
            this.fights.push(_loc4_);
            _loc3_++;
        }

    }
}

export = MapRunningFightListMessage;
