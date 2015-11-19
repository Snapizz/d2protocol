/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import GameServerInformations = require('../../types/connection/game-server-informations');

class ServerStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 50;

    server: GameServerInformations;

    constructor() {
        this.server = new GameServerInformations();
        super();
    }

    public getMessageId(): number {
        return ServerStatusUpdateMessage.ID;
    }

    public reset(): void {
        this.server = new GameServerInformations();
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
        this.serializeAs_ServerStatusUpdateMessage(param1);
    }

    public serializeAs_ServerStatusUpdateMessage(param1: ICustomDataOutput): void {
        this.server.serializeAs_GameServerInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServerStatusUpdateMessage(param1);
    }

    public deserializeAs_ServerStatusUpdateMessage(param1: ICustomDataInput): void {
        this.server = new GameServerInformations();
        this.server.deserialize(param1);

    }
}

export = ServerStatusUpdateMessage;
