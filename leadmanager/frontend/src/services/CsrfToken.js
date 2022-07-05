
import React, { Component } from 'react'


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                console.log('hello')
                break;
                
            }
        }
    }
    return cookieValue;
}

export class CsrfToken extends Component {
  render() {
    const csrftoken = getCookie('csrftoken');
    return (
        <div> {csrftoken} </div>
    )
  }
}

export default CsrfToken


