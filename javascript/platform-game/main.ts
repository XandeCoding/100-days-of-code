class Vec {
    x: number
    y: number

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y)
    }

    times(factor) {
        return new Vec(this.x * factor, this.y * factor)
    }
}

class Level {
    height: number
    width: number
    rows: Array<number>
    startActors: Array<any>

    constructor(plan) {
        let rows = plan.trim().split("\n").map(data => [...data])
        this.height = rows.length
        this.width = rows[0].length
        this.startActors = []

        // Adicionar tipos
        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch];
                // Trocar por "type instanceof string"
                if (typeof type == "string") return type
                this.startActors.push(
                    type.create(new Vec(x, y), ch));                
                return "empty";
            })
        })
    }
}

class State {
    // Trocar os anys
    level: Level
    actors: any
    status: any

    constructor(level, actors, status) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    static start(level) {
        return new State(level, level.startActors, "playing")
    }

    get player() {
        return this.actors.find(a => a.type == "player")
    }
}

class Player {
    // Trocar os anys
    position: any
    speed: number
    size: Vec

    constructor(position, speed) {
        this.position = position
        this.speed = speed
        this.size = new Vec(0.8, 1.5)
    }

    get type() { return "player"}

    static create(position) {
        return new Player(position.plus(new Vec(0, -0.5)),
                          new Vec(0, 0))
    }
}

class Lava {
    position: any
    speed: number
    reset: number
    size: Vec

    constructor(position, speed, reset?) {
        this.position = position
        this.speed = speed
        this.reset = reset
        this.size = new Vec(1, 1)
    }

    get type() { return "lava" }

    static create(position, ch) {
        if (ch === '=') {
            return new Lava(position, new Vec(2, 0))
        }
        else if (ch === '|') {
            return new Lava(position, new Vec(0, 2))
        }
        else if (ch === 'v') {
            return new Lava(position, new Vec(0, 3), position)
        }
    }
}

class Coin {
    //  Trocar os any`s
    position: any
    basePos: any
    wobble: number
    size: Vec

    constructor(position, basePos, wobble) {
        this.position = position
        this.basePos = basePos
        this.wobble = wobble 
        this.size = new Vec(0.6, 0.6)
    }

    get type() { return "coin" }

    static create(position) {
        let basePos = position.plus(new Vec(0.2, 0.1))
        return new Coin(basePos, basePos,
                        Math.random() * Math.PI * 2)
    }
}
// Constraints

let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;
// Adicionar tipos nos constructors
// Adicionar os tipos de caracteres
const levelChars = {
    '.': 'empty', '#': 'wall', '+': 'lava',
     '@': Player, 'o': Coin,
     '=': Lava, '|': Lava, 'v': Lava
}

let simpleLevel = new Level(simpleLevelPlan)
console.log(`${ simpleLevel.width } by ${ simpleLevel.height}`)
