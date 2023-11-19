import moment from "moment";
export const getEvent = (data) => {
  const eventId = data.id
    ? data.id
    : Math.random().toString(36).substring(2, 15);
  const createdAt = data.createdAt
    ? data.createdAt
    : moment().format('MMMM Do YYYY, h:mm:ss a');
  const updatedAt = moment().format('MMMM Do YYYY, h:mm:ss a');
  return {
    id: eventId,
    title: data.title,
    description: data.description,
    date: data.date,
    time: data.time,
    createdAt,
    updatedAt,
  };
};
