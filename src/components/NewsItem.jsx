import React from "react"

const NewsItem = (props) => {
  
    let { title, description, imageurl, newsUrl, author, date ,source} = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{
            display: 'flex',
            justifyContent:' flex-end',
            position: 'absolute',
            right: '0'
          }}> 
          <span className=" badge rounded-pill bg-danger">
                {source}
              </span>
          </div>
       
          <img
            src={
              !imageurl
                ? "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferror"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
