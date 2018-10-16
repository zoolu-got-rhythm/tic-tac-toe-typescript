interface Params {
    range?: number;
}

function randomHexColourGenerator(params: Params): string{
    let startingRange: number = params.range || 0;
    let hex: string = "#";
    for(let i: number = 0; i < 6; i++ ){
        hex += "0123456789abcdef".split("")[range(startingRange, 16)] as string;
    }
    console.log(hex);
    return hex;
}

export default randomHexColourGenerator;

function range(min: number, max: number): number{
    let scale: number = max - min;
    return <number>(min + Math.floor(Math.random() * scale));
}