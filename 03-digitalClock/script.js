function getDate() {
    const date = new Date();
    // console.log(date);
    const dayOfWeek = date.toLocaleString('en-us', { weekday: 'long' });
    const dayOfMonth = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-us', { month: 'long' });
    const year = date.getFullYear();

    const hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    let period = 'AM';

      let hoursAdjusted = hours;
      if (hours >= 12) {
        period = 'PM';
        if (hours > 12) {
            hoursAdjusted -= 12;
        }
      }

      hoursAdjusted = hoursAdjusted.toString().padStart(2, '0');

    const dateString = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;  
    const timeString = `${hoursAdjusted}:${minutes}:${seconds} ${period}`;

    document.getElementById('clock').innerHTML = `${dateString}<br>${timeString}`;
}

setInterval(getDate, 1000);
getDate();