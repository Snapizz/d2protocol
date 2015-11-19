/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');

class GameActionFightTackledMessage extends AbstractGameActionMessage {
    public static ID: number = 1004;

    tacklersIds: number[];

    constructor() {
        this.tacklersIds = [];
        super();
    }

    public getMessageId(): number {
        return GameActionFightTackledMessage.ID;
    }

    public reset(): void {
        this.tacklersIds = [];
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
        this.serializeAs_GameActionFightTackledMessage(param1);
    }

    public serializeAs_GameActionFightTackledMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeShort(this.tacklersIds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.tacklersIds.length) {
            param1.writeInt(this.tacklersIds[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightTackledMessage(param1);
    }

    public deserializeAs_GameActionFightTackledMessage(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
            this.tacklersIds.push(_loc4_);
            _loc3_++;
        }

    }
}

export = GameActionFightTackledMessage;
