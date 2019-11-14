export default {
    formatDate(date) {
        const strDate = date.toString().replace('T', "-");
        
        const day = strDate.split('-')[2];
        const mouth = strDate.split('-')[1];
        const year = strDate.split('-')[0];

        return `${day} - ${mouth} - ${year}`;
    }
}