/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import GameServerInformations = require('../../types/connection/game-server-informations');

class ServersListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 30;

    servers: GameServerInformations[];
    alreadyConnectedToServerId: number;
    canCreateNewCharacter: boolean;

    constructor() {
        this.servers = [];
        this.alreadyConnectedToServerId = 0;
        this.canCreateNewCharacter = false;
        super();
    }

    public getMessageId(): number {
        return ServersListMessage.ID;
    }

    public reset(): void {
        this.servers = [];
        this.alreadyConnectedToServerId = 0;
        this.canCreateNewCharacter = false;
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
        this.serializeAs_ServersListMessage(param1);
    }

    public serializeAs_ServersListMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.servers.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.servers.length) {
            (this.servers[_loc2_]).serializeAs_GameServerInformations(param1);
            _loc2_++;
        }
        if (this.alreadyConnectedToServerId < 0) {
            throw new Error('Forbidden value (' + this.alreadyConnectedToServerId + ') on element alreadyConnectedToServerId.');
        }
        param1.writeVarShort(this.alreadyConnectedToServerId);
        param1.writeBoolean(this.canCreateNewCharacter);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ServersListMessage(param1);
    }

    public deserializeAs_ServersListMessage(param1: ICustomDataInput): void {
        var _loc4_: GameServerInformations = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new GameServerInformations();
            _loc4_.deserialize(param1);
            this.servers.push(_loc4_);
            _loc3_++;
        }
        this.alreadyConnectedToServerId = param1.readVarUhShort();
        if (this.alreadyConnectedToServerId < 0) {
            throw new Error('Forbidden value (' + this.alreadyConnectedToServerId + ') on element of ServersListMessage.alreadyConnectedToServerId.');
        }
        this.canCreateNewCharacter = param1.readBoolean();

    }
}

export = ServersListMessage;
