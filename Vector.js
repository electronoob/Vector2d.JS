class Vector {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    sub (b) {
        this.x -= b.x;
        this.y -= b.y;
    }
    add (b) {
        this.x += b.x;
        this.y += b.y;
    }
    heading () {
        return Math.atan2(this.y, this.x);
    }
    mag () {
        return Math.sqrt(Math.pow(Math.abs(this.x), 2) + Math.pow(Math.abs(this.y), 2));
    }
    magsq () {
        return Math.pow(Math.abs(this.x), 2) + Math.pow(Math.abs(this.y), 2);
    }
    div (value) {
        this.x /= value;
        this.y /= value;
    }
    mul (value) {
        this.x *= value;
        this.y *= value;
    }
    setMag (value) {
        var m = this.mag();
        if (m !== 0 && m != 1) {
            this.div(m);
        }
        this.mul(value);
    }
    hypot (b) {
        return Math.hypot(this.x - b.x, this.y - b.y);
    }
    lerp (b, step) {
        var a = new Vector(this.x, this.y);
        b.sub(a);
        b.mul(step);
        b.add(a);
        return b;
    }
    toDegrees (o) {
        return o * 180 / Math.PI;
    }
    toRadians (o) {
        return (Math.PI / 180) * o;
    }
    rotate (o) {
        var tmp_heading = this.heading() + o;
        var tmp_mag = this.mag();
        this.x = Math.cos(tmp_heading) * tmp_mag;
        this.y = Math.sin(tmp_heading) * tmp_mag;
    }
}
