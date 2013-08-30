# cdefine

    cdefine([
        { FOO: 0xFF, BAR: 0xF0 },
        { TRUE: 'FALSE' }
    ], {hex: true});

Yields

    #define FOO 0xFF
    #define BAR 0xF0

    #define TRUE FALSE

Have fun! <3