/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import GameContextActorInformations = require('../../../../../types/game/context/game-context-actor-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class GameFightRefreshFighterMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6309;

    informations: GameContextActorInformations;

    constructor() {
        this.informations = new GameContextActorInformations();
        super();
    }

    public getMessageId(): number {
        return GameFightRefreshFighterMessage.ID;
    }

    public reset(): void {
        this.informations = new GameContextActorInformations();
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
        this.serializeAs_GameFightRefreshFighterMessage(param1);
    }

    public serializeAs_GameFightRefreshFighterMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.informations.getTypeId());
        this.informations.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightRefreshFighterMessage(param1);
    }

    public deserializeAs_GameFightRefreshFighterMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.informations = <GameContextActorInformations>ProtocolTypeManager.getInstance(GameContextActorInformations, _loc2_);
        this.informations.deserialize(param1);

    }
}

export = GameFightRefreshFighterMessage;
