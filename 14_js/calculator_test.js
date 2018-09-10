QUnit.test("calc can add numbers", function(assert) {
    assert.equal(calculate(2,2,"+"), 4);
})

QUnit.test("calc can substract numbers", function(assert) {
    assert.equal(calculate(2,1,"-"), 1);
})


QUnit.test("calc can multiply numbers", function(assert) {
    assert.equal(calculate(2,2,"*"), 4);
})


QUnit.test("calc can divide numbers", function(assert) {
    assert.equal(calculate(2,2,"/"), 1);
})

QUnit.test("calc can return error if divide by 0", function(assert) {
    assert.equal(calculate(2,0,"/"), "error");
})