import React, { useEffect, useState } from "react";
import styles from "../assets/styles/Profile.module.scss";

const Profile: React.FC = () => {
  const [isOwnProfile, setIsOwnProfile] = useState<boolean | null>(null);
  const bio = "Люблю программировать и изучать новые технологии.";
  const dateOfBirth = "15.08.1995";

  useEffect(() => {
    const currentUserId = "123";
    const profileId = "123"; 

    setIsOwnProfile(currentUserId === profileId);
  }, []);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.backgroundWrapper}>
        <div className={styles.backgroundImage}>
          <img
            src="https://i.ytimg.com/vi/vZ1XWv8R8YA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGEgYShhMA8=&amp;rs=AOn4CLAj8sBiw2qP5EbWyugJetgmncC4GQ"
            alt="Фон профиля"
            className={styles.backgroundImageImg}
          />
        </div>

        <div className={styles.avatarWrapper}>
          <img
            src="https://avatars.mds.yandex.net/i?id=568f465cd035de42730bf264ac62e28c_sr-5232622-images-thumbs&n=13"
            alt="Аватар"
            className={styles.avatarImage}
          />
        </div>
      </div>

      <div className={styles.userInfo}>
        <p className={styles.userName}>
          {isOwnProfile ? "Rozioi" : "Другой пользователь"}
        </p>

        <div className={styles.infoCard}>
          <div className={styles.infoItem}>

            <p className={styles.infoText}>{bio}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoText}>
             {dateOfBirth}
            </p>
          </div>
        </div>

        {isOwnProfile ? (
          <button className={styles.editButton}>Редактировать профиль</button>
        ) : (
          <button className={styles.messageButton}>Написать сообщение</button>
        )}
      </div>
    </div>
  );
};

export default Profile;