import './MainChoice.css';

const MainChoice = (props) => {

    // constructor(props) {
    //     super(props);
    //     this.state = {isModalOpen: false};
    //   }
    
    //   handleClickLesson() {
    //     this.setState({isModalOpen: true});
    //   }
    
    //   handleClickClose() {
    //     this.setState({isModalOpen: false});
    //   }
    
    //   render() {
    //     let modal;
    //     if (this.state.isModalOpen) {
    //       modal = (
    //         <div className='modal'>
    //           <div className='modal-inner'>
    //             <div className='modal-header'></div>
    //             <div className='modal-introduction'>
    //               <h2>{this.props.name}</h2>
    //               <p>{this.props.introduction}</p>
    //             </div>
    //             <button
    //               className='modal-close-btn'
    //               onClick={() => this.handleClickClose()}
    //             >
    //               とじる
    //             </button>
    //           </div>
    //         </div>
    //       );
    //     }

    return(
        <div className='lesson-card'>
            <div className='lesson-item'
            //   onClick={() => {this.handleClickLesson()}}
            >
            <h1>{props.name}</h1>
            {/* <img src={this.props.image} /> */}
            </div>
            {/* {modal} */}
            <p>{props.introduction}</p>
      </div>
    );
};

export default MainChoice;