import React from 'react';
import Header from './Header';
import SeriesList from './SeriesList';
import Footer from './Footer';

function Series(props) {
    return (
        <div>
            <Header title = "Series"/>
            <div>
              <ul className="series-list">
                  {props.series.map((series) => (
                     <SeriesList title={series.title} />
                  ))}
              </ul>
            </div>
            <Footer />
            
        </div>
    )
}

export default Series
