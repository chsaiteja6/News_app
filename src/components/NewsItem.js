import React, { Component } from 'react'

export default class NewsItem extends Component {
   
    render() {
       let {title,desc,imageurl,url1}=this.props;
        return (
            <div >
                
                <div class="card" style={{width: "18rem"}}>
                    <img src={imageurl?imageurl:"https://talksport.com/wp-content/uploads/sites/5/2023/10/virat-kohli-india-speaks-pitch-850929669.jpg?strip=all&quality=100&w=1920&h=1080&crop=1"} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}...</h5>
                        <p class="card-text">{desc?desc:"Follow live text, in-play video clips and radio commentary as India play Australia in the Men's Cricket World Cup 2023."}.....</p>
                        <a href={url1} target='_blank' class="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
