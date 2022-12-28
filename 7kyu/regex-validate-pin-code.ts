export class Kata {
    static validatePin(pin: string): boolean {
        if(pin.length !== 4 && pin.length !== 6) return false;
        if(!/^\d+$/.test(pin)) return false;
        return true;
    }
}