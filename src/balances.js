function Balances() {

    this.items = [];

    for (var i = 0; i < arguments.length; i++) {

        var b = arguments[i];

        for (code in b) {

            var o = {};
            o[code] = b[code];

            this.items.push(o)
        }
    }
    this.isEmpty = function () {
        return this.items.length === 0;
    };

    this.get = function (code) {
        var sum = 0;

        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].code === code) {

                sum += this.items[i].amount;
            }
        }
        return sum+" "+ this.codeToWord(code);
    };

    this.add = function (code, amount) {
        this.items.push({code: code, amount: amount});
        return this;
    };

    this.minus = function (code, amount) {
        this.add(code, -amount);
        return this;
    };

    this.codeToWord = function (code) {

        if (code == Balances.CODE_RUR) {
            return "RUR";
        }

        if (code == Balances.CODE_USD) {
            return "USD";
        }

        if (code == Balances.CODE_EUR) {
            return "EUR";
        }

        return code;
    };

    this.getAmount = function (code) {

        var res = 0;

        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].code === code) {
                res += this.items[i].amount;
            }
        }
        return res;
    }
}

Balances.sum = function () {

    var sum = {};

    for (var i = 0; i < arguments.length; i++) {

        var b = arguments[i];

        for (code in b) {

            if (sum.hasOwnProperty(code)) {
                sum[code] += b[code];
                continue;
            }

            sum[code] = b[code];
        }
    }

    return sum;
};

Balances.prototype.toString = function () {

    var res = "";

    var rurs = 0;
    var eurs = 0;
    var usds = 0;

    for (var i = 0; i < this.items.length; i++) {

        for (p in this.items[i]) {

            if (p == Balances.CODE_USD)
                usds += this.items[i][p];

            if (p == Balances.CODE_EUR)
                eurs += this.items[i][p];

            if (p == Balances.CODE_RUR)
                rurs += this.items[i][p];
        }
    }

    return rurs + " RUR, " + usds + " USD, " + eurs + " EUR";
};

Balances.CODE_RUR=643;
Balances.CODE_EUR=980;
Balances.CODE_USD=810;