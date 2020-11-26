export const decision = (store:any): string => {

  let ticketDuration: string;
  let zone: string;

  store?.time > 4 ? (ticketDuration = "Monthly") : (ticketDuration = "Weekly");
  store?.center ? zone='AB' : zone='ABC'

  return `You should buy a ${zone} ${ticketDuration} Ticket`;
};
