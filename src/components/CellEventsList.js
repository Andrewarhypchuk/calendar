import { EventsListWrapper } from "../styleComponents/StyledComponents";
import { CellEventItem } from "./CellEventItem";

export const EventsList = ({ events }) => {
  return (
    <EventsListWrapper>
      {events.map((event) => (
        <CellEventItem key={event.id} event={event} />
      ))}
    </EventsListWrapper>
  );
};
