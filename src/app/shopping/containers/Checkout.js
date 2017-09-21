
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Checkout from "../components/Checkout";
import * as actions from "../Actions";

const mapStateToProps = (state) => {
    return {
        order: state.order,
        items: state.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (Checkout)