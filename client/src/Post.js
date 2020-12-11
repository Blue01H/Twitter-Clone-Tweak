import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"

function Post({displayName, usserName, verified, text, image, avatar}) {
    return(
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Lando Norris{" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @LandoNorris
                            </span>
                        </h3>
                    </div>
                    <div className="post__headDescription">
                        <p>Fast Boiiii</p>
                    </div>
                </div>
                <img src="https://cdn-5.motorsport.com/images/mgl/6zQr7vLY/s8/lando-norris-mclaren-1.jpg" alt=""></img>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    ) 
}

export default Post;