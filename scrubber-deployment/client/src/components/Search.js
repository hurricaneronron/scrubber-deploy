import React from "react"

const Search = props =>
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <h4 className="col s12 blue-grey-text">Search for Articles</h4>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="topic" type="text" onChange={props.handleTopicInput}/>
                <label className="active">Topic</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field inline col s6">
                <input id="startYear" type="text" onChange={props.handleStartYearInput}/>
                <label className="active">Start Year</label>
              </div>
              <div className="input-field inline col s6">
                <input id="endYear" type="text" onChange={props.handleEndYearInput}/>
                <label className="active">End Year</label>
              </div>
            </div>
            <div className="row">
              <a className="right waves-effect waves-light btn orange lighten-3 blue-grey-text" onClick={props.handleFormSubmit}>Search</a>
            </div>
          </form>
        </div>
        <hr />
        <div className="row">
          <h4 className="col s12 blue-grey-text">Search Results</h4>
        </div>
        <div>
          {props.renderArticleCards()}
        </div>
        <hr />
        <div className="row">
          <h4 className="col s12 blue-grey-text">Saved Articles</h4>
        </div>
        <div>
          {props.renderSavedArticles()}
        </div>
      </div>

export default Search
