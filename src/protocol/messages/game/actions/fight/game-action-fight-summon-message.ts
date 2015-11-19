/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./../abstract-game-action-message');
import GameFightFighterInformations = require('../../../../types/game/context/fight/game-fight-fighter-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameActionFightSummonMessage extends AbstractGameActionMessage {
    public static ID: number = 5825;

    summon: GameFightFighterInformations;

    constructor() {
        this.summon = new GameFightFighterInformations();
        super();
    }

    public getMessageId(): number {
        return GameActionFightSummonMessage.ID;
    }

    public reset(): void {
        this.summon = new GameFightFighterInformations();
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
        this.serializeAs_GameActionFightSummonMessage(param1);
    }

    public serializeAs_GameActionFightSummonMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeShort(this.summon.getTypeId());
        this.summon.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionFightSummonMessage(param1);
    }

    public deserializeAs_GameActionFightSummonMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        this.summon = <GameFightFighterInformations>ProtocolTypeManager.getInstance(GameFightFighterInformations, _loc2_);
        this.summon.deserialize(param1);

    }
}

export = GameActionFightSummonMessage;
