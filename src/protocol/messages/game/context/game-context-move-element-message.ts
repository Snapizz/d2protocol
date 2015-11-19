/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityMovementInformations = require('../../../types/game/context/entity-movement-informations');

class GameContextMoveElementMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 253;

    movement: EntityMovementInformations;

    constructor() {
        this.movement = new EntityMovementInformations();
        super();
    }

    public getMessageId(): number {
        return GameContextMoveElementMessage.ID;
    }

    public reset(): void {
        this.movement = new EntityMovementInformations();
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
        this.serializeAs_GameContextMoveElementMessage(param1);
    }

    public serializeAs_GameContextMoveElementMessage(param1: ICustomDataOutput): void {
        this.movement.serializeAs_EntityMovementInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameContextMoveElementMessage(param1);
    }

    public deserializeAs_GameContextMoveElementMessage(param1: ICustomDataInput): void {
        this.movement = new EntityMovementInformations();
        this.movement.deserialize(param1);

    }
}

export = GameContextMoveElementMessage;
