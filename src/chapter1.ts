/**
 * 인터페이스의 확장
 */

// interface Animal {
//   name: string;
//   color: string;
// }

// 타입별칭이어도 확장 가능
// 인터페이스는 객체 타입이면 전부 확장 가능
type Animal = {
  name: string;
  color: string;
};

// interface Dog {
//   name: string;
//   color: string;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   color: string;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   color: string;
//   isFly: boolean;
// }

// 중복 프로퍼티가 많음
// 수정시 서브타입 전부 고쳐줘야하는 불편함
// extends 슈퍼타입

interface Dog extends Animal {
  // name: "hello"; // 스트링 리터럴 타입으로 정의가 됨
  // 다시 정의 하려고 하는 타입이 원본 타입의 서브타입 이어야함
  // string인데 number로 하는 것 불가능
  isBark: boolean;
}

const dog: Dog = {
  name: "", // '""' 형식은 '"hello"' 형식에 할당할 수 없습니다.
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 인터페이스의 확장(상속)
// : extends를 이용해 다른 인터페이스로부터 해당 인터페이스가 가지고 있는
// 모든 프로퍼티들을 자동으로 다 포함하도록 해주는 문법

// 다중 확장
interface DogCat extends Dog, Cat {
  // Dog 타입과 Cat의 property 다 가짐
}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
