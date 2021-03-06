import React from "react";
import { Footer } from "react-materialize";
import "./style.css";
import "materialize-css";

function Foot() {
    return(
        <Footer
        className="bottom-fixed"
        copyrights="2021 Copyright Text"
        links={<ul><li><a className="grey-text text-lighten-3" href="#!">Email</a></li><li><a className="grey-text text-lighten-3" href="#!">Github</a></li><li><a className="grey-text text-lighten-3" href="#!">Linkdeln</a></li><li><a className="grey-text text-lighten-3" href="#!">Website</a></li></ul>}
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">Web Development Resources</a>}
      >
        <h5 className="white-text">
          Web Development Resources
        </h5>
        <p className="grey-text text-lighten-4">
          Here you can find contact information. This website uses React and Materialize.
          Created by Daniel Molina-Power and Lillian Paris.
        </p>
      </Footer>
    );
};

export default Foot;