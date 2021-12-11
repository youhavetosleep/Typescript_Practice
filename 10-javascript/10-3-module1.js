// html파일에 type= 'module'로 지정하게 되면
// export하지 않는 이상 add함수는 해당 모듈에서만 사용 가능하게 된다.
function add(a, b) {
  return a + b;
}
// 한 파일 안에서 default는 하나만 사용할 수 있다.
export default function add(a, b) {
  return a + b;
}
