import { Advisor } from '@antv/chart-advisor';
import G6 from '@antv/g6';
import { specToG6Config } from '@antv/antv-spec';

const myAdvisor = new Advisor(); // Initialize an advisor
// Prepare data to be visualized
fetch('https://gw.alipayobjects.com/os/antfincdn/I6yCahSrA/ava-sankey-demo.json')
  .then((res) => res.json())
  .then((data) => {
    // specify which fields are used as declaring children
    const extra = {
      childrenKey: 'to',
    };
    // Get the recommended configurations and combine it with your own preferences to customize your visualization
    const advices = myAdvisor.advise({ data, options: { extra } });
    const bestAdvice = advices[0];
    if (bestAdvice) {
      const { spec } = bestAdvice;
      const g6Cfg = specToG6Config(spec); // the recommended configurations
      const myCfg = {
        // customized configurations
        layout: {
          type: 'dagre',
          rankdir: 'TB',
          nodesep: 50,
          ranksep: 100,
        },
        height: 800,
      };
      const graph = new G6.Graph({
        container: 'container',
        ...g6Cfg.cfg,
        ...myCfg,
      });
      graph.data(g6Cfg.data);
      graph.render();
    }
  });