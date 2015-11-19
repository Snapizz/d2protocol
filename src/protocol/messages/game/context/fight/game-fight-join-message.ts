/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightJoinMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 702;

    canBeCancelled: boolean;
    canSayReady: boolean;
    isFightStarted: boolean;
    timeMaxBeforeFightStart: number;
    fightType: number;

    constructor() {
        this.canBeCancelled = false;
        this.canSayReady = false;
        this.isFightStarted = false;
        this.timeMaxBeforeFightStart = 0;
        this.fightType = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightJoinMessage.ID;
    }

    public reset(): void {
        this.canBeCancelled = false;
        this.canSayReady = false;
        this.isFightStarted = false;
        this.timeMaxBeforeFightStart = 0;
        this.fightType = 0;
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
        this.serializeAs_GameFightJoinMessage(param1);
    }

    public serializeAs_GameFightJoinMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.canBeCancelled);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canSayReady);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isFightStarted);
        param1.writeByte(_loc2_);
        if (this.timeMaxBeforeFightStart < 0) {
            throw new Error('Forbidden value (' + this.timeMaxBeforeFightStart + ') on element timeMaxBeforeFightStart.');
        }
        param1.writeShort(this.timeMaxBeforeFightStart);
        param1.writeByte(this.fightType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightJoinMessage(param1);
    }

    public deserializeAs_GameFightJoinMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.canBeCancelled = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.canSayReady = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.isFightStarted = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.timeMaxBeforeFightStart = param1.readShort();
        if (this.timeMaxBeforeFightStart < 0) {
            throw new Error('Forbidden value (' + this.timeMaxBeforeFightStart + ') on element of GameFightJoinMessage.timeMaxBeforeFightStart.');
        }
        this.fightType = param1.readByte();
        if (this.fightType < 0) {
            throw new Error('Forbidden value (' + this.fightType + ') on element of GameFightJoinMessage.fightType.');
        }

    }
}

export = GameFightJoinMessage;
