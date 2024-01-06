import {Graph} from './graph';

describe ('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  }); 

  describe('addVertex', () => {
    it('should add a vertex to the graph', () => {
      graph.addVertex('Tokyo');
      expect(graph.adjacencyList).toEqual({'Tokyo': []});
    });

    it('should not add a vertex if it already exists', () => {
      graph.addVertex('Tokyo');
      graph.addVertex('Tokyo');
      expect(graph.adjacencyList).toEqual({'Tokyo': []});
    });
  });

  describe('addEdge', () => {
    it('should add an edge between two vertices', () => {
      graph.addVertex('Tokyo');
      graph.addVertex('Osaka');
      graph.addEdge('Tokyo', 'Osaka');
      expect(graph.adjacencyList).toEqual({'Tokyo': ['Osaka'], 'Osaka': ['Tokyo']});
    });
    it('should not add an edge if one of the vertices does not exist', () => {
      graph.addVertex('Tokyo');
      graph.addEdge('Tokyo', 'Osaka');
      expect(graph.adjacencyList).toEqual({'Tokyo': []});
    });
  });

  describe('removeEdge', () => {
    it('should remove an edge between two vertices', () => {
      graph.addVertex('Tokyo');
      graph.addVertex('Osaka');
      graph.addEdge('Tokyo', 'Osaka');
      graph.removeEdge('Tokyo', 'Osaka');
      expect(graph.adjacencyList).toEqual({'Tokyo': [], 'Osaka': []});
    });
    it('should not remove an edge if one of the vertices does not exist', () => {
      graph.addVertex('Tokyo');
      graph.removeEdge('Tokyo', 'Osaka');
      expect(graph.adjacencyList).toEqual({'Tokyo': []});
    });
  });

  describe('removeVertex', () => {
    it('should remove a vertex from the graph', () => {
      graph.addVertex('Tokyo');
      graph.addVertex('Osaka');
      graph.addVertex('Kyoto');
      graph.addEdge('Tokyo', 'Osaka');
      graph.addEdge('Osaka', 'Kyoto');
      graph.removeVertex('Osaka');
      expect(graph.adjacencyList).toEqual({'Tokyo': [], 'Kyoto': []});
    });
  });

  describe('depthFirstRecursive', () => {
    it('should return an array of vertices visited in depth first order', () => {
      graph.addVertex('Tokyo');
      graph.addVertex('Osaka');
      graph.addVertex('Kyoto');
      graph.addVertex('Nagoya');
      graph.addEdge('Tokyo', 'Osaka');
      graph.addEdge('Osaka', 'Kyoto');
      graph.addEdge('Kyoto', 'Nagoya');
      expect(graph.depthFirstRecursive('Tokyo')).toEqual(['Tokyo', 'Osaka', 'Kyoto', 'Nagoya']);
    });
    it('should return an empty array if the graph is empty', () => {
      expect(graph.depthFirstRecursive('Tokyo')).toEqual([]);
    });
    it('should return an empty array if the starting vertex does not exist', () => {
      graph.addVertex('Tokyo');
      expect(graph.depthFirstRecursive('Osaka')).toEqual([]);
    });
  });

  describe('depthFirstIterative', () => {
    it('should return an array of vertices visited in depth first order', () => {
      graph.addVertex('Tokyo');
      graph.addVertex('Osaka');
      graph.addVertex('Kyoto');
      graph.addVertex('Nagoya');
      graph.addEdge('Tokyo', 'Osaka');
      graph.addEdge('Osaka', 'Kyoto');
      graph.addEdge('Kyoto', 'Nagoya');
      expect(graph.depthFirstIterative('Tokyo')).toEqual(['Tokyo', 'Osaka', 'Kyoto', 'Nagoya']);
    });
    it('should return an empty array if the graph is empty', () => {
      expect(graph.depthFirstIterative('Tokyo')).toEqual([]);
    });
    it('should return an empty array if the starting vertex does not exist', () => {
      graph.addVertex('Tokyo');
      expect(graph.depthFirstIterative('Osaka')).toEqual([]);
    });
  });

  describe('breadthFirst', () => {
    it('should return an array of vertices visited in breadth first order', () => {
      graph.addVertex('Tokyo');
      graph.addVertex('Osaka');
      graph.addVertex('Kyoto');
      graph.addVertex('Nagoya');
      graph.addEdge('Tokyo', 'Osaka');
      graph.addEdge('Osaka', 'Kyoto');
      graph.addEdge('Kyoto', 'Nagoya');
      expect(graph.breadthFirst('Tokyo')).toEqual(['Tokyo', 'Osaka', 'Kyoto', 'Nagoya']);
    });
    it('should return an empty array if the graph is empty', () => {
      expect(graph.breadthFirst('Tokyo')).toEqual([]);
    });
    it('should return an empty array if the starting vertex does not exist', () => {
      graph.addVertex('Tokyo');
      expect(graph.breadthFirst('Osaka')).toEqual([]);
    });
  });

});