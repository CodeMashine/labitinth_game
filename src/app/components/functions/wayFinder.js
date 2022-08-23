export default function wayFinder(array, steps, side) {
    const copy = Object.assign([], array);
    // console.log(side) ;
    const stack = copy.flat();
    let point = Object.assign({}, stack.find(item => item.isStart));
    let way = [];

    for (let i = 0; i < steps; i++) {
        let semiresult = [];

        if (point.row === 1) {
            semiresult.push('down');
        } else if (point.row === side) {
            semiresult.push('up');
        } else {
            semiresult.push("up");
            semiresult.push("down");
        }


        if (point.cell === 1) {
            semiresult.push('right');
        } else if (point.cell === side) {
            semiresult.push("left");
        } else {
            semiresult.push("left");
            semiresult.push('right');
        }

        let step = semiresult[Math.floor(Math.random() * semiresult.length)];

        if (step === "up") {
            point.row = point.row - 1;
            point.num = point.num - side;
        } else if (step === "down") {
            point.row = point.row + 1;
            point.num = point.num + side;
        } else if (step === "right") {
            point.cell = point.cell + 1;
            point.num = point.num + 1;
        } else if (step === "left") {
            point.cell = point.cell - 1;
            point.num = point.num - 1;
        }

        way.push(step);
    }

    
    let newArray = array.map(row=>{
        return row.map(cell=>{
            if(cell.num === point.num) return {...cell , isEnd:true} ;
            return cell ;
        })
    })
    
    // return way;
    return [ way , newArray ];
    // return [ way , point.num ];
}