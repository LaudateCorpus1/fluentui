import * as React from 'react';
import { AccordionItemContextValue } from './AccordionItem.types';

// No default value.
export const AccordionItemContext = React.createContext<AccordionItemContextValue>({
  onHeaderClick() {
    /** */
  },
  open: false,
  disabled: false,
});

export const useAccordionItemContext = () => React.useContext(AccordionItemContext);
