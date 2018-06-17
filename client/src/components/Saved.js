import React from "react"

const Saved = props => {
    return (
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
                <button className="deleteBtn btn-flat orange-text text-lighten-2" href="" onClick={props.handleDelete} title={props.title} date={props.date} url={props.url} id={props.id}>Delete Article</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Saved
