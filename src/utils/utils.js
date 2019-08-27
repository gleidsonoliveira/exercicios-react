import React from 'react'

export default function childrenProps(props) 
{
    return React.Children.map(props.children, child => 
    {
        return React.cloneElement(child, { ...props })
    })
}
