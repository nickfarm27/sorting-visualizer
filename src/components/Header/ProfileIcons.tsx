import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface Props {
    
}

const ProfileIcons = (props: Props) => {
    return (
        <div>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
        </div>
    )
}

export default ProfileIcons
