export const resultProcessing = (store:{[key:string]:any}): string => {

  
  
   console.log(store)

  //How many weeks?
  let ticketDuration: string;
  +store["How many weeks are you staying in the city?"] > 4 ? (ticketDuration = "Monthly") : (ticketDuration = "Weekly");

  //student
  let student = ''
  store["Are you a student?"]?.Yes && (student='with student discount')

  //zones
  let zones = "A";
  store["Do you know which city zones are you moving around?"]?.No ? zones = "ABC" :
  store["Which city zones are you going?"]?.C ? zones="ABC" : 
  store["Which city zones are you going?"]?.B ? zones="AB" : zones="A"
  

  return `${zones} ${ticketDuration} Ticket ${student}`;
};
