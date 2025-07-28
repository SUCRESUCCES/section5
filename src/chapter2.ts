/**
 * 선언 합침
 */

// 인터페이스는 타입별칭과 달리 동일한 이름으로
// 두 개의 인터페이스 선언 가능
// -> 동일한 이름으로 정의한 인터페이스들은 결국 다 합쳐짐

interface Person {
  name: string;
}

interface Person {
  // name: number; // 충돌 : 후속 속성 선언에 같은 형식이 있어야 합니다.
  // name: "hello"; // 서브타입 불가능, 반드시 동일 타입으로만 정의
  name: string;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 0,
};

// 인터페이스
// 동일한 이름으로 중복 선언 가능
// 중복 선언하면 모든 선언 합쳐짐(선언 합침)

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

// 모듈 보강 : 선언 합침함!
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
