export function isMultipleOf(value: number, factor: number) {
    return function (): boolean {
        return value % factor === 0;
    };
}