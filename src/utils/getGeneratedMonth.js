import moment from "moment";
export const getGeneratedMonth = (date) => {
    let startOfSelectedMonth = moment(date).clone().startOf("month").startOf("week");
    let firstCalendartDay = startOfSelectedMonth.subtract("1", "day").clone();
    let calendar = [...Array(42)].map(() => {
        return firstCalendartDay.add(1, "day").format("YYYY-MM-DD");
    })
    return calendar
}


