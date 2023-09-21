import './Main.css';
import MainChoice from './MainChoice';
import MainChoiceList from './MainChoiceList';
import React, {useState} from 'react';

const Modal = (props) => {
  if (props.ModalOpen) {
      return(
          <div className='overlay'>
              <div className='modal'>
                  <div className='modal-introduction'>
                    <p>モーダル</p>
                  </div>
                  <button
                    className='modal-close-btn'
                    onClick={() => props.setModalOpen(false)}>
                    とじる
                  </button>
              </div>
          </div>
      );
  } else {
      return null;
  }
};

const Main = () => {
  const [ModalOpen, setModalOpen] = useState(false);
    
  return(
    <div className = "main-wrapper">
      <div className = "main">
        <div className = "copy-container">
          <h1>Hello, World.</h1>
          <h2>プログラミングの世界へようこそ！</h2>
        </div>
        <div className = "choice-container">
          <h3>学べるレッスン</h3>
          {MainChoiceList.map((choiceItem, index) => {
            return (
              <MainChoice 
                key = {index}
                name = {choiceItem.name}
                introduction = {choiceItem.introduction} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;