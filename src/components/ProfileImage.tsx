import React from "react";
import './CraftspersonItem.css'
import './ProfileImage.css'

export default function ProfileImage(props: { source?: string | undefined}) {
    return (
        <div className='profile-image__container'>
            {props.source == undefined &&
            <img className="profile-image" src="https://www.ekcreditunion.co.uk/wp-content/uploads/2018/02/Blank-Silhouette.jpg" alt="default placeholder user"/>
            }
            {props.source != undefined &&
            <img className="profile-image" src={props.source} alt="profile image"/>
            }
        </div>
    );
}