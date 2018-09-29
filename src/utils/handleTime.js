export default function(n) {
    if(!n) return;
    const data = new Date(n * 1000);
    let month = data.getMonth();
    let day = data.getDate();
    let monthArr = [
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '七',
        '八',
        '九',
        '十',
        '十一',
        '十二',
    ];
    return [`${monthArr[month]}月`, day<10 ? `0${day}` : day];
}