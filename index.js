function cdefine(blocks) {
    
    if (!Array.isArray(blocks)) {
        blocks = [blocks];
    }

    var str = '';

    blocks.forEach(function(block, ix) {

        if (ix > 0)
            str += "\n";

        Object.keys(block).forEach(function(k) {
            str += "#define " + k + " " + block[k] + "\n";
        });

    });

    return str;

}

module.exports = cdefine;