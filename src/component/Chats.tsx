import React, { useState } from "react";
import ChatItem, { IChatItemProps } from "./ChatItem";
import styles from "../assets/styles/Chats.module.scss";

const Chats: React.FC = () => {
  const [chats, setChats] = useState<IChatItemProps[]>([
    { id: 1, img: "https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997.jpg", name: "sa", lastMessage: "hgj" },
    { id: 2, img: "https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997.jpg", name: "fd", lastMessage: "gdfd1" },
    { id: 3, img: "https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997.jpg", name: "fd", lastMessage: "gdfd2" },
    { id: 4, img: "https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997.jpg", name: "fd", lastMessage: "gdfd3" },
    { id: 5, img: "https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997.jpg", name: "fd", lastMessage: "gdfd4" },
    { id: 6, img: "https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997.jpg", name: "fd", lastMessage: "gdfd5" },
    { id: 7, img: "https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997.jpg", name: "fd", lastMessage: "gdfd6" },
    { id: 8, img: "https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997.jpg", name: "fd", lastMessage: "gdfd414" },
    { id: 9, img: "https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997.jpg", name: "fd", lastMessage: "gdfd8" }
  ]);
  return (
    <div className={styles["container"]}>
      <div className={styles["chats-list"]}>
       {chats.map((chat,index) => (
         <ChatItem
         id={chat.id}
         img={
           chat.img
         }
         name={chat.name}
         lastMessage={chat.lastMessage}
       />
       ))}
      </div>
    </div>
  );
};
export default Chats;
