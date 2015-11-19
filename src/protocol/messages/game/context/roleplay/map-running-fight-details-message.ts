/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightFighterLightInformations = require('../../../../types/game/context/fight/game-fight-fighter-light-informations');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class MapRunningFightDetailsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5751;

    fightId: number;
    attackers: GameFightFighterLightInformations[];
    defenders: GameFightFighterLightInformations[];

    constructor() {
        this.fightId = 0;
        this.attackers = [];
        this.defenders = [];
        super();
    }

    public getMessageId(): number {
        return MapRunningFightDetailsMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.attackers = [];
        this.defenders = [];
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
        this.serializeAs_MapRunningFightDetailsMessage(param1);
    }

    public serializeAs_MapRunningFightDetailsMessage(param1: ICustomDataOutput): void {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        param1.writeShort(this.attackers.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.attackers.length) {
            param1.writeShort((this.attackers[_loc2_]).getTypeId());
            (this.attackers[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.defenders.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.defenders.length) {
            param1.writeShort((this.defenders[_loc3_]).getTypeId());
            (this.defenders[_loc3_]).serialize(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapRunningFightDetailsMessage(param1);
    }

    public deserializeAs_MapRunningFightDetailsMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: GameFightFighterLightInformations = null;
        var _loc8_: number = 0;
        var _loc9_: GameFightFighterLightInformations = null;
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of MapRunningFightDetailsMessage.fightId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUnsignedShort();
            _loc7_ = <GameFightFighterLightInformations>ProtocolTypeManager.getInstance(GameFightFighterLightInformations, _loc6_);
            _loc7_.deserialize(param1);
            this.attackers.push(_loc7_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc8_ = param1.readUnsignedShort();
            _loc9_ = <GameFightFighterLightInformations>ProtocolTypeManager.getInstance(GameFightFighterLightInformations, _loc8_);
            _loc9_.deserialize(param1);
            this.defenders.push(_loc9_);
            _loc5_++;
        }

    }
}

export = MapRunningFightDetailsMessage;
