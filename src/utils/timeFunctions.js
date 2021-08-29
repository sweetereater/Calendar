export const getHoursAndMinutesFromTime = (time) => time.split(':').map(value => Number(value));

export const getTimeInSeconds = (hours, minutes, seconds = 0) => hours * 3600 + minutes * 60 + seconds

export const getCurrentTime = () => {
    const time = new Date();
    const curHours = time.getHours();
    const curMinutes = time.getMinutes();
    const curSeconds = time.getSeconds();

    return getTimeInSeconds(curHours, curMinutes, curSeconds);
}