import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      song: "",
      artist: "",
      genre: "",
      rating: "",
      songs: []
    };
  }


  handleChange = event => {

    let input = event.target;
    let name = event.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {

    event.preventDefault();
    let songs = [...this.state.songs];

    songs.push({
      song: this.state.song,
      artist: this.state.artist,
      genre: this.state.genre,
      rating: this.state.rating
    });

    this.setState({
      songs,
      song: "",
      artist: "",
      genre: "",
      rating: ""
    });
  };

  render() {
    return (
      <div id="songContainer" style={{ textAlign: "center" }}>

        <SongForm 

          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          playlistSong={this.state.song}
          playlistArtist={this.state.artist}
          playlistGenre={this.state.genre}
          playlistRating={this.state.rating}
        />

        <SongList songs={this.state.songs} />

      </div>
    );
  }
}

export default SongOverview;
