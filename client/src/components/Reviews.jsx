import React from 'react';
import ReviewsList from './ReviewsList.jsx';
const Rating = require('react-rating');

{/* <Rating
  emptySymbol={<img src="assets/images/star-empty.png" className="icon" />}
  fullSymbol={<img src="assets/images/star-full.png" className="icon" />}
/> */}

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      starValue: 0 
    };
    this.handleInputChange = (value) => {
      this.setState({ starValue: value });
    }
    this.handleOnclick = (e) => {
      e.preventDefault();
      // console.log('submit clicked');
      // console.log(this.state.starValue, 'starValue on submit');
      // this.props.handleSearchInput(this.state.value);
    }
  }

  render() {
    return (
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="media">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src={this.props.item.coverImage} alt="book cover" ></img>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{this.props.item.title}</h4>
                {this.props.item.longDescript}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add your review" aria-describedby="basic-addon2"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleOnclick.bind(this)} >Submit</button>
            <div className="media">
              <div className="media-right">
                <Rating {...this.props} initialRating={this.state.starValue}
                onChange={this.handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="btn-group-vertical" role="group" aria-label="...">
              <button type="button" className="btn-group btn btn-primary btn-lg" role="group" aria-label="...">
                Composite Critic Rating <span className="badge">{this.props.item.rating}</span>
              </button>
            </div>
            <h4 className="media-heading">Critics Reviews</h4>
            {this.props.reviews.map(review => <ReviewsList review={review} key={review.reviewer} />)}
          </div>
          <div className="col-md-6">
            <button type="button" className="btn-group btn btn-info btn-lg" role="group" aria-label="...">
              Composite User Rating <span className="badge">{this.props.item.rating}</span>
            </button>
            <h4 className="media-heading">User Reviews</h4>
          </div>
        </div>
      </div>
      
    );
  }
}


  // <div className="container-fluid">
  //   <div className="row">
  //     <div className="col-md-6">
  //       <div className="media">
  //         <div className="media-left">
  //           <a href="#">
  //             <img className="media-object" src={props.item.coverImage} alt="book cover" ></img>
  //           </a>
  //         </div>
  //         <div className="media-body">
  //           <h4 className="media-heading">{props.item.title}</h4>
  //           {props.item.longDescript}
  //         </div>
  //       </div>
  //     </div>
  //     <div className="col-md-6">
  //       <div className="form-group">
  //         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add your review" aria-describedby="basic-addon2"></textarea>
  //       </div>
  //         <button type="submit" className="btn btn-primary">Submit</button>        


  //       {/* <div className="input-group"> */}
  //         {/* <input type="text" className="form-control" placeholder="Add your review" aria-describedby="basic-addon2"></input> */}
  //         {/* <span className="input-group-addon" id="basic-addon2">submit</span> */}
  //       {/* </div> */}
  //       <div className="media-right">
  //         <Rating />

  //       </div>
  //     </div>
  //   </div>
  //   <div className="row">
  //     <div className="col-md-6">
  //       <div className="btn-group-vertical" role="group" aria-label="...">
  //         <button type="button" className="btn-group btn btn-primary btn-lg" role="group" aria-label="...">
  //           Composite Critic Rating <span className="badge">{props.item.rating}</span>
  //         </button>
  //       </div>
  //       <h4 className="media-heading">Critics Reviews</h4>
  //       {props.reviews.map(review => <ReviewsList review={review} key={review.reviewer} />)}
  //     </div>
  //     <div className="col-md-6">
  //       <button type="button" className="btn-group btn btn-info btn-lg" role="group" aria-label="...">
  //         Composite User Rating <span className="badge">{props.item.rating}</span>
  //       </button>
  //       <h4 className="media-heading">User Reviews</h4>
  //     </div>
  //   </div>
  // </div>

//   <div>
//     <div className="container">
//       <div className="media">
//         <div className="media-left">
//           <a href="#">
//             <img className="media-object" src={props.item.coverImage} alt="book cover" ></img>
//           </a>
//           <div className="btn-group-vertical" role="group" aria-label="...">
//             <button type="button" className="btn-group btn btn-primary btn-lg" role="group" aria-label="...">
//               Composite Critic Rating <span className="badge">{props.item.rating}</span>
//             </button>
//           </div>
//           <h4 className="media-heading">Critics Reviews</h4>
//         </div>
//         <div className="media-body">
//           <h4 className="media-heading">{props.item.title}</h4>
//           {props.item.longDescript}
//         </div>
//         <div className="media-right">
//           Add Review Form, 5 Stars to choose rating, Submit Button
//           <div className="input-group">
//             <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2"></input>
//               <span className="input-group-addon" id="basic-addon2">@example.com</span>
//           </div>
//           <button type="button" className="btn-group btn btn-info btn-lg" role="group" aria-label="...">
//             Composite User Rating <span className="badge">{props.item.rating}</span>
//           </button>
//           <h4 className="media-heading">User Reviews</h4>
//         </div>
//       </div>
//     </div>

// { props.reviews.map(review => <ReviewsList review={review} key={review.reviewer} />) }

//   </div>
// );

export default Reviews;
