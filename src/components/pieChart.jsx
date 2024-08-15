/* eslint-disable react/no-unused-state */
import React from 'react';
import { VictoryPie } from 'victory';

const sampleData = [
  { x: 'Region A', y: 35 },
  { x: 'Region B', y: 40 },
  { x: 'Region C', y: 55 },
  { x: 'Region D', y: 70 },
  { x: 'Region E', y: 20 },
];

export default class PieChart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({ selectedDomain: domain });
  }

  handleBrush(domain) {
    this.setState({ zoomDomain: domain });
  }

  render() {
    return (
      <div>
        <VictoryPie
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          data={sampleData} />
      </div>
    );
  }
}
