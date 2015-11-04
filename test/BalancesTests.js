chai.should();

describe("Balances", function () {

    it("should be empty", function () {
        var balances = new Balances();
        balances.isEmpty().should.equal(true);
    });

    it("should add new balance", function () {
        var balances = new Balances();
        balances.add(1, 50);
        balances.isEmpty().should.equal(false);
    });

    it("should return RUR balance with one rur", function () {
        var balances = new Balances();
        balances.add(1, 50);
        var rurs = balances.getAmount(1);
        rurs.should.equal(50)
    });

    it("should return RUR balance with two rurs", function () {
        var balances = new Balances();
        balances.add(1, 50);
        balances.add(1, 1);
        var rurs = balances.getAmount(1);
        rurs.should.equal(51)
    });

    it("should return correct RUR balance after minus", function () {
        var balances = new Balances();
        balances.add(1, 50);
        balances.minus(1, 1);
        var rurs = balances.getAmount(1);
        rurs.should.equal(49);
    });

    it("test chains add calling", function () {
        var balances = new Balances();
        balances.add(1, 50).add(1, 1);
        var rurs = balances.getAmount(1);
        rurs.should.equal(51);
    });

    it("test chains minus calling", function () {
        var balances = new Balances();
        balances.add(1, 50).minus(1, 34);
        var rurs = balances.getAmount(1);

        rurs.should.equal(16);
    });

    it("get info from toString()", function () {
        var balances = new Balances();
        balances.add(Balances.CODE_RUR, 99);
        var rurs = balances.get(Balances.CODE_RUR);
        rurs.should.equal("99 RUR");
    });


    it("should save RUR and EUR balances", function () {
        var balances = new Balances();
        balances.add(1, 50);
        balances.add(2, 1);
        balances.items.length.should.equal(2);
    });

    it("should log info about balance", function(){
        //console.log('—ÛÏÏ‡: '+new Balances({643:50,810:10},{980:6},{643:7}))
        // —ÛÏÏ‡: 57 RUR, 10 USD, 6 EUR
        var b = new Balances({643:50,810:10},{980:6},{643:7});
        console.log(b.items);
        b.toString().should.equal("57 RUR, 10 USD, 6 EUR");

    });

    it("get sum info", function(){

        var sum = Balances.sum({643:50, 810:10},{980:6},{643:7});
        //Object {643: 57, 840: 10, 980: 6}
        console.log(sum);

        sum.should.to.deep.equal({643: 57, 810: 10, 980: 6});
    })
});