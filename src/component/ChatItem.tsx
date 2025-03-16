import React from "react";
import styles from "../assets/styles/ChatItem.module.scss";

export interface IChatItemProps {
    id: number;
    img: string;
    name: string;
    lastMessage: string;
}

const ChatItem: React.FC<IChatItemProps> = ({id, img, name,lastMessage}) => {
  return (
    <div key={id} className={styles['chat-item']}>
      <img src={img} alt={`${name}-avatar`} className={styles['avatar']} />
      <div className={styles['info']}>
        <h3 className={styles['name']}>{name}</h3>
        <p className={styles['last-message']}>{lastMessage}</p>
      </div>
    </div>
  );
};
export default ChatItem;
