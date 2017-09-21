
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Header from "../components/Header";
 
const mapStateToProps = (state) => {
    return {
         cartLength: state.cartItems.length
    }
}
 

export default connect(mapStateToProps) (Header)