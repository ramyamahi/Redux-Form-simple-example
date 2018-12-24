

import React, { Component } from 'react';
const data = {adult: false,
    backdrop_path: "/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg",
    genre_ids: (3) [35, 18, 10749],
    id: 19404,
    original_language: "hi",
    original_title: "दिलवाले दुल्हनिया ले जायेंगे",
    overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    popularity: 12.866,
    poster_path: "/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
    release_date: "1995-10-20",
    title: "Dilwale Dulhania Le Jayenge",
    video: false,
    vote_average: 9.1,
    vote_count: 1943};

class MoviesRow extends Component {

    constructor(props){
      super(props); 
      this.state = {
        listData:this.props.data
      }
    }

    render(){
        let data= this.state.listData
        //let data = this.props.data
        return(
            <div style={{width:900,float:"left"}}>
                <div style={{width:200,float:"left"}}>
                <img src={"http://image.tmdb.org/t/p/w185//"+data.backdrop_path} style={{width:200,height:200}}/>
                </div>
                <div style={{width:600}}>
                <h3>{data.title}</h3>
                <p>{data.overview}</p>
                <span>{data.release_date}</span>
                <br/>
                <span>{data.vote_count}</span>
                </div>
            </div>
        )
    }
}

export default MoviesRow;