import { createContext, useState } from 'react';

const TicketContext = createContext();

export function TicketContextProvider({ children }) {
  const [ticketid, setTicketid] = useState(null);

  return (
    <TicketContext.Provider value={{ ticketid, setTicketid }}>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketContext;
