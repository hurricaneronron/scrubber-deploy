import React from "react"
import "./Search"

const Results = props =>
      <div>
        <div className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1 z-depth-3">
              <div className="card-content white-text">
                <span className="card-title">{props.title}</span>
                <p>Published: {props.date}</p>
              </div>
              <div className="card-action">
                <a className="viewBtn btn-flat orange-text text-lighten-2" target="_blank" href={props.url}>View Article</a>
                  {/* target="_blank" gives an error and the article won't display */}
                <button className="saveBtn btn-flat orange-text text-lighten-2" onClick={props.handleSave} title={props.title} date={props.date} url={props.url}>Save Article</button>
              </div>
            </div>
          </div>
        </div>
      </div>

export default Results
