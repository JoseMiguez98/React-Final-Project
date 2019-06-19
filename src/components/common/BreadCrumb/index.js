import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavItem = props => (
        <li><Link 
            to={ props.to } 
            className={ props.isActive ? "active" : "" } >{ props.name }</Link> 
        </li>
)

const BreadCrumb = props => (
    <ul className="breadcrumb">
        {props.items.map((item,key) => {
            return <NavItem
             key=  {"NavItem: " + key }
             name= { item.name }
             to= { item.href }
             isActive= { item.isActive } />
        })}
    </ul>
    );

export default BreadCrumb;