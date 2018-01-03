import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdminss } from '../actions';
import RequireAuth from '../components/hocs/requireAuth';


class AdminsList extends Component {
    componentDidMount () {
        this.props.fetchAdminss();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
        });
    }

    render() {
        return (
            <div>
                <h3>Protected list of admins</h3>
                <ul>{this.renderAdmins()}</ul>
            </div>
        );
    }
};

function mapStateToProps ({admins}) {
    return {admins};
}

export default {
    component: connect(mapStateToProps, {fetchAdminss}) (RequireAuth(AdminsList)),
    loadData: ({dispatch}) => dispatch(fetchAdminss())
};
