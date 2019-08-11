import React from 'react'
import './Main.css'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main({ match }){
    return (
        <div className="main-container">
            <img src={logo} alt="logo tindev" />
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/9002336?v=4" alt="" />
                    <footer>
                        <strong>EEu</strong>
                        <p>sd</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                        <img src={dislike} alt="botão descurtir" />
                        </button>
                        <button type="button">
                        <img src={like} alt="botão curtir" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/9002336?v=4" alt="" />
                    <footer>
                        <strong>EEu</strong>
                        <p>sd</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                        <img src={dislike} alt="botão descurtir" />
                        </button>
                        <button type="button">
                        <img src={like} alt="botão curtir" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/9002336?v=4" alt="" />
                    <footer>
                        <strong>EEu</strong>
                        <p>sd</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                        <img src={dislike} alt="botão descurtir" />
                        </button>
                        <button type="button">
                        <img src={like} alt="botão curtir" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}