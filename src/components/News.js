import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps={
    country:'in',
    category:'general'
,  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }
    articles=[
        {
            "source": {
              "id": "talksport",
              "name": "TalkSport"
            },
            "author": "Josh Fordham",
            "title": "Virat Kohli confronts notorious pitch invader ‘Jarvo’ for disrupting India vs Australia Cricket World Cup m...",
            "description": "Notorious pitch invader ‘Jarvo’ disrupted the Cricket World Cup match between India and Australia. The Englishman was wearing an India shirt with ‘Jarvo 69’ on the back. The…",
            "url": "https://talksport.com/sport/cricket/1593384/virat-kohli-confronts-pitch-invader-india-australia/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/10/virat-kohli-india-speaks-pitch-850929669.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
            "publishedAt": "2023-10-08T11:32:43Z",
            "content": "Notorious pitch invader 'Jarvo' disrupted the Cricket World Cup match between India and Australia.\r\nThe Englishman was wearing an India shirt with 'Jarvo 69' on the back.\r\nKohli confronted 'Jarvo' af… [+1043 chars]"
          },
          {
            "source": {
              "id": "bbc-sport",
              "name": "BBC Sport"
            },
            "author": null,
            "title": "Cricket World Cup: India v Australia",
            "description": "Follow live text, in-play video clips and radio commentary as India play Australia in the Men's Cricket World Cup 2023.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/66854289",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
            "publishedAt": "2023-10-08T08:22:20.1755236Z",
            "content": "A billion people have been waiting for four days. Or has it been four years?\r\nThe hosts are finally underway at this World Cup and who better to face than the five-time world champions?\r\nIt's India v… [+60 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
          },
          {
            "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
          }
    ]
    constructor(){
        super();
        this.state = {
            articles:this.articles,
            loading:false,
            page:1
        }
    }
   async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce07e79692c0470d83581669b4d338c0&page=1`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parsed=await data.json();
        this.setState({loading:false});
        this.setState({articles:parsed.articles});
        
    }
    prevclick=async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce07e79692c0470d83581669b4d338c0&page=${this.setState.page-1}`;
      this.setState({loading:true});
        let data=await fetch(url);
        let parsed=await data.json();
        this.setState({loading:false});
        this.setState({articles:parsed.articles});
        
    
      this.setState({
        page:this.state.page-1,
        articles:parsed.articles
      })
    }
    nextclick=async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce07e79692c0470d83581669b4d338c0&page=${this.state.page+1}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsed=await data.json();
      this.setState({loading:false});
  
    this.setState({
      page:this.state.page+1,
      articles:parsed.articles
    })
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
               {this.state.loading&& <Spinner/>}
                <div className='row my-3'>
                    
                {!this.state.loading&&this.state.articles&&this.state.articles.map((ele)=>{
                  return <div className='col md-3' key={ele.url}>
                  <NewsItem  title={ele.title?ele.title.slice(0,45):""} desc={ele.description?ele.description.slice(0,88):""} imageurl={ele.urlToImage} url1={ele.url}/>
              </div>
                })}  
               
 

            </div>
            <div className='container d-flex justify-content-between'>
              <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.prevclick}>&larr;Previous</button>
              <button type="button" className="btn btn-primary" onClick={this.nextclick}>Next &rarr;</button>
            </div>
            </div>
        )
    }
}
