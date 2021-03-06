class Ul {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.multiply = 0;
        this.index = index;
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y - 2],
            [this.x, this.y + 2],
            [this.x+1, this.y - 2],
            [this.x+1, this.y + 2],
            [this.x+2, this.y - 2],
            [this.x +2, this.y - 1],
            [this.x+2, this.y],
            [this.x+2, this.y +1],
            [this.x+2, this.y + 2],
        ];

    }
    chooseCell(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in ulArr) {
            if (this.x == ulArr[i].x && this.y == ulArr[i].y) {
                ulArr.splice(i, 1);
                break;
            }
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            if(this.energy < 0 || matrix[this.y][this.x] == 22) {
                this.die()
            }
        }
    }

}