/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightDispellableEffectExtendedInformations = require('../../../../types/game/action/fight/fight-dispellable-effect-extended-informations');
import GameActionMark = require('../../../../types/game/actions/fight/game-action-mark');
import Idol = require('../../../../types/game/idol/idol');

class GameFightSpectateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6069;

    effects: FightDispellableEffectExtendedInformations[];
    marks: GameActionMark[];
    gameTurn: number;
    fightStart: number;
    idols: Idol[];

    constructor() {
        this.effects = [];
        this.marks = [];
        this.gameTurn = 0;
        this.fightStart = 0;
        this.idols = [];
        super();
    }

    public getMessageId(): number {
        return GameFightSpectateMessage.ID;
    }

    public reset(): void {
        this.effects = [];
        this.marks = [];
        this.gameTurn = 0;
        this.fightStart = 0;
        this.idols = [];
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
        this.serializeAs_GameFightSpectateMessage(param1);
    }

    public serializeAs_GameFightSpectateMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.effects.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.effects.length) {
            (this.effects[_loc2_]).serializeAs_FightDispellableEffectExtendedInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.marks.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.marks.length) {
            (this.marks[_loc3_]).serializeAs_GameActionMark(param1);
            _loc3_++;
        }
        if (this.gameTurn < 0) {
            throw new Error('Forbidden value (' + this.gameTurn + ') on element gameTurn.');
        }
        param1.writeVarShort(this.gameTurn);
        if (this.fightStart < 0) {
            throw new Error('Forbidden value (' + this.fightStart + ') on element fightStart.');
        }
        param1.writeInt(this.fightStart);
        param1.writeShort(this.idols.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.idols.length) {
            (this.idols[_loc4_]).serializeAs_Idol(param1);
            _loc4_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightSpectateMessage(param1);
    }

    public deserializeAs_GameFightSpectateMessage(param1: ICustomDataInput): void {
        var _loc8_: FightDispellableEffectExtendedInformations = null;
        var _loc9_: GameActionMark = null;
        var _loc10_: Idol = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc8_ = new FightDispellableEffectExtendedInformations();
            _loc8_.deserialize(param1);
            this.effects.push(_loc8_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc9_ = new GameActionMark();
            _loc9_.deserialize(param1);
            this.marks.push(_loc9_);
            _loc5_++;
        }
        this.gameTurn = param1.readVarUhShort();
        if (this.gameTurn < 0) {
            throw new Error('Forbidden value (' + this.gameTurn + ') on element of GameFightSpectateMessage.gameTurn.');
        }
        this.fightStart = param1.readInt();
        if (this.fightStart < 0) {
            throw new Error('Forbidden value (' + this.fightStart + ') on element of GameFightSpectateMessage.fightStart.');
        }
        var _loc6_: number = param1.readUnsignedShort();
        var _loc7_: number = 0;
        while (_loc7_ < _loc6_) {
        _loc10_ = new Idol();
            _loc10_.deserialize(param1);
            this.idols.push(_loc10_);
            _loc7_++;
        }

    }
}

export = GameFightSpectateMessage;
