/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameRolePlayShowActorMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5632;

    informations: GameRolePlayActorInformations;

    constructor() {
        this.informations = new GameRolePlayActorInformations();
        super();
    }

    public getMessageId(): number {
        return GameRolePlayShowActorMessage.ID;
    }

    public reset(): void {
        this.informations = new GameRolePlayActorInformations();
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
        this.serializeAs_GameRolePlayShowActorMessage(param1);
    }

    public serializeAs_GameRolePlayShowActorMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.informations.getTypeId());
        this.informations.serialize(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayShowActorMessage(param1);
    }

    public deserializeAs_GameRolePlayShowActorMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readUnsignedShort();
        this.informations = <GameRolePlayActorInformations>ProtocolTypeManager.getInstance(GameRolePlayActorInformations, _loc2_);
        this.informations.deserialize(param1);

    }
}

export = GameRolePlayShowActorMessage;
