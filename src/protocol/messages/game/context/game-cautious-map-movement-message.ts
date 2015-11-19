/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GameMapMovementMessage = require('./game-map-movement-message');

class GameCautiousMapMovementMessage extends GameMapMovementMessage {
    public static ID: number = 6497;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return GameCautiousMapMovementMessage.ID;
    }

    public reset(): void {

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
        this.serializeAs_GameCautiousMapMovementMessage(param1);
    }

    public serializeAs_GameCautiousMapMovementMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameMapMovementMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameCautiousMapMovementMessage(param1);
    }

    public deserializeAs_GameCautiousMapMovementMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = GameCautiousMapMovementMessage;
