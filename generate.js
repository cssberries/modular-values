var exports = module.exports = {};

exports.generateDimension = function (names, base, start, amount, mod, unit) {
    let dimensionSet = {};
    let value = start;
    for (let i = base; i < base + amount; i++) {
        // if (i === base) {
        //     value = 1;
        // }
        let name = names[i];
        let newValue = Math.ceil(value * mod);
        dimensionSet[name] = value + unit;
        value = newValue;
    }
    return dimensionSet;
}
exports.generateModulars = function (mod, base, amount) {
    let values = [];
    let value = Number;
    if (base <= 0) {
        let err = 'Error!: base should be greater than 0';
        console.log(err);
        return err;
    }
    if (mod <= 1) {
        let err = 'Error!: mod should be greater than 1';
        console.log(err);
        return err;
    }
    for (let i = 0; i < amount; i++) {
        if (i === 0) {
            value = base;
        }
        let newValue = Math.ceil(value * mod);
        values.push(value);
        value = newValue;
    }
    return values;
}
exports.getModulars = function (base, amount, modulars) {
    let modes = [];
    if (base < 0) {
        let err = 'Error!: base should be greater than 0';
        console.log(err);
        return err;
    }
    modes = modulars.slice(base, amount);
    console.log(modes);

    return modes;
}
// exports.getModulars(0,10, MODULARS.manualModulars);