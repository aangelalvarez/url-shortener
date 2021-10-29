const getDateTime = () => {
    const date = new Date();
    const day = date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate();
    const month = date.getUTCMonth() + 1 < 10 ? "0" + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours();
    const minutes = date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes();
    const seconds = date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds() < 10 ? "00" + date.getUTCMilliseconds() : (date.getUTCMilliseconds() < 100 ? "0" + date.getUTCMilliseconds() : date.getUTCMilliseconds());
    // a ? b : (c ? d : e)
    const currDateTime = `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}:${milliseconds}`;
    return currDateTime;
};

const getDate = () => {
    const date = new Date();
    const day = date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate();
    const month = date.getUTCMonth() + 1 < 10 ? "0" + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const currDate = `${day}/${month}/${year}`;
    return currDate;
};

const getTime = () => {
    const date = new Date();
    const hours = date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours();
    const minutes = date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes();
    const seconds = date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds() < 10 ? "00" + date.getUTCMilliseconds() : (date.getUTCMilliseconds() < 100 ? "0" + date.getUTCMilliseconds() : date.getUTCMilliseconds());
    // a ? b : (c ? d : e)
    const currTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    return currTime;
};

export { getDate, getTime, getDateTime };