/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightPlacementPositionRequestMessage = require('./game-fight-placement-position-request-message');

class GameFightPlacementSwapPositionsRequestMessage extends GameFightPlacementPositionRequestMessage {
    public static ID: number = 6541;

    requestedId: number;

    constructor() {
        this.requestedId = 0;
        super();
    }

    public getMessageId(): number {
        return GameFightPlacementSwapPositionsRequestMessage.ID;
    }

    public reset(): void {
        this.requestedId = 0;
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
        this.serializeAs_GameFightPlacementSwapPositionsRequestMessage(param1);
    }

    public serializeAs_GameFightPlacementSwapPositionsRequestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightPlacementPositionRequestMessage(param1);
        param1.writeInt(this.requestedId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightPlacementSwapPositionsRequestMessage(param1);
    }

    public deserializeAs_GameFightPlacementSwapPositionsRequestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.requestedId = param1.readInt();

    }
}

export = GameFightPlacementSwapPositionsRequestMessage;
