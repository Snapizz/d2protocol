/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import GameFightFighterInformations = require('../../../../../types/game/context/fight/game-fight-fighter-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class GameFightShowFighterMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5864;

    informations: GameFightFighterInformations;

    constructor() {
        this.informations = new GameFightFighterInformations();
        super();
    }

    public getMessageId(): number {
        return GameFightShowFighterMessage.ID;
    }

    public reset(): void {
        this.informations = new GameFightFighterInformations();
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
        this.serializeAs_GameFightShowFighterMessage(param1);
    }

    public serializeAs_GameFightShowFighterMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.informations.getTypeId());
        this.informations.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightShowFighterMessage(param1);
    }

    public deserializeAs_GameFightShowFighterMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.informations = <GameFightFighterInformations>ProtocolTypeManager.getInstance(GameFightFighterInformations, _loc2_);
        this.informations.deserialize(param1);

    }
}

export = GameFightShowFighterMessage;
