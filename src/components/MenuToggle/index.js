import React from 'react'
import Notification from '../../assets/bell.svg';
import Edit from '../../assets/edit-2.svg';
import ArrowDown from '../../assets/chevron-down.svg';
import ArrowRight from '../../assets/chevron-right.svg';
import Star from '../../assets/star_white_24dp.svg';
import Tool from '../../assets/build_white_24dp.svg';
import Call from '../../assets/phone_in_talk_white_24dp.svg';

import './styles.css'

export default function MenuToggle() {
    return (
        <div className="profileContainer">
            <section>
                <div className="profileInfo">
                    <button>
                        <img src={Notification} alt="Notification" />
                    </button>
                    <div className="profilePhotoDiv">
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/51717305?v=4" alt="Profile" className="profilePhoto"/>
                        </div>
                        <img src={ArrowDown} alt="ArrowDown" />
                    </div>
                </div>
                <div className="editProfile">
                    <button>
                        <img src={Edit} alt="Edit profile" />
                        <span>Edit profile</span>
                    </button>
                </div>
            </section>
            <section>
                <button>
                    <div>
                        <img src={Star} alt="StarIcon" />
                        <span>Expert advice</span>
                    </div>
                    <img src={ArrowRight} alt="ArrowRight" />
                </button>
                <button>
                    <div>
                        <img src={Tool} alt="ToolIcon" />
                        <span>Car service</span>
                    </div>
                    <img src={ArrowRight} alt="ArrowRight" />
                </button>
                <button>
                    <div>
                        <img src={Call} alt="CallIcon" />
                        <span>Help center</span>
                    </div>
                    <img src={ArrowRight} alt="ArrowRight" />
                </button>
            </section>

        </div>
    )
}