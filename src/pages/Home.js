import React     from 'react';
import { Link }  from "react-router-dom";
import "./Home.css";
import {Tabs}    from 'antd';
import {library} from '../helpers/albumList';

const {TabPane} = Tabs;

const Home = () => {

return(
  <>
      <Tabs defaultActiveKey="1" centered>
          <TabPane tab="FEATURED" key="1">
             <h1 className="featuredTitle">Today is the day</h1>
              <div className="albums">
                  {library.map((e) => (
                      <Link to ="/album" state={e} className="albumSelection">
                          <img src={e.image} alt="album image" style={{width:"150px", marginBottom:"10px"}}/>
                          <p>{e.title}</p>
                      </Link>
                  ))}
              </div>
          </TabPane>
          <TabPane tab="GENRES" key="2">
              <div className="albums">
                  {library.slice(0,6).map((e) => (
                      <Link to ="/album" state={e} className="albumSelection">
                          <img src={e.image} alt="album image" style={{width:"150px", marginBottom:"10px"}}/>
                          <p>{e.title}</p>
                      </Link>
                  ))}
              </div>
          </TabPane>
          <TabPane tab="NEW" key="3">
              <div className="albums">
                  {library.slice(7,12).map((e) => (
                      <Link to ="/album" state={e} className="albumSelection">
                          <img src={e.image} alt="album image" style={{width:"150px", marginBottom:"10px"}}/>
                          <p>{e.title}</p>
                      </Link>
                  ))}
              </div>
          </TabPane>
      </Tabs>
  </>
)
}

export default Home;
