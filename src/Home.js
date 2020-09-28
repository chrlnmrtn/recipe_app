import React, { useState } from 'react'
import './Home.css'
import { Button, Card, CardBody, Collapse, Jumbotron } from 'reactstrap';

import { data } from "../src/data/data";
import { data2 } from "../src/data/data2";
import { data4 } from "../src/data/data4";
import HomeMenu from './HomeMenu';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
  
  return (
    <div>

    <Jumbotron className="breakfast">
        <h1 className="display-3">Breakfast</h1>
        <p className="lead">Pretty much all of this recipe revolves around those super-lazy weekend breakfast wher you're eating in bed, possibly binge-watching Netflix and trying your best not to spill syrup all over your pillow.</p>
        <hr className="my-2" />
        <p>Are all-day pyjamas involved? Maybe, These recipes also work really well with the situation that is brunch - they will impress and comfort everyone.</p>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Show Featured</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <HomeMenu recipes={data} title="Featured Breakfast" />
          </CardBody>
        </Card>
      </Collapse>
        
      </Jumbotron>

      <Jumbotron className="LunchandDinner">
        <h1 className="display-3">Lunch and Dinner</h1>
        <p className="lead">Pretty much all of this recipe revolves around those super-lazy weekend breakfast wher you're eating in bed, possibly binge-watching Netflix and trying your best not to spill syrup all over your pillow.</p>
        <hr className="my-2" />
        <p>Are all-day pyjamas involved? Maybe, These recipes also work really well with the situation that is brunch - they will impress and comfort everyone.</p>
        
        <Button color="primary" onClick={toggle2} style={{ marginBottom: '1rem' }}>Show Featured</Button>
      <Collapse isOpen={isOpen2}>
        <Card>
          <CardBody>
          <HomeMenu recipes={data2} title="Featured Lunch and Dinner" />
          </CardBody>
        </Card>
      </Collapse>
      
      </Jumbotron>

      <Jumbotron className="Sweets">
        <h1 className="display-3">Sweets</h1>
        <p className="lead">Pretty much all of this recipe revolves around those super-lazy weekend breakfast wher you're eating in bed, possibly binge-watching Netflix and trying your best not to spill syrup all over your pillow.</p>
        <hr className="my-2" />
        <p>Are all-day pyjamas involved? Maybe, These recipes also work really well with the situation that is brunch - they will impress and comfort everyone.</p>
        
        <Button color="primary" onClick={toggle3} style={{ marginBottom: '1rem' }}>Show Featured</Button>
      <Collapse isOpen={isOpen3}>
        <Card>
          <CardBody>
          <HomeMenu recipes={data4} title="Featured Sweets" />
          </CardBody>
        </Card>
      </Collapse>
        
      </Jumbotron>

    </div>
  );
};
