function cdefine(blocks, opts) {

    opts = opts || {};

    var prefix = opts.prefix || '';
    
    if (!Array.isArray(blocks)) {
        blocks = [blocks];
    }

    function v(val) {
        if (opts.hex && (typeof val === 'number') && (Math.floor(val) === val)) {
            return '0x' + val.toString(16).toUpperCase();
        } else {
            return val;
        }
    }

    var str = '';

    blocks.forEach(function(block, ix) {

        if (ix > 0)
            str += "\n";

        Object.keys(block).forEach(function(k) {
            str += "#define " + prefix + k + " " + v(block[k]) + "\n";
        });

    });

    return str;

}

module.exports = cdefine;