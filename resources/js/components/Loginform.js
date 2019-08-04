import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Loginform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {
                email: '',
                password: ''
            }
        }
    }

    onSubmit(e) {
        e.preventDefault();
        let data = {...this.state.fields};
        data._token = iet.csrf_token;
        $.post(this.props.action, data, (r) => {
            console.log(r, 'done');
        })
    }

    onFieldChanged(e) {
        let field_name = e.currentTarget.getAttribute('name');
        let fields = {...this.state.fields};
        fields[field_name] = e.currentTarget.value;
            this.setState({fields: fields});
    }

    render() {
        return (
            <div className="loginform-container">
                <form action={this.props.action} onSubmit={(e)=>this.onSubmit(e)}>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            Email
                            <input name="email" type="text" value={this.state.fields.email} onChange={(e)=>this.onFieldChanged(e)} />
                        </div>
                        <div className="col-md-8">
                            Password
                            <input
                                value={this.state.fields.password} name="password"  onChange={(e)=>this.onFieldChanged(e)} type="password" />
                        </div>
                        <div className="col-md-8">
                            <input type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

let el = document.getElementById('loginform');
if (el) {
    ReactDOM.render(<Loginform
        action={el.dataset.action}
    />, el);
}
