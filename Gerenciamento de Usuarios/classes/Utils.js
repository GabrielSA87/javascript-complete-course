class Utils {

    static dateFormat(date) {

        let returnMonth;

        if ((date.getMonth() + 1) < 10) {

            returnMonth = ("0" + (date.getMonth() + 1))

        } else {

            returnMonth = (date.getMonth() + 1)

        }

        let returnDate;

        if (date.getDate() < 10) {

            returnDate = ("0" + date.getDate())

        } else {

            returnDate = date.getDate()

        }

        return returnDate + '/' + returnMonth + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    }


}