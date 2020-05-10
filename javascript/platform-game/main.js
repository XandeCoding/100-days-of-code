var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Vec = /** @class */ (function () {
    function Vec(x, y) {
        this.x = x;
        this.y = y;
    }
    Vec.prototype.plus = function (other) {
        return new Vec(this.x + other.x, this.y + other.y);
    };
    Vec.prototype.times = function (factor) {
        return new Vec(this.x * factor, this.y * factor);
    };
    return Vec;
}());
var Level = /** @class */ (function () {
    function Level(plan) {
        var _this = this;
        var rows = plan.trim().split("\n").map(function (data) { return __spreadArrays(data); });
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];
        // Adicionar tipos
        this.rows = rows.map(function (row, y) {
            return row.map(function (ch, x) {
                var type = levelChars[ch];
                // Trocar por "type instanceof string"
                if (typeof type == "string")
                    return type;
                _this.startActors.push(type.create(new Vec(x, y), ch));
                return "empty";
            });
        });
    }
    return Level;
}());
var State = /** @class */ (function () {
    function State(level, actors, status) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }
    State.start = function (level) {
        return new State(level, level.startActors, "playing");
    };
    Object.defineProperty(State.prototype, "player", {
        get: function () {
            return this.actors.find(function (a) { return a.type == "player"; });
        },
        enumerable: true,
        configurable: true
    });
    return State;
}());
var Player = /** @class */ (function () {
    function Player(position, speed) {
        this.position = position;
        this.speed = speed;
        this.size = new Vec(0.8, 1.5);
    }
    Object.defineProperty(Player.prototype, "type", {
        get: function () { return "player"; },
        enumerable: true,
        configurable: true
    });
    Player.create = function (position) {
        return new Player(position.plus(new Vec(0, -0.5)), new Vec(0, 0));
    };
    return Player;
}());
var Lava = /** @class */ (function () {
    function Lava(position, speed, reset) {
        this.position = position;
        this.speed = speed;
        this.reset = reset;
        this.size = new Vec(1, 1);
    }
    Object.defineProperty(Lava.prototype, "type", {
        get: function () { return "lava"; },
        enumerable: true,
        configurable: true
    });
    Lava.create = function (position, ch) {
        if (ch === '=') {
            return new Lava(position, new Vec(2, 0));
        }
        else if (ch === '|') {
            return new Lava(position, new Vec(0, 2));
        }
        else if (ch === 'v') {
            return new Lava(position, new Vec(0, 3), position);
        }
    };
    return Lava;
}());
var Coin = /** @class */ (function () {
    function Coin(position, basePos, wobble) {
        this.position = position;
        this.basePos = basePos;
        this.wobble = wobble;
        this.size = new Vec(0.6, 0.6);
    }
    Object.defineProperty(Coin.prototype, "type", {
        get: function () { return "coin"; },
        enumerable: true,
        configurable: true
    });
    Coin.create = function (position) {
        var basePos = position.plus(new Vec(0.2, 0.1));
        return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
    };
    return Coin;
}());
// Constraints
var simpleLevelPlan = "\n......................\n..#................#..\n..#..............=.#..\n..#.........o.o....#..\n..#.@......#####...#..\n..#####............#..\n......#++++++++++++#..\n......##############..\n......................";
// Adicionar tipos nos constructors
// Adicionar os tipos de caracteres
var levelChars = {
    '.': 'empty', '#': 'wall', '+': 'lava',
    '@': Player, 'o': Coin,
    '=': Lava, '|': Lava, 'v': Lava
};
var simpleLevel = new Level(simpleLevelPlan);
console.log(simpleLevel.width + " by " + simpleLevel.height);
//# sourceMappingURL=main.js.map