import './MainChoice.css';

const MainChoice = (props) => {
    return(
        <div className='card' href="./">
            <div className='item'>
                <h1>{props.name}</h1>
            </div>
            <p>{props.introduction}</p>
      </div>
    );
};

export default MainChoice;