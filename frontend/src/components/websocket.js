import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { API } from "../constants";
import { toast } from "react-toastify";

export const useWebSocket = (props) => {
  const websocket = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { protocol, host, pathname } = new URL(API);
    const uri = `${protocol}//${host}`;
    const path = pathname.endsWith("/") ? `${pathname}socket.io` : `${pathname}/socket.io`;

    websocket.current = io(uri, { path });

    if (websocket.current) {

      websocket.current.on("approve", (newProduct) => {
        setProducts([...products, newProduct]);
        toast.success("New approval request received");
      });
    }

    return () => {
      if (websocket.current) {
        websocket.current.disconnect();
      }
    };
  }, []);

  return { websocket, products };
};