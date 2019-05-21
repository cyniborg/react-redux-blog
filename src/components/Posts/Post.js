import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <React.Fragment>
        <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
            <div className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="A dimly lit room with a computer interface terminal." />
                </div>
                <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 baskerville mt0 lh-title">{props.title}</h1>
                <p className="f6 f5-l lh-copy">
                    {props.body}
                </p>
                <p className="f6 lh-copy mv0">By {props.id}</p>
                </div>
            </div>
        </a>
    </React.Fragment>
  )
}

Post.propTypes = {
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string
}
