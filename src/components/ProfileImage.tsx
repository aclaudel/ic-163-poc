import React from "react";
import './CraftspersonItem.css'
import './ProfileImage.css'
import faker from "faker";

export default function ProfileImage(props: { source?: string | undefined}) {
    return (
        <div className='profile-image__container'>
            {props.source == undefined &&
            <img className="profile-image" src={faker.image.avatar()} alt="default placeholder user"/>
            }
            {props.source != undefined &&
            <img className="profile-image" src={props.source} alt="profile image"/>
            }
        </div>
    );
}