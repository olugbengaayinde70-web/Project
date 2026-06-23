import { useMemo, useReducer } from "react";
import CartContext from "./CartContext";
import { formatMoney, parsePriceToNgn } from "./cartMoney";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { item, qty } = action;
      const id = item.name;
      const next = { ...state.items };
      const existing = next[id];
      next[id] = existing
        ? { ...existing, qty: existing.qty + (qty ?? 1) }
        : { item, qty: qty ?? 1 };
      return { ...state, items: next };
    }
    case "REMOVE": {
      const { id } = action;
      if (!state.items[id]) return state;
      const next = { ...state.items };
      delete next[id];
      return { ...state, items: next };
    }
    case "SET_QTY": {
      const { id, qty } = action;
      if (!state.items[id]) return state;
      const next = { ...state.items };
      if (qty <= 0) {
        delete next[id];
        return { ...state, items: next };
      }
      next[id] = { ...next[id], qty };
      return { ...state, items: next };
    }
    case "CLEAR": {
      return { ...state, items: {} };
    }
    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: {} });

  const api = useMemo(() => {
    const entries = Object.entries(state.items);

    const count = entries.reduce((acc, [, v]) => acc + v.qty, 0);

    const total = entries.reduce((acc, [, v]) => {
      const priceNgn = parsePriceToNgn(v.item.price);
      return acc + priceNgn * v.qty;
    }, 0);

    const lineItems = entries
      .map(([id, { item, qty }]) => {
        const unitNgn = parsePriceToNgn(item.price);
        return {
          id,
          item,
          qty,
          unitNgn,
          lineNgn: unitNgn * qty,
          unitFormatted: formatMoney(unitNgn),
          lineFormatted: formatMoney(unitNgn * qty),
        };
      })
      .sort((a, b) => a.item.name.localeCompare(b.item.name));

    return {
      count,
      totalNgn: total,
      totalFormatted: formatMoney(total),
      lineItems,
      addItem: (item, qty = 1) => dispatch({ type: "ADD", item, qty }),
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      setQty: (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state.items]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

