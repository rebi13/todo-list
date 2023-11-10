// 문자열 배열을 기반으로 트리 구조를 생성하는 함수
function createTree(words) {
  const tree = {};

  for (const word of words) {
    // 각 단어를 처리할 때마다 노드를 루트부터 시작
    let node = tree;

    // 단어의 각 문자를 순회하며 트리 확장
    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      // 다음 레벨의 노드로 이동
      node = node[char];
    }

    // 단어의 마지막 문자에 도달했을 때, 해당 노드를 단어의 끝임을 표시
    node.isEndOfWord = true;
  }

  // 트리 반환
  return tree;
}

function printAllWords(node, prefix) {
  // 단어의 마지막 문자일 경우 해당 string 출력
  if (node.isEndOfWord) {
    console.log(prefix);
  }
  // tree를 순회하며 마지막 문자가 아닐 경우 다시 재귀
  for (const char in node) {
    if (char !== "isEndOfWord") {
      printAllWords(node[char], prefix + char);
    }
  }
}

const words = ["t", "ti", "te", "tie", "tiger", "test", "team", "tictok"];
const tree = createTree(words);

printAllWords(tree, "");

// 출력 데이터
// t
// ti
// tie
// tiger
// tictok
// te
// test
// team
