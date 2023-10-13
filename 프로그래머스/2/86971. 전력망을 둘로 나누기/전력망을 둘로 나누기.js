function findNetwork(graph) {
  const queue = [graph[0][0]];
  for (let i = 0; i < queue.length; i++) {
    const currNode = queue[i];

    for (let j = graph.length - 1; j >= 0; j--) {
      if (graph[j].includes(currNode)) {
        const [[node0, node1]] = graph.splice(j, 1);
        const nextNode = node0 === currNode ? node1 : node0;
        queue.push(nextNode);
      }
    }
  }
  return queue;
}

function findNetworks(graph) {
  const result = [];
  while (graph.length > 0) {
    result.push(findNetwork(graph));
  }
  return result;
}

function solution(n, wires) {
  var answer = -1;
  const diffs = [];

  for (let i = 0; i < wires.length; i++) {
    const newWires = [...wires];
    newWires.splice(i, 1);
    const networks = findNetworks(newWires);
    const len = networks.length;

    let network0Len = networks[0].length;
    let network1Len = 0;
    if (len === 1) {
      network1Len = n - network0Len;
    } else if (len === 2) {
      network1Len = networks[1].length;
    }
    diffs.push(Math.abs(network0Len - network1Len));
  }
  answer = Math.min(...diffs);
  return answer;
}