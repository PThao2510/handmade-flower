import React from 'react';
import { Input, Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './login.scss';


export default function Login() {
    return (
        <div>
            <div className="login_box">
                <form>
                    <div className="user_box">
                        <label className='title'>UserName or Email
                            <span style={{ color: 'red' }}> *</span>
                        </label>
                        <Input className='input' placeholder="Your Name or Mail" prefix={<FontAwesomeIcon icon={faUser} />} />
                    </div>
                    <div className="user_box">
                        <label className='title'>Password
                            <span style={{ color: 'red' }}> *</span>
                        </label>
                        <Input.Password className='input' placeholder="input password" prefix={<FontAwesomeIcon icon={faLock} />} />
                    </div>
                    <div className='remember_forgot'>
                        <Checkbox>Remember me</Checkbox>
                        <a>
                            <span>Lost Your Password?</span>
                        </a>
                    </div>
                    <div >
                        <button className="btn_login" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
