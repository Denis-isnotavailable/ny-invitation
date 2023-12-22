import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import "./PasswordPage.css";

const PasswordPage = ({password, setPassword, confirm}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isHelpShown, setIsHelpShown] = useState(false);
    const [isHelpEggShown, setIsHelpEggShown] = useState(false);

    const handleButtonClick = () => {
        setIsHelpShown(p => !p);
        isHelpEggShown && setIsHelpEggShown(false);
    }
    
    return (
        <div className="password_page">
            <h1 className="title_input"> Enter your Super Password </h1>
            <div className="input_container">
                <input
                    type={isPasswordShown ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                />
                <div className="input_icon">
                    {isPasswordShown ?
                        <AiFillEye size={38} onClick={() => setIsPasswordShown(false)} color="#e8e8e8" />
                        :
                        <AiFillEyeInvisible size={38} onClick={() => setIsPasswordShown(true)} color="#e8e8e8" />
                    }
                </div>
            </div>
            
            <button className="help_button" onClick={handleButtonClick}> Help </button>

            {<div className={`${'help_box'} ${isHelpShown && 'help_box_active'}`}>
                Find Easter<span onClick={() => setIsHelpEggShown(p => !p)}>Egg</span> in ME
            </div>}
            {<div className={`${'help_box'} ${'help_box_extra_height'} ${isHelpShown && isHelpEggShown && 'help_box_active'}`}>
                <p>Super Admin has Super Password</p> 
                <p>(or use red button)</p>
            </div>}

            <button
                onClick={() => isHelpShown && isHelpEggShown && setPassword(confirm)}
                className={`${'btn-class-name'} ${isHelpShown && isHelpEggShown && 'btn-class-name-active'}`}
            >
                <span className="back"></span>
                <span className="front"></span>
            </button>
            
        </div>
    );
};

export default PasswordPage;
