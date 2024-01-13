/*
Graphs are a collection of nodes (vertices) and edges.
For example, a social media platform can be modeled as a graph where users are nodes and friendships are edges.
They model user relationships, drive features, and power recommendation systems. 
Recommendation systems use graphs to suggest new connections based on shared vertices.

I'm wondering if it's because of this data structure that YouTube keeps recommending NARUTO videos to me, 
even though I've never watched a single episode of it. 🤔

*/
export class Graph {
  adjacencyList: { [key: string]: string[] } = {};
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  removeVertex(vertex: string) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      adjacentVertex && this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1]?.filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2]?.filter(
      v => v !== vertex1
    );
  }

  addEdge(vertex1: string, vertex2: string) {
    if(!this.adjacencyList[vertex2] || !this.adjacencyList[vertex1]) {
      return;
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  depthFirstRecursive(start: string) {
    if(!this.adjacencyList || !this.adjacencyList[start]) {
      return [];
    }

    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex: string) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }

  depthFirstIterative(start: string) {
    if(!this.adjacencyList || !this.adjacencyList[start]) {
      return [];
    }
    const stack = [start];
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    let currentVertex: string;
    visited[start] = true;
    while (stack.length) {
      currentVertex = <string>stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirst(start: string) {
    if(!this.adjacencyList || !this.adjacencyList[start]) {
      return [];
    }
    const queue = [start];
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    let currentVertex: string;
    visited[start] = true;
    while (queue.length) {
      currentVertex = <string>queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}