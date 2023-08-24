import './Main.css';
import MainChoice from './MainChoice';
import MainChoiceList from './MainChoiceList';

const Main = () => {
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
                  introduction = {choiceItem.introduction}
                />
              );
            })}
          </div>
          {/* <div className="contact-container">
            <h3>お問い合わせ</h3>
            <ContactForm />
          </div> */}
        </div>
      </div>
    );
};

export default Main;