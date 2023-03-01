// 자연수 N이 입력되면 재귀함수를 이용해서 1 부터 N까지 출력하는 프로그램을 작성해라

function solution(n) {
  //DFS(깊이 우선탐색 함수) 만듦, L(level) (이름 상관 없음)
  function DFS(L) {
    if (L === 0) return; //무한반복 막음 (DFS(0)이 되었을 때 종료 )
    else {
      DFS(L - 1); //재귀함수(자기 자신 호출)
      console.log(L);
      //DFS(L-1) 이 위치에 들어가면 3, 2, 1
    }
  }
  DFS(n);
}

solution(3);
