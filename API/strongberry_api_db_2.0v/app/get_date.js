function getDateTime() {
    let $date = new Date();

    let year = $date.getFullYear();
    let month = $date.getMonth();
    let date = $date.getDate();

    let hour = $date.getHours();
    let min = $date.getMinutes();
    let sec = $date.getSeconds();

    let dbDateTime = `${year}-${month}-${date} ${hour}:${min}:${sec}`;

    return dbDateTime;
}

module.exports = getDateTime;
