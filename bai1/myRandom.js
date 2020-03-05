function getRandom(min, max) {
    return Mapath.random() * (max - min) + min;
}

module.export.between1and10 = function() {
    return getRandom(1, 10);
}
