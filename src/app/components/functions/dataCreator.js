export default function dataCreator(side , startPoint) {

    let cells = [];
    
    let num = 1;
    for (let i = 1; i <= side; i++) {
        let rowArray = [];
        for (let cell = 1; cell <= side; cell++) {
            let row = {
                row: i,
                cell: cell,
                num: num,
                isStart:false ,
                isEnd: false,
                isChoose:false ,
                show :false ,
            };
            if  (num === startPoint) row.isStart= true;

            rowArray.push(row);
            num = num + 1;

        }
        cells.push(rowArray);
    }

    return cells;

}