/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import StartupActionAddObject = require('../../../types/game/startup/startup-action-add-object');

class StartupActionAddMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6538;

    newAction: StartupActionAddObject;

    constructor() {
        this.newAction = new StartupActionAddObject();
        super();
    }

    public getMessageId(): number {
        return StartupActionAddMessage.ID;
    }

    public reset(): void {
        this.newAction = new StartupActionAddObject();
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
        this.serializeAs_StartupActionAddMessage(param1);
    }

    public serializeAs_StartupActionAddMessage(param1: ICustomDataOutput): void {
        this.newAction.serializeAs_StartupActionAddObject(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StartupActionAddMessage(param1);
    }

    public deserializeAs_StartupActionAddMessage(param1: ICustomDataInput): void {
        this.newAction = new StartupActionAddObject();
        this.newAction.deserialize(param1);

    }
}

export = StartupActionAddMessage;
