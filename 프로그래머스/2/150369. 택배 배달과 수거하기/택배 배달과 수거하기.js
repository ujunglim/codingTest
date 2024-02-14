
function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  // 가장 먼 곳부터 방문하는데 방문할 필요가 없는 곳은 제외한다.
  while (deliveries[deliveries.length - 1] === 0) {
    deliveries.pop();
  }
  while (pickups[pickups.length - 1] === 0) {
    pickups.pop();
  }

  while (deliveries.length || pickups.length) {
    let amountCanTake = cap;
    answer += Math.max(deliveries.length, pickups.length) * 2; // 배달,수거를 해야하는 최대거리*2를 더한다.
    // 배달
    while (deliveries.length && amountCanTake) {
      // 가장 먼 집에 배달해야하는 양
      const mostFarDeliver = deliveries[deliveries.length - 1];
      // 현재 집에 배달을 완료할 수 있는 경우 다음집으로 배달을 계속한다.
      if (mostFarDeliver <= amountCanTake) {
        amountCanTake -= mostFarDeliver;
        deliveries.pop();
      }
      // 배달을 완료할 수 없으면 할 수 있을만큼만 배달하고 수거한다.
      else {
        deliveries[deliveries.length - 1] -= amountCanTake;
        amountCanTake = 0;
      }
    }
    // 배달을 안 해도 되는 집은 건너뛴다
    while (deliveries[deliveries.length - 1] === 0) {
      deliveries.pop();
    }
    amountCanTake = cap;
    // 수거
    while (pickups.length && amountCanTake) {
      const mostFarPickup = pickups[pickups.length - 1];
      if (mostFarPickup <= amountCanTake) {
        amountCanTake -= mostFarPickup;
        pickups.pop();
      } else {
        pickups[pickups.length - 1] -= amountCanTake;
        amountCanTake = 0;
      }
    }
    // 수거를 안 해도 되는 집은 건너뛴다
    while (pickups[pickups.length - 1] === 0) {
      pickups.pop();
    }
  }
  return answer;
}
