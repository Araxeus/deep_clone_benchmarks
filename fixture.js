class Point {
    constructor(x, y, alive) {
        this.x = x;
        this.y = y;
        this.alive = alive;
    }

    toString() {
        return 'POINT' + this.x;
    }
}

const fixture = {
    i: 1,
    o: {
        a: [1, 2, 3, 4, 5],
        o: {
            s: 'test123',
            r: /aworw/g,
            d: new Date(),
            o: {
                i: 1898983759325,
                b: {},
                n: null
            },
            p: new Point(1, 2, true)
            // Since classes can't be cloned, all libraries just return the same object, except structuredClone which throws an error
            //c: Point
        },
        n: null
    },
    s: 'sdf',
    u: undefined
};

export default fixture;
