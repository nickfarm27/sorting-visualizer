import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from "./ProfileIcons.module.scss";

interface Props {
    
}

const ProfileIcons = (props: Props) => {
    return (
        <div className={styles["profile-icons"]}>
            <a href="https://www.linkedin.com/in/nicholas-farm/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/nickfarm27/sorting-visualizer" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    )
}

export default ProfileIcons
