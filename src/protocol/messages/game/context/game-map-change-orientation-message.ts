/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ActorOrientation = require('../../../types/game/context/actor-orientation');

class GameMapChangeOrientationMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 946;

    orientation: ActorOrientation;

    constructor() {
        this.orientation = new ActorOrientation();
        super();
    }

    public getMessageId(): number {
        return GameMapChangeOrientationMessage.ID;
    }

    public reset(): void {
        this.orientation = new ActorOrientation();
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
        this.serializeAs_GameMapChangeOrientationMessage(param1);
    }

    public serializeAs_GameMapChangeOrientationMessage(param1: ICustomDataOutput): void {
        this.orientation.serializeAs_ActorOrientation(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameMapChangeOrientationMessage(param1);
    }

    public deserializeAs_GameMapChangeOrientationMessage(param1: ICustomDataInput): void {
        this.orientation = new ActorOrientation();
        this.orientation.deserialize(param1);

    }
}

export = GameMapChangeOrientationMessage;
